using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using Tabloid.Models;
using Tabloid.Utils;
namespace Tabloid.Repositories
{
    public class PostRepository : BaseRepository, IPostRepository
    {
        public PostRepository(IConfiguration configuration) : base(configuration) { }

        public List<Post> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                       SELECT p.Id, p.Title, p.Content, 
                              p.ImageLocation AS HeaderImage,
                              p.CreateDateTime, p.PublishDateTime, p.IsApproved,
                              p.CategoryId, p.UserProfileId,
                              c.[Name] AS CategoryName,
                              u.FirstName, u.LastName, u.DisplayName, 
                              u.Email, u.CreateDateTime, u.ImageLocation AS AvatarImage,
                              u.UserTypeId, 
                              ut.[Name] AS UserTypeName
                         FROM Post p
                              LEFT JOIN Category c ON p.CategoryId = c.id
                              LEFT JOIN UserProfile u ON p.UserProfileId = u.id
                              LEFT JOIN UserType ut ON u.UserTypeId = ut.id
                        WHERE IsApproved = 1 AND PublishDateTime < SYSDATETIME()
                         ORDER BY p.CreateDateTime DESC";

                    var reader = cmd.ExecuteReader();

                    var posts = new List<Post>();
                    while (reader.Read())
                    {
                        posts.Add(new Post()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Title = DbUtils.GetString(reader, "Title"),
                            Content = DbUtils.GetString(reader, "Description"),
                            ImageLocation = DbUtils.GetString(reader, "Url"),
                            CreateDateTime = DbUtils.GetDateTime(reader, "DateCreated"),
                            PublishDateTime = DbUtils.GetDateTime(reader, "UserProfileId"),
                            IsApproved = DbUtils.IsNotDbNull(reader, "IsApproved"),
                            CategoryId = DbUtils.GetInt(reader, "CategoryId"),
                            UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                            UserProfile = new UserProfile()
                            {
                                Id = DbUtils.GetInt(reader, "UserProfileId"),
                                FirebaseUserId = DbUtils.GetString(reader, "FirebaseUserId"),
                                DisplayName = DbUtils.GetString(reader, "DisplayName"),
                                FirstName = DbUtils.GetString(reader, "FirstName"),
                                LastName = DbUtils.GetString(reader, "LastName"),
                                Email = DbUtils.GetString(reader, "Email"),
                                CreateDateTime = DbUtils.GetDateTime(reader, "UserProfileDateCreated"),
                                ImageLocation = DbUtils.GetString(reader, "UserProfileImageUrl"),
                                UserTypeId = DbUtils.GetInt(reader, "UserTypeId"),
                                UserType = new UserType()
                                {
                                    Id = DbUtils.GetInt(reader, "UserTypeId"),
                                    Name = DbUtils.GetString(reader, "Name")
                                }
                            },
                        });
                    }

                    reader.Close();

                    return posts;
                }
            }
        }


        //public Post GetPostById(int id)
        //{
        //    using (var conn = Connection)
        //    {
        //        conn.Open();
        //        using (var cmd = conn.CreateCommand())
        //        {
        //            cmd.CommandText = @"
        //               SELECT p.Id, p.Title, p.Content, 
        //                      p.ImageLocation AS HeaderImage,
        //                      p.CreateDateTime, p.PublishDateTime, p.IsApproved,
        //                      p.CategoryId, p.UserProfileId,
        //                      c.[Name] AS CategoryName,
        //                      u.FirstName, u.LastName, u.DisplayName, 
        //                      u.Email, u.CreateDateTime, u.ImageLocation AS AvatarImage,
        //                      u.UserTypeId, 
        //                      ut.[Name] AS UserTypeName
        //                 FROM Post p
        //                      LEFT JOIN Category c ON p.CategoryId = c.id
        //                      LEFT JOIN UserProfile u ON p.UserProfileId = u.id
        //                      LEFT JOIN UserType ut ON u.UserTypeId = ut.id
        //                WHERE p.id = @id";

        //            cmd.Parameters.AddWithValue("@id", id);
        //            var reader = cmd.ExecuteReader();

        //            Post post = null;

        //            if (reader.Read())
        //            {
        //                post = NewPostFromReader(reader);
        //            }

        //            reader.Close();

        //            return post;
        //        }
        //    }
        //}
        //public void Add(Post post)
        //{
        //    using (var conn = Connection)
        //    {
        //        conn.Open();
        //        using (var cmd = conn.CreateCommand())
        //        {
        //            cmd.CommandText = @"
        //                INSERT INTO Post (
        //                    Title, Content, ImageLocation, CreateDateTime, PublishDateTime,
        //                    IsApproved, CategoryId, UserProfileId )
        //                OUTPUT INSERTED.ID
        //                VALUES (
        //                    @Title, @Content, @ImageLocation, @CreateDateTime, @PublishDateTime,
        //                    @IsApproved, @CategoryId, @UserProfileId )";
        //            cmd.Parameters.AddWithValue("@Title", post.Title);
        //            cmd.Parameters.AddWithValue("@Content", post.Content);
        //            cmd.Parameters.AddWithValue("@ImageLocation", DbUtils.IsDbNull(post.ImageLocation));
        //            cmd.Parameters.AddWithValue("@CreateDateTime", post.CreateDateTime);
        //            cmd.Parameters.AddWithValue("@PublishDateTime", DbUtils.ValueOrDBNull(post.PublishDateTime));
        //            cmd.Parameters.AddWithValue("@IsApproved", post.IsApproved);
        //            cmd.Parameters.AddWithValue("@CategoryId", post.CategoryId);
        //            cmd.Parameters.AddWithValue("@UserProfileId", post.UserProfileId);

        //            post.Id = (int)cmd.ExecuteScalar();
        //        }
        //    }
        //}

        public void DeletePost(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                            DELETE FROM Post
                            WHERE Id = @id
                        ";

                    cmd.Parameters.AddWithValue("@id", id);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        //public void UpdatePost(Post post)
        //{
        //    using (var conn = Connection)
        //    {
        //        conn.Open();
        //        using (var cmd = conn.CreateCommand())
        //        {
        //            cmd.CommandText = @"
        //                UPDATE Post 
        //                    SET
        //                        Title = @title,
        //                        Content = @content,
        //                        ImageLocation = @imageLocation,
        //                        PublishDateTime = @publishDateTime,
        //                        CategoryId = @categoryId
        //                        WHERE Id = @id";

        //            cmd.Parameters.AddWithValue("@title", post.Title);
        //            cmd.Parameters.AddWithValue("@content", post.Content);
        //            cmd.Parameters.AddWithValue("@imageLocation", DbUtils.IsNotDbNull(post.ImageLocation));
        //            cmd.Parameters.AddWithValue("@publishDateTime", DbUtils.ValueOrDBNull(post.PublishDateTime));
        //            cmd.Parameters.AddWithValue("@categoryId", post.CategoryId);
        //            cmd.Parameters.AddWithValue("@id", post.Id);

        //            cmd.ExecuteNonQuery();
        //        }
        //    }
        //}

    }
}

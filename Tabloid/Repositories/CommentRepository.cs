using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tabloid.Models;
using Tabloid.Utils;


namespace Tabloid.Repositories
{
    public class CommentRepository: BaseRepository, ICommentRepository
    {
        public CommentRepository(IClongifuration config) : base(config) { }

    }public List <Comment> GetCommentsByPost(int postId)
    {
        using (var conn = Connection)
        {
            conn.Open();
            using (var cmd = conn.CreateCommand())
            {
                cmd.CommandText = @"
                        SELECT c.Id, c.PostId, c.UserProfileId, c.Subject, c.Content, c.CreateDateTime,
                               p.Title AS PostTitle, p.Content AS PostContent, p.ImageLocation AS PostImageLocation, p.CreateDateTime AS PostCreateDateTime, p.IsApproved AS PostIsApproved, p.CatergoryId AS PostCategoryId,
                               up.DisplayName AS UserDisplayName, up.FirstName AS UserFirstName, up.LastName AS UserLastName, up.Email AS UserEmail, up.CreateDateTime AS UserCreateDateTime, up.ImageLocation AS UserImageLocation, up.UserTypeId
                        FROM Comment c
                        LEFT JOIN Post p ON p.Id = c.PostId
                        LEFT JOIN UserProfile up ON up.Id = p.UserProfileId
                        WHERE c.PostId = @postId
                    ";
                cmd.Parameters.AddWithValue("@postId", postId);

                var reader = cmd.ExecuteReader();

                List<Comment> comments = new List<Comment>();

                while(reader.Read())
                {
                    Comment comment = new Comment()
                    {
                        Id= DbUtils.GetInt(reader, "Id"),
                        PostId= DbUtils.GetInt(reader, "PostId"),
                        UserProfileId            UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                        Subject = DbUtils.GetString(reader, "Subject"),
                        Content = DbUtils.GetString(reader, "Content"),
                        CreateDateTime = DbUtils.GetDateTime(reader, "CreateDateTime"),
                        Post = new Post()
                        {
                            Id = DbUtils.GetInt(reader, "PostId"),
                            Title = DbUtils.GetString(reader, "PostTitle"),
                            Content = DbUtils.GetString(reader, "PostContent"),
                            ImageLocation = DbUtils.GetString(reader, "PostImageLocation"),
                            CreateDateTime = DbUtils.GetDateTime(reader, "PostCreateDateTime"),
                            PublishDateTime = DbUtils.GetDateTime(reader, "PostPublishDateTime"),
                            IsApproved = DbUtils.GetBoolean(reader, "PostIsApproved")
                        },
                        UserProfile = new UserProfile()
                        {
                            Id = DbUtils.GetInt(reader, "UserProfileId"),
                            DisplayName = DbUtils.GetString(reader, "UserDisplayName"),
                            FirstName = DbUtils.GetString(reader, "UserFirstName"),
                            LastName = DbUtils.GetString(reader, "UserLastName"),
                            Email = DbUtils.GetString(reader, "UserEmail"),
                            CreateDateTime = DbUtils.GetDateTime(reader, "UserCreateDateTime"),
                            ImageLocation = DbUtils.GetString(reader, "UserImageLocation"),
                            UserTypeId = DbUtils.GetInt(reader, "UserTypeId")
                        }
                    };
                    comments.Add(comment);
                }
                reader.Close();

                return comments;
            }
        }
    }

    public Comment GetCommentById(int id)
    {
        using (var conn = Connection)
        {
            conn.Open();
            using (var cmd = conn.CreateCommand())
            {
                cmd.CommandText = @"
						SELECT c.Id, c.PostId, c.UserProfileId, c.Subject, c.Content, c.CreateDateTime,
                               p.Title AS PostTitle, p.Content AS PostContent, p.ImageLocation AS PostImageLocation, p.CreateDateTime AS PostCreateDateTime, p.IsApproved AS PostIsApproved, p.CatergoryId AS PostCategoryId,
                               up.DisplayName AS UserDisplayName, up.FirstName AS UserFirstName, up.LastName AS UserLastName, up.Email AS UserEmail, up.CreateDateTime AS UserCreateDateTime, up.ImageLocation AS UserImageLocation, up.UserTypeId
                        FROM Comment c
                        LEFT JOIN Post p ON p.Id = c.PostId
                        LEFT JOIN UserProfile up ON up.Id = p.UserProfileId
                        WHERE c.Id = @id
					";
                cmd.Parameters.AddWithValue("@id", id);

                var reader = cmd.ExecuteReader();

                if (reader.Read())
                {
                    Comment comment = new Comment()
                    {
                        Id = reader.GetInt32(reader.GetOrdinal("Id")),
                        PostId = reader.GetInt32(reader.GetOrdinal("PostId")),
                        UserProfileId = reader.GetInt32(reader.GetOrdinal("UserProfileId")),
                        Subject = reader.GetString(reader.GetOrdinal("Subject")),
                        Content = reader.GetString(reader.GetOrdinal("Content")),
                        CreateDateTime = reader.GetDateTime(reader.GetOrdinal("CreateDateTime")),
                        Post = new Post()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("PostId")),
                            Title = reader.GetString(reader.GetOrdinal("PostTitle")),
                            Content = reader.GetString(reader.GetOrdinal("PostContent")),
                            ImageLocation = reader.IsDBNull(reader.GetOrdinal("PostImageLocation"))
                            ? null
                            : reader.GetString(reader.GetOrdinal("PostImageLocation")),
                            CreateDateTime = reader.GetDateTime(reader.GetOrdinal("PostCreateDateTime")),
                            PublishDateTime = reader.IsDBNull(reader.GetOrdinal("PostPublishDateTime"))
                            ? null
                            : reader.GetDateTime(reader.GetOrdinal("PostPublishDateTime")),
                            IsApproved = reader.GetBoolean(reader.GetOrdinal("PostIsApproved"))
                        },
                        UserProfile = new UserProfile()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("UserProfileId")),
                            DisplayName = reader.GetString(reader.GetOrdinal("UserDisplayName")),
                            FirstName = reader.GetString(reader.GetOrdinal("UserFirstName")),
                            LastName = reader.GetString(reader.GetOrdinal("UserLastName")),
                            Email = reader.GetString(reader.GetOrdinal("UserEmail")),
                            CreateDateTime = reader.GetDateTime(reader.GetOrdinal("UserCreateDateTime")),
                            ImageLocation = reader.IsDBNull(reader.GetOrdinal("UserImageLocation"))
                            ? null
                            : reader.GetString(reader.GetOrdinal("UserImageLocation")),
                            UserTypeId = reader.GetInt32(reader.GetOrdinal("UserTypeId"))
                        }
                    };
                    reader.Close();
                    return comment;
                }
                reader.Close();
                return null;
            

        
                

            }
        }
    }
}

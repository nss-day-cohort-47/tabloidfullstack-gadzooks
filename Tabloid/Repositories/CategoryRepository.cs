using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tabloid.Models;
using Tabloid.Utils;

namespace Tabloid.Repositories
{
    public class CategoryRepository : BaseRepository, ICategoryRepository
    {
        public CategoryRepository(IConfiguration config) : base(config) { }
        public List<Category> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "SELECT id, name FROM Category order by name";
                    var reader = cmd.ExecuteReader();

                    var categories = new List<Category>();

                    while (reader.Read())
                    {
                        categories.Add(new Category()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("id")),
                            Name = reader.GetString(reader.GetOrdinal("name")),
                        });
                    }

                    reader.Close();

                    return categories;
                }
            }
        }

        public Category GetCategoryById(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                          SELECT  c.name
                            from Category c 
                              where c.id = @id";

                    cmd.Parameters.AddWithValue("@id", id);

                    SqlDataReader reader = cmd.ExecuteReader();

                    if (reader.Read())
                    {
                        Category category = new Category
                        {
                            Id = id,
                            Name = reader.GetString(reader.GetOrdinal("Name"))
                        };

                        reader.Close();
                        return category;
                    }
                    else
                    {
                        reader.Close();
                        return null;
                    }
                }
            }
        }
        
                public void AddCategory(Category category)
                {
                    using (SqlConnection conn = Connection)
                    {
                        conn.Open();
                        using (SqlCommand cmd = conn.CreateCommand())
                        {
                            cmd.CommandText = @"
                            INSERT INTO Category ([Name])
                            OUTPUT INSERTED.ID
                            VALUES (@name);
                        ";

                            cmd.Parameters.AddWithValue("@name", category.Name);


                            int id = (int)cmd.ExecuteScalar();

                            category.Id = id;
                        }
                    }
                }

        public void Delete(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "DELETE FROM Category WHERE Id = @id";
                    DbUtils.AddParameter(cmd, "@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }

                public void UpdateCategory(Category category)
                {
                    using (var conn = Connection)
                    {
                        conn.Open();
                        using (SqlCommand cmd = conn.CreateCommand())
                        {
                            cmd.CommandText = @"
                                    UPDATE category
                                    SET 
                                        Name = @name
                                    WHERE Id = @id";
                    DbUtils.AddParameter(cmd, "@name", category.Name);
                    DbUtils.AddParameter(cmd, "@id", category.Id);
                            cmd.ExecuteNonQuery();
                        }
                    }
                }
       
    }
}

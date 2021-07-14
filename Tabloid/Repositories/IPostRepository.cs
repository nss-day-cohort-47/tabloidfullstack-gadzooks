using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface IPostRepository
    {
        void DeletePost(int id);
        List<Post> GetAll();
    }
}
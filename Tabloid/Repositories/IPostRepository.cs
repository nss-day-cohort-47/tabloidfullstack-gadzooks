using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface IPostRepository
    {
        void DeletePost(int id);
        List<Post> GetAll();
        List<Post> GetAllPosts();
        List<Post> GetCurrentUserPosts(string firebaseId);
        UserProfile GetByFirebaseUserId(string firebaseUserId);
    }
}
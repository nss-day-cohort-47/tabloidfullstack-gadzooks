namespace Tabloid.Repositories
{
    public interface IPostRepository
    {
        void Add(Post post);
        void DeletePost(int id);
        System.Collections.Generic.List<Post> GetAllPosts();
        Post GetPostById(int id);
        void UpdatePost(Post post);
    }
}
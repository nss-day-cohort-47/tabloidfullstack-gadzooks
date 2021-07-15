﻿using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface IPostRepository
    {
        List<Post> GetAll();
        List<Post> GetAllPosts();
        Post GetPostById(int id);
        void DeletePost(int id);
        void Add(Post post);
        void UpdatePost(Post post);

    }
}
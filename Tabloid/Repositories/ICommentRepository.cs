using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface ICommentRepository
    {
        List<Comment> GetCommentsByPost(int PostId);

        Comment GetCommentById(int id);

        void AddComment(Comment comment);

        void UpdateComment(Comment comment);

        void DeleteComment(int id);
    }
}
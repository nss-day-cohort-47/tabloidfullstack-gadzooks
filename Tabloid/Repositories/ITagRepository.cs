using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface ITagRepository
    {
        Tag GetById(int id);
        List<Tag> GetAll();
        void Add(Tag tag);
        void Update(Tag tag);
        void Delete(int id);
    }
}
using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface ICategoryRepository
    {
        Category GetCategoryById(int id);
        List<Category> GetAll();
    }
}
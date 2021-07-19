using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface ICategoryRepository
    {
        void AddCategory(Category category);
        List<Category> GetAll();
        Category GetCategoryById(int id);
        void Delete(int id);
        void UpdateCategory(Category category);
    }
}
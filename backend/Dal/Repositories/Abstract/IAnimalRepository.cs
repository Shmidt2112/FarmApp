using Dal.Entities;

namespace Dal.Repositories.Abstract;

public interface IAnimalRepository : IGenericRepository<AnimalEntity>
{
    Task<bool> ExistsByNameAsync(string name);
}
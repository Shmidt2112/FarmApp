using Dal.Entities;
using Dal.Repositories.Abstract;
using Microsoft.EntityFrameworkCore;

namespace Dal.Repositories.Impl;

public class AnimalRepository: GenericRepository<AnimalEntity>, IAnimalRepository
{
    public AnimalRepository(ApplicationDbContext dbContext) : base(dbContext)
    {

    }

    public async Task<bool> ExistsByNameAsync(string name)
    {
        return await _dbContext.Animals.AnyAsync(a => a.Name == name);
    }
}
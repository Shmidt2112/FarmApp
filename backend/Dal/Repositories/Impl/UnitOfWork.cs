using Dal.Repositories.Abstract;

namespace Dal.Repositories.Impl;

public class UnitOfWork: IUnitOfWork
{
    private readonly ApplicationDbContext _dbContext;
    public IAnimalRepository Animals { get; }

    public UnitOfWork(ApplicationDbContext dbContext,
        IAnimalRepository animalRepository)
    {
        _dbContext = dbContext;
        Animals = animalRepository;
    }

    public int Save()
    {
        return _dbContext.SaveChanges();
    }

    public void Dispose()
    {
        Dispose(true);
        GC.SuppressFinalize(this);
    }

    protected virtual void Dispose(bool disposing)
    {
        if (disposing)
        {
            _dbContext.Dispose();
        }
    }

}

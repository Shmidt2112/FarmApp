namespace Dal.Repositories.Abstract;

public interface IUnitOfWork : IDisposable
{
    IAnimalRepository Animals { get; }

    int Save();
}
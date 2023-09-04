using Dal.Repositories.Abstract;
using Dal.Repositories.Impl; 
using Microsoft.Extensions.DependencyInjection;

namespace Dal.ServiceExtensions;

public static class ServiceExtension
{
    public static IServiceCollection AddDalServices(this IServiceCollection services)
    {
        services.AddDbContext<ApplicationDbContext>();
        services.AddScoped<IUnitOfWork, UnitOfWork>();
        services.AddScoped<IAnimalRepository, AnimalRepository>();

        return services;
    }
}

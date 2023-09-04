using FluentValidation;
using Microsoft.Extensions.DependencyInjection;
using Services.Abstract;
using Services.Dto;
using Services.Impl;
using Services.Mappings;
using Services.Validators;

namespace Services.ServiceExtensions;

public static class ServiceExtension
{
    public static IServiceCollection AddServices(this IServiceCollection services)
    { 
        services.AddScoped<IAnimalService, AnimalService>();
        services.AddScoped<IValidator<CreateAnimalDto>, AnimalCreateValidator>();
        services.AddAutoMapper(cfg =>
        {
            cfg.AddProfile<AnimalProfile>();
        });

        return services;
    }
}

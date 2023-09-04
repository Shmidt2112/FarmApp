using AutoMapper;
using Dal.Entities;
using Services.Dto;

namespace Services.Mappings;

public class AnimalProfile: Profile
{
    public AnimalProfile()
    {
        CreateMap<AnimalEntity, AnimalDto>();
        CreateMap<CreateAnimalDto, AnimalEntity>();
    }
}
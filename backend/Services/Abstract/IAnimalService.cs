using Services.Dto;
using Services.Utils;

namespace Services.Abstract;

public interface IAnimalService
{
    Task<bool> CreateAnimal(CreateAnimalDto createAnimalDto);

    Task<IEnumerable<AnimalDto>> GetAllAnimals();

    Task<bool> DeleteAnimal(int animalId);
    Task<bool> IsNameUniqueAsync(string name);
}

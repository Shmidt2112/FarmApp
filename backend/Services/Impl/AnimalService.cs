using AutoMapper;
using Dal.Entities;
using Dal.Repositories.Abstract;
using Services.Abstract;
using Services.Dto;

namespace Services.Impl;

public class AnimalService : IAnimalService
{
    public IUnitOfWork _unitOfWork; 
    private readonly IMapper _mapper;

    public AnimalService(IUnitOfWork unitOfWork, 
        IMapper mapper)
    {
        _unitOfWork = unitOfWork; 
        _mapper = mapper;
    }

    public async Task<bool> CreateAnimal(CreateAnimalDto dto)
    {
        if (await IsNameUniqueAsync(dto.Name))
        {
            await _unitOfWork.Animals.Add(_mapper.Map<AnimalEntity>(dto));

            var result = _unitOfWork.Save();

            if (result > 0)
                return true;
        }

        return false;
    }

    public async Task<bool> DeleteAnimal(int animalId)
    {
        if (animalId > 0)
        {
            var entity = await _unitOfWork.Animals.GetById(animalId);
            if (entity != null)
            {
                _unitOfWork.Animals.Delete(entity);
                var result = _unitOfWork.Save();

                if (result > 0)
                    return true;
                else
                    return false;
            }
        }

        return false;
    }

    public async Task<IEnumerable<AnimalDto>> GetAllAnimals()
    {
        var entities = await _unitOfWork.Animals.GetAll();
        return _mapper.Map<IEnumerable<AnimalDto>>(entities);
    }

    public async Task<bool> IsNameUniqueAsync(string name)
    {
        return !await _unitOfWork.Animals.ExistsByNameAsync(name);
    }
}
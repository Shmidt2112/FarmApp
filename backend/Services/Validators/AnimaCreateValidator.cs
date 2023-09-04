using FluentValidation;
using Services.Abstract;
using Services.Dto;

namespace Services.Validators;

public class AnimalCreateValidator : AbstractValidator<CreateAnimalDto>
{
    private readonly IAnimalService _animalService;

    public AnimalCreateValidator(IAnimalService animalService)
    {
        _animalService = animalService;

        RuleFor(animalDto => animalDto.Name)
            .NotEmpty().WithMessage("Name is required.")
            .MaximumLength(10).WithMessage("Name cannot exceed 10 characters.")
            .MustAsync(BeUniqueName).WithMessage("Name must be unique.");
    }

    private async Task<bool> BeUniqueName(string name, CancellationToken cancellationToken)
    {
        return await _animalService.IsNameUniqueAsync(name);
    }
}

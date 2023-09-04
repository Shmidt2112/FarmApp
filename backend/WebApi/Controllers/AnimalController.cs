using FluentValidation;
using Microsoft.AspNetCore.Mvc;
using Services.Abstract;
using Services.Dto;

namespace WebApi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AnimalsController : ControllerBase
{
    private readonly IAnimalService _animalService;
    private readonly IValidator<CreateAnimalDto> _animalCreateValidator;

    public AnimalsController(IAnimalService animalService,
        IValidator<CreateAnimalDto> animalCreateValidator)
    {
        _animalService = animalService;
        _animalCreateValidator = animalCreateValidator;
    }

    /// <summary>
    /// Get the list of animal
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    public async Task<IActionResult> GetAnimalList()
    {
        var animalList = await _animalService.GetAllAnimals();
        if (animalList == null)
        {
            return NotFound();
        }

        return Ok(animalList);
    }

    /// <summary>
    /// Add a new animal
    /// </summary>
    /// <param name="animalEntity"></param>
    /// <returns></returns>
    [HttpPost]
    public async Task<IActionResult> CreateAnimal([FromBody]CreateAnimalDto createAnimalDto)
    {
        var validationResult = await _animalCreateValidator.ValidateAsync(createAnimalDto);
        if (validationResult.IsValid)
        {
            var isSuccess = await _animalService.CreateAnimal(createAnimalDto);

            if (isSuccess)
            {
                return Ok();
            }

            return BadRequest();
        }

        return BadRequest(new { errors = validationResult.Errors.Select(x => x.ErrorMessage) });
    }

    /// <summary>
    /// Delete animal by id
    /// </summary>
    /// <param name="animalId"></param>
    /// <returns></returns>
    [HttpDelete("{animalId}")]
    public async Task<IActionResult> DeleteAnimal(int animalId)
    {
        var isAnimalCreated = await _animalService.DeleteAnimal(animalId);

        if (isAnimalCreated)
        {
            return Ok(isAnimalCreated);
        }
        else
        {
            return BadRequest();
        }
    }
    
    [HttpPost("isNameUnique")]
    public async Task<IActionResult> IsNameUnique([FromBody] string name)
    {
        bool isUnique = await _animalService.IsNameUniqueAsync(name); 

        return Ok(isUnique);
    }
}
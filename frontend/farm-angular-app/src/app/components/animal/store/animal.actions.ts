import { createAction, props } from '@ngrx/store';
import { AnimalDto } from 'src/app/components/animal/dto/animal.dto';
import { CreateAnimalDto } from "src/app/components/animal/dto/create-animal.dto";


export const loadAnimals = createAction(
    '[Animal] Load Animals',
);

export const animalsLoaded = createAction(
    '[Animal] Animals Loaded Successfully',
    props<{ animals: AnimalDto[] }>()
);

export const createAnimal = createAction(
    '[Animal] Create Animal',
    props<{ animal: CreateAnimalDto }>()
);

export const deleteAnimal = createAction(
    '[Animal] Delete Animal',
    props<{ animalId: number }>()
);

export const setErrors = createAction(
    '[Error] Set Error Messages',
    props<{ errors: string[] }>()
);

export const clearErrors = createAction(
    '[Error] Clear Error Messages'
);

export const animalActionTypes = {
    loadAnimals,
    animalsLoaded,
    createAnimal,
    deleteAnimal,
    setErrors,
    clearErrors
};

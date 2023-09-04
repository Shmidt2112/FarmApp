import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { AnimalDto } from 'src/app/components/animal/dto/animal.dto';
import { animalActionTypes } from 'src/app/components/animal/store/animal.actions';

export interface AnimalState extends EntityState<AnimalDto> {
    animalsLoaded: boolean;
    errors: string[];
}

export const adapter: EntityAdapter<AnimalDto> = createEntityAdapter<AnimalDto>();

export const initialState = adapter.getInitialState({
    animalsLoaded: false
});

export const animalReducer = createReducer(
    initialState,

    on(animalActionTypes.animalsLoaded, (state, action) => {
        return adapter.setAll(
            action.animals,
            {...state, animalsLoaded: true}
        );
    }),

    on(animalActionTypes.deleteAnimal, (state, action) => {
        return adapter.removeOne(action.animalId, state);
    }),

    on(animalActionTypes.setErrors, (state, action) => {
        return {...state, errors: action.errors};
    }),

    on(animalActionTypes.clearErrors, (state, _) => {
        return {...state, errors: null};
    })
);

export const {selectAll, selectIds} = adapter.getSelectors();
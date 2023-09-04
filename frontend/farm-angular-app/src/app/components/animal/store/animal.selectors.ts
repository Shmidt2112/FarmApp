
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AnimalState, selectAll } from 'src/app/components/animal/store/animal.reducer';

export const animalFeatureSelector = createFeatureSelector<AnimalState>('animals');

export const getAllAnimals = createSelector(
  animalFeatureSelector,
  selectAll
);

export const areAnimalLoaded = createSelector(
  animalFeatureSelector,
  state => state.animalsLoaded
);

export const selectErrors = createSelector(
  animalFeatureSelector,
  state => state.errors
);
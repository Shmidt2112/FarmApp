
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalService } from 'src/app/components/animal/services/animal.service';
import { animalActionTypes } from "src/app/components/animal/store/animal.actions";
import { of } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/reducers";

@Injectable()
export class AnimalEffects {

  loadAnimals$ = createEffect(() =>
    this.actions$.pipe(
      ofType(animalActionTypes.loadAnimals),
      concatMap(() => this.animalService.getAllAnimals().pipe(
          map(animals => animalActionTypes.animalsLoaded({animals}))
      ))
    )
  );

  createAnimal$ = createEffect(() =>
    this.actions$.pipe(
      ofType(animalActionTypes.createAnimal),
      concatMap((action) => this.animalService.createAnimal(action.animal).pipe(
        tap(() => this.router.navigateByUrl('/animals')),
          catchError(error => {
              this.store.dispatch(animalActionTypes.setErrors({ errors: error.error.errors }));
              return of();
          })
      ))
    ),
      { dispatch: false}
  );

  deleteAnimal$ = createEffect(() =>
    this.actions$.pipe(
      ofType(animalActionTypes.deleteAnimal),
      concatMap((action) => this.animalService.deleteAnimal(action.animalId))
    ),
    { dispatch: false }
  );

  constructor(private animalService: AnimalService, private actions$: Actions, private router: Router, private store: Store<AppState>) { }
}

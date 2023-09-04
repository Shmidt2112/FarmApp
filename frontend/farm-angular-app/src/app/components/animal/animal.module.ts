import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalService } from 'src/app/components/animal/services/animal.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AnimalListComponent } from 'src/app/components/animal/components/animal-list/animal-list.components';
import { AnimalViewComponent } from 'src/app/components/animal/components/animal-view/animal-view.components';
import { AnimalEffects } from 'src/app/components/animal/store/animal.effect';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { animalReducer } from 'src/app/components/animal/store/animal.reducer';
import { LetDirective } from "@ngrx/component";

@NgModule({
  declarations: [
    AnimalListComponent,
    AnimalViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('animals', animalReducer),
    EffectsModule.forFeature([AnimalEffects]),
    LetDirective
  ],
  exports: [
    AnimalListComponent,
    AnimalViewComponent
  ],
  providers: [AnimalService]
})
export class AnimalModule { }

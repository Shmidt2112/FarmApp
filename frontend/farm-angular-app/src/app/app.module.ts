import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { AnimalViewComponent } from "src/app/components/animal/components/animal-view/animal-view.components";
import { AnimalListComponent } from "src/app/components/animal/components/animal-list/animal-list.components";
import { AnimalModule } from "src/app/components/animal/animal.module";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import {
  DeleteConfirmationModalComponent
} from "src/app/modals/delete-confirmation-modal/delete-confirmation-modal.component";
import { ModalModule } from "ngx-bootstrap/modal";

const routes = [
  {
    path: 'animals',
    component: AnimalListComponent
  },
  {path: 'create', component: AnimalViewComponent},
  {path: '**', redirectTo: 'animals'}
];

@NgModule({
  declarations: [
    AppComponent,
    DeleteConfirmationModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    AnimalModule,
    RouterModule.forRoot(routes),
    EffectsModule.forRoot([]),
    StoreModule.forRoot(),
    RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}

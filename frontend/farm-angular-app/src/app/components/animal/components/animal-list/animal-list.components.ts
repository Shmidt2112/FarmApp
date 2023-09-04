import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AnimalDto } from 'src/app/components/animal/dto/animal.dto';
import { AppState } from 'src/app/store/reducers';
import { animalActionTypes, loadAnimals } from 'src/app/components/animal/store/animal.actions';
import { getAllAnimals } from 'src/app/components/animal/store/animal.selectors';
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import {
  DeleteConfirmationModalComponent
} from "src/app/modals/delete-confirmation-modal/delete-confirmation-modal.component";

@Component({
  selector: 'animal-list',
  styleUrls: ['./animal-list.component.css'],
  templateUrl: './animal-list.component.html'
})
export class AnimalListComponent implements OnInit {

  readonly animals$: Observable<AnimalDto[]>;
  private bsModalRef: BsModalRef | undefined;
  constructor(private store: Store<AppState>,
              private modalService: BsModalService) {
    this.animals$ = this.store.select(getAllAnimals);
  }

  ngOnInit() {
    this.store.dispatch(loadAnimals());
  }

  deleteAnimal(animalId: number) {
    this.bsModalRef = this.modalService.show(DeleteConfirmationModalComponent);

    this.bsModalRef.content.onConfirm.subscribe(() => {
      this.store.dispatch(animalActionTypes.deleteAnimal({ animalId }));
    });

  }
}

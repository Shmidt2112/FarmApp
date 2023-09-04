import { Store } from '@ngrx/store';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { clearErrors, createAnimal } from 'src/app/components/animal/store/animal.actions';
import { AppState } from 'src/app/store/reducers';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { selectErrors } from "src/app/components/animal/store/animal.selectors";
import { CreateAnimalDto } from "src/app/components/animal/dto/create-animal.dto";
import { debounceTime, distinctUntilChanged, takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";

@Component({
  selector: 'animal-view',
  styleUrls: ['./animal-view.component.css'],
  templateUrl: './animal-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimalViewComponent implements OnInit, OnDestroy {
  readonly form: FormGroup;
  errors$ = this.store.select(selectErrors);
  private destroy$ = new Subject<boolean>();
  get name() {
    return this.form.get('name');
  }
  constructor(private store: Store<AppState>,
              private readonly fb: FormBuilder) {

    this.form = this.fb.group({
      name: ['', [Validators.required]]
    })
  }

  ngOnInit() {
    this.name?.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe(() => this.store.dispatch(clearErrors()));
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    const animal: CreateAnimalDto = {name: this.form.value.name};
    this.store.dispatch(createAnimal({animal}));
  }

  ngOnDestroy() {
    this.store.dispatch(clearErrors());

    this.destroy$.next(true);
    this.destroy$.complete();
  }
}

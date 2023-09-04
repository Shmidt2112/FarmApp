import { Component, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'delete-confirmation-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Confirm Deletion</h4>
      <button type="button" class="close" aria-label="Close" (click)="cancel()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      Are you sure you want to delete this item?
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" (click)="cancel()">Cancel</button>
      <button type="button" class="btn btn-danger" (click)="confirmDelete()">Delete</button>
    </div>
  `,
})
export class DeleteConfirmationModalComponent {
  constructor(public bsModalRef: BsModalRef) {}

  confirmDelete() {
    this.bsModalRef.hide();
    this.onConfirm.emit();
  }

  cancel() {
    this.bsModalRef.hide();
  }

  onConfirm: EventEmitter<void> = new EventEmitter<void>();
}

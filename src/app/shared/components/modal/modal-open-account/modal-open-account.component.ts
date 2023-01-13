import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-modal',
  templateUrl: './modal-open-account.component.html',
  styleUrls: ['./modal-open-account.component.scss']
})
export class ModalComponent {
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();

  closeModal(): void {
    this.isOpen = false;
    this.close.emit();
  }
}

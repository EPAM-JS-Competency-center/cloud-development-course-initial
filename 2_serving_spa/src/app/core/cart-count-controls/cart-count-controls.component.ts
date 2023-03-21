import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cart-count-controls',
  templateUrl: './cart-count-controls.component.html',
  styleUrls: ['./cart-count-controls.component.scss'],
  exportAs: 'countControls',
})
export class CartCountControlsComponent {
  @Input() count!: number;
  @Input() available!: number;
  @Input() productName!: string;

  @Output() increment = new EventEmitter<void>();
  @Output() decrement = new EventEmitter<void>();

  @ViewChild('addBtn', { read: ElementRef })
  addBtn!: ElementRef<HTMLButtonElement>;

  focusAddBtn(): void {
    this.addBtn.nativeElement.focus();
  }
}

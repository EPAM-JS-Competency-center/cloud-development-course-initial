import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductCheckout } from '../../products/product.interface';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss'],
})
export class OrderSummaryComponent {
  @Input() products!: ProductCheckout[];
  @Input() showControls!: boolean;
  @Input() totalPrice!: number;

  /** Add productId */
  @Output() add = new EventEmitter<string>();
  /** Remove productId */
  @Output() remove = new EventEmitter<string>();
}

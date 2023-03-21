import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductCheckout } from '../../products/product.interface';

@Component({
  selector: 'app-product-item-checkout',
  templateUrl: './product-item-checkout.component.html',
  styleUrls: ['./product-item-checkout.component.scss'],
})
export class ProductItemCheckoutComponent {
  @Input() product!: ProductCheckout;
  @Input() hideControls = false;

  @Output() add = new EventEmitter<void>();
  @Output() remove = new EventEmitter<void>();
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart-shipping-form',
  templateUrl: './cart-shipping-form.component.html',
  styleUrls: ['./cart-shipping-form.component.scss'],
})
export class CartShippingFormComponent {
  @Input() shippingInfo!: UntypedFormGroup;

  @Output() nextStep = new EventEmitter<void>();
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartCountControlsComponent } from './cart-count-controls.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CartCountControlsComponent],
  imports: [CommonModule, MatButtonModule, MatTooltipModule, MatIconModule],
  exports: [CartCountControlsComponent],
})
export class CartCountControlsModule {}

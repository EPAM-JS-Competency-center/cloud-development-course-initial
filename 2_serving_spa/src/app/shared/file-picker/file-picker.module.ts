import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilePickerComponent } from './file-picker.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [FilePickerComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [FilePickerComponent],
})
export class FilePickerModule {}

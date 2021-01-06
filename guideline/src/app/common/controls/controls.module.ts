import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';


@NgModule({
  declarations: [InputComponent],
  exports: [
    InputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
})
export class ControlsModule { }

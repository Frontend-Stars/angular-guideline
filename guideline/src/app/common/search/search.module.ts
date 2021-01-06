import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { ControlsModule } from '../controls/controls.module';


@NgModule({
  declarations: [
    SearchFormComponent
  ],
  exports: [
    SearchFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ControlsModule,
  ],
})
export class SearchModule { }

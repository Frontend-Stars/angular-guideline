import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { SearchFormComponent } from './components/search-form/search-form.component';


@NgModule({
  declarations: [
    SearchFormComponent
  ],
  exports: [
    SearchFormComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
})
export class SearchModule { }

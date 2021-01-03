import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SearchForm } from '../../../../common/search/types/search.type';


@Injectable()
export class TodoSearchForm implements SearchForm {
  form: FormGroup  = this.fb.group({
    searchInput: [
      '',
      [
        Validators.required,
        Validators.minLength(3)
      ]
    ]
  });

  constructor(
    private readonly fb: FormBuilder
  ) {}

  submit(): void {
    console.log('todo maybe write form data to store', this.form.value);
  }
}

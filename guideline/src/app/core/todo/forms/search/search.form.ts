import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchForm } from '@common/search/types/search.type';


@Injectable()
export class TodoSearchForm implements SearchForm {
  form: FormGroup  = this.fb.group({
    searchInput: ['']
  });

  constructor(
    private readonly fb: FormBuilder
  ) {}

  reset(): void {
    this.form.reset();
  }
}

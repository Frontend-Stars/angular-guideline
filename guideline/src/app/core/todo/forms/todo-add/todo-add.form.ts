import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Injectable()
export class TodoAddForm {
  form: FormGroup  = this.fb.group({
    title: [
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

  reset(): void {
    this.form.reset();
  }
}

import {
  Component,
  ChangeDetectionStrategy
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'ag-render-page',
  templateUrl: './render-page.component.html',
  styleUrls: ['./render-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RenderPageComponent {
  form = this.fb.group({
    name: ['', Validators.required]
  });
  test: any = {
    name: 'kek'
  };
  test2 = 'kek';

  constructor(
    private fb: FormBuilder
  ) {
  }

  reset(): void {
    this.form.reset({ name: 'test' });
    this.test2 = 'kek';
  }

  submit(): void {
    this.test.name = this.form.value.name;
  }

  change(): void {
    this.test2 = 'kek is changed';
  }
}

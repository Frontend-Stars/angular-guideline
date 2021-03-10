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
  test2 = '';
  isLinkTransport = true;

  constructor(
    private fb: FormBuilder
  ) {
  }

  reset(): void {
    this.form.reset({ name: 'test' });
  }

  submit(): void {
    if (this.isLinkTransport) {
      this.test.name = this.form.value.name;
    } else {
      this.test2 = this.form.value.name;
    }
  }

  toggleTransport(): void {
    this.isLinkTransport = !this.isLinkTransport;
  }
}

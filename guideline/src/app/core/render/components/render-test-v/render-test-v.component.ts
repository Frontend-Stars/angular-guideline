import {
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'ag-render-test-v',
  templateUrl: './render-test-v.component.html'
})
export class RenderTestVComponent {
  @Input() test: any;

  constructor(private cdr: ChangeDetectorRef) {
    cdr.detach();
  }

  log(): boolean {
    console.log('RenderTestVComponent');

    return true;
  }
}

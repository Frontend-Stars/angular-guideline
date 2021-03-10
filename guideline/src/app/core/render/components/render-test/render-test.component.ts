import {
  Component,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'ag-render-test',
  templateUrl: './render-test.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RenderTestComponent {
  @Input() test: any;
}

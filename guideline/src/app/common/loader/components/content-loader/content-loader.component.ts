import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'ag-content-loader',
  templateUrl: './content-loader.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentLoaderComponent {
  @Input() loading$: Observable<boolean>;
}

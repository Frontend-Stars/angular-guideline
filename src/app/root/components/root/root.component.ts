import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'ag-root',
  templateUrl: './root.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RootComponent {}

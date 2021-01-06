import { Component, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'ag-layout-footer',
  templateUrl: './layout-footer.component.html',
  styleUrls: ['./layout-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutFooterComponent {
  today = new Date();
}

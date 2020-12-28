import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'ag-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  title = 'Dashboard';

  constructor(
    private readonly titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './dashboard.module';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
  },
];


@NgModule({
  imports: [
    DashboardModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardRoutingModule {}

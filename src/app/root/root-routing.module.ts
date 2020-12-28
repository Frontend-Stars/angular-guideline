import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../core/dashboard/dashboard.routing').then(m => m.DashboardRoutingModule),
  },
  {
    path: 'todos',
    loadChildren: () => import('../core/todo/todo.routing').then(m => m.TodoRoutingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RootRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DASHBOARD_ROUTING_ROOT_URL } from '../core/dashboard/consts/router.const';
import { TODO_ROUTING_ROOT_URL } from '../core/todo/consts/router.const';

const routes: Routes = [
  {
    path: '',
    redirectTo: DASHBOARD_ROUTING_ROOT_URL,
    pathMatch: 'full',
  },
  {
    path: DASHBOARD_ROUTING_ROOT_URL,
    loadChildren: () => import('../core/dashboard/dashboard.routing').then(m => m.DashboardRoutingModule),
  },
  {
    path: TODO_ROUTING_ROOT_URL,
    loadChildren: () => import('../core/todo/todo.routing').then(m => m.TodoRoutingModule),
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RootRoutingModule { }

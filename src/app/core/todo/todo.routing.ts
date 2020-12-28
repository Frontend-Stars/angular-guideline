import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoModule } from './todo.module';
import { TodoPageComponent } from './components/todo-page/todo-page.component';

const routes: Routes = [
  {
    path: '',
    component: TodoPageComponent,
  },
];

@NgModule({
  imports: [
    TodoModule,
    RouterModule.forChild(routes)
  ]
})
export class TodoRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TodoManager } from '../../managers/todo/todo.manager';
import { TodoResource } from '../../resources/todo/todo.resource';
import { TodoStore } from '../../stores/todo/todo.store';
import { TodoQuery } from '../../stores/todo/todo.query';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlsModule } from '../../../../common/controls/controls.module';


@NgModule({
  declarations: [
    TodoListComponent,
    TodoItemComponent,
    TodoAddComponent
  ],
  exports: [
    TodoListComponent,
    TodoItemComponent
  ],
  providers: [
    TodoManager,
    TodoResource,
    TodoStore,
    TodoQuery,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ControlsModule,
  ],
})
export class TodoViewModule { }

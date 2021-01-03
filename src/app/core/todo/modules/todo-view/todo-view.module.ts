import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';

import { TodoManager } from '../../managers/todo/todo.manager';

import { TodoResource } from '../../resources/todo/todo.resource';

import { TodoStore } from '../../stores/todo/todo.store';
import { TodoQuery } from '../../stores/todo/todo.query';


@NgModule({
  declarations: [
    TodoListComponent,
    TodoItemComponent
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
  ],
})
export class TodoViewModule { }

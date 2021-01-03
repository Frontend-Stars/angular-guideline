import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ID } from '@datorama/akita';
import { Observable } from 'rxjs';

import { TodoList, TodoModel } from '../../../../types/todo.type';

import { TodoManager } from '../../../../managers/todo/todo.manager';
import { TodoQuery } from '../../../../stores/todo/todo.query';


@Component({
  selector: 'ag-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
  todos$: Observable<TodoList> = this.todoQuery.selectAll();
  count$: Observable<number> = this.todoQuery.selectCount();

  constructor(
    private readonly todoManager: TodoManager,
    private readonly todoQuery: TodoQuery
  ) {}

  add(): void {
    this.todoManager.addTodo({
      title: 'test',
      completed: true
    });
  }

  remove(todo: TodoModel): void {
    this.todoManager.removeTodo(todo);
  }

  trackByMethod(i: number, item: TodoModel): ID {
    return item.id;
  }
}

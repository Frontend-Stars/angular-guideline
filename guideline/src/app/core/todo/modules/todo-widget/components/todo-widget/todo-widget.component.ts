import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TodoQuery } from '../../../../stores/todo/todo.query';
import { TodoManager } from '../../../../managers/todo/todo.manager';
import { TodoModel } from '../../../../types/todo.type';


@Component({
  selector: 'ag-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoWidgetComponent {
  todos$ = this.todoQuery.todos$;

  constructor(
    private readonly todoQuery: TodoQuery,
    private readonly todoManager: TodoManager,
  ) { }

  remove(todo: TodoModel): void {
    this.todoManager.removeTodo(todo);
  }
}

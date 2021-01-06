import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TodoQuery } from '../../../../stores/todo/todo.query';


@Component({
  selector: 'ag-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoWidgetComponent {
  completedTodos$ = this.todoQuery.completedTodos$;

  constructor(
    private readonly todoQuery: TodoQuery
  ) { }
}

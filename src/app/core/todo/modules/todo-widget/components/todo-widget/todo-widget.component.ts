import { Component, ChangeDetectionStrategy } from '@angular/core';
import { tap } from 'rxjs/operators';
import { TodoQuery } from '../../../../stores/todo/todo.query';

@Component({
  selector: 'ag-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoWidgetComponent {
  completedTodos$ = this.todoQuery.completedTodos$.pipe(tap(console.log));

  constructor(
    private readonly todoQuery: TodoQuery
  ) { }
}

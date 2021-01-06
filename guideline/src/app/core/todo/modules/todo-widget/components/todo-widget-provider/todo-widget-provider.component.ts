import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TodoManager } from '../../../../managers/todo/todo.manager';
import { TodoQuery } from '../../../../stores/todo/todo.query';


@Component({
  selector: 'ag-todo-widget-provider',
  templateUrl: './todo-widget-provider.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoWidgetProviderComponent implements OnInit {
  loading$ = this.todoQuery.selectLoading();

  constructor(
    private readonly todoQuery: TodoQuery,
    private readonly todoManager: TodoManager
  ) { }

  ngOnInit(): void {
    this.todoManager.getTodoList().subscribe();
  }

}

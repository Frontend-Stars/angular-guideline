import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TodoManager } from '../../../../managers/todo/todo.manager';

@Component({
  selector: 'ag-todo-widget-provider',
  templateUrl: './todo-widget-provider.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoWidgetProviderComponent implements OnInit {
  loading$ = this.todoManager.todoListLoading$;

  constructor(
    private readonly todoManager: TodoManager
  ) { }

  ngOnInit(): void {
    this.todoManager.getTodoList().subscribe({
      next: (data) => {
        console.log(data);
      },
      complete: () => {
        console.log('complete');
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

}

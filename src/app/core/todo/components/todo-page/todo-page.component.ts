import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TodoManager } from '../../managers/todo/todo.manager';


@Component({
  selector: 'ag-todo-page',
  templateUrl: './todo-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoPageComponent implements OnInit {
  title = 'Todo';
  loading$ = this.todoManager.todoListLoading$;

  constructor(
    private readonly titleService: Title,
    private readonly todoManager: TodoManager
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
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

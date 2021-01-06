import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TodoManager } from '../../managers/todo/todo.manager';
import { TodoQuery } from '../../stores/todo/todo.query';


@Component({
  selector: 'ag-todo-page',
  templateUrl: './todo-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoPageComponent implements OnInit {
  title = 'Todo';
  loading$ = this.todoQuery.selectLoading();

  constructor(
    private readonly titleService: Title,
    private readonly todoManager: TodoManager,
    private readonly todoQuery: TodoQuery
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.todoManager.getTodoList().subscribe();
  }
}

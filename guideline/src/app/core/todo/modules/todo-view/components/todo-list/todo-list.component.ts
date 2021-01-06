import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ID } from '@datorama/akita';
import { Observable } from 'rxjs';
import { TodoList, TodoModel } from '../../../../types/todo.type';
import { TodoManager } from '../../../../managers/todo/todo.manager';
import { TodoFilterManager } from '../../../../managers/filter/todo-filter.manager';


@Component({
  selector: 'ag-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
  todos$: Observable<TodoList> = this.todoFilterManager.filteredTodos$;
  count$: Observable<number> = this.todoFilterManager.countFilteredTodos$;

  constructor(
    private readonly todoManager: TodoManager,
    private readonly todoFilterManager: TodoFilterManager,
  ) {}

  remove(todo: TodoModel): void {
    this.todoManager.removeTodo(todo);
  }

  trackByMethod(i: number, item: TodoModel): ID {
    return item.id;
  }
}

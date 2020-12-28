import { Injectable } from '@angular/core';
import { guid } from '@datorama/akita';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { TodoList, TodoModel } from '../../types/todo.type';
import { TodoStore } from '../../stores/todo/todo.store';
import { TodoResource } from '../../resources/todo/todo.resource';
import { loadingWrapper } from '../../../../common/utility/loading-wrapper/loading-wrapper.operator';

@Injectable()
export class TodoManager {
  todoListLoading$ = new BehaviorSubject(false);

  constructor(
    private readonly todoResource: TodoResource,
    private readonly todoStore: TodoStore
  ) { }

  getTodoList(): Observable<TodoList> {
    return this.todoResource
      .getTodoList()
      .pipe(loadingWrapper(this.todoListLoading$))
      .pipe(tap((responce) => {
        this.todoStore.set(responce);
      }));
  }

  addTodo(todo: Partial<TodoModel>): void {
    this.todoStore.add({
      id: guid(),
      title: todo.title,
      completed: todo.completed
    });
  }

  removeTodo(todo: TodoModel): void {
    this.todoStore.remove(todo.id);
  }
}

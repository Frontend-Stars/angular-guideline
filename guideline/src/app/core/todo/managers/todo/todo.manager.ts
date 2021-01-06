import { Injectable } from '@angular/core';
import { guid } from '@datorama/akita';
import { Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { TodoList, TodoModel } from '../../types/todo.type';
import { TodoStore } from '../../stores/todo/todo.store';
import { TodoResource } from '../../resources/todo/todo.resource';


@Injectable()
export class TodoManager {
  constructor(
    private readonly todoResource: TodoResource,
    private readonly todoStore: TodoStore
  ) { }

  getTodoList(): Observable<TodoList> {
    return of(null)
      .pipe(
        tap(() => { this.todoStore.setLoading(true); }),
        switchMap(() => this.todoResource.getTodoList()),
        tap((response) => {
          this.todoStore.set(response);
        }, (error) => {
          this.todoStore.setError(error);
        })
      );
  }

  addTodo(todo: Partial<TodoModel>): void {
    this.todoStore.add({
      id: todo?.id ? todo.id : guid(),
      title: todo.title,
      completed: todo.completed
    });
  }

  removeTodo(todo: TodoModel): void {
    this.todoStore.remove(todo.id);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { TodoList } from '../../types/todo.type';

@Injectable()
export class TodoResource {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getTodoList(): Observable<TodoList> {
    return timer(1500).pipe(map(() => [
      {
        id: 1,
        title: 'example todo item from server #1',
        completed: false
      },
      {
        id: 2,
        title: 'example todo item from server #2',
        completed: false
      },
      {
        id: 3,
        title: 'example todo item from server #3',
        completed: true
      }
    ]));

    // return timer(500).pipe(switchMap(() => {
    //   return this.httpClient.get<TodoList>('/todos');
    // }));
  }
}

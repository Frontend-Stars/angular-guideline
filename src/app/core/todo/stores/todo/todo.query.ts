import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TodoStore } from './todo.store';
import { TodoState } from '../../types/todo.type';

@Injectable()
export class TodoQuery extends QueryEntity<TodoState> {
  completedTodos$ = this.selectAll({
    filterBy: [
      ({ completed }) => completed
    ]
  });

  constructor(protected store: TodoStore) {
    super(store);
  }

}

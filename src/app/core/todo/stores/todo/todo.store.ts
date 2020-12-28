import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { TodoState } from '../../types/todo.type';

@Injectable()
@StoreConfig({ name: 'todo' })
export class TodoStore extends EntityStore<TodoState> {

  constructor() {
    super();
  }

}

import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { TodoState } from '../../types/todo.type';
import { STORE_NAME_TODO } from '../../consts/store-todo.const';


@Injectable()
@StoreConfig({ name: STORE_NAME_TODO })
export class TodoStore extends EntityStore<TodoState> {

  constructor() {
    super();
  }

}

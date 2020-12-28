import { EntityState, ID } from '@datorama/akita';

export interface TodoModel {
  id: ID;
  title: string;
  completed: boolean;
}

export type TodoList = TodoModel[];

export interface TodoState extends EntityState<TodoModel> {}

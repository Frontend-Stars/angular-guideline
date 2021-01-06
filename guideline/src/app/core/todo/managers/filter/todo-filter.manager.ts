import { Injectable } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { FilterQuery } from '@common/filter/stores/filter/filter.query';
import { TodoQuery } from '../../stores/todo/todo.query';
import {
  TODO_FILTER_COMPLETED,
  TODO_FILTER_TITLE,
} from '../../types/filter.type';


@Injectable()
export class TodoFilterManager {
  filteredTodos$ = combineLatest([this.filterQuery.filters$, this.todoQuery.todos$]).pipe(map(([filters, todos]) => {
    if (Object.values(filters).filter((filter) => filter).length) {
      return todos.filter((todo) => {
        return (
          filters[TODO_FILTER_TITLE] &&
          todo.title.toLowerCase().includes(String(filters[TODO_FILTER_TITLE].value).toLowerCase())
        ) ||
        (
          filters[TODO_FILTER_COMPLETED] &&
          todo.completed === Boolean(filters[TODO_FILTER_COMPLETED].value)
        );
      });
    } else {
      return todos;
    }
  }));
  countFilteredTodos$ = this.filteredTodos$.pipe(map((todos) => todos.length));

  constructor(
    private readonly todoQuery: TodoQuery,
    private readonly filterQuery: FilterQuery
  ) { }
}

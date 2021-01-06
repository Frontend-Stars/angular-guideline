import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { FilterState } from '../../types/filter.type';
import { FilterStore } from './filter.store';


@Injectable()
export class FilterQuery extends Query<FilterState> {
  filters$ = this.select();

  constructor(protected store: FilterStore) {
    super(store);
  }
}

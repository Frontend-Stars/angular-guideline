import { Inject, Injectable } from '@angular/core';
import { Store } from '@datorama/akita';
import {
  FILTER_CONFIGURATION_PROVIDER,
  FilterConfigurationProvider, FilterModel,
  FilterState,
} from '../../types/filter.type';


@Injectable()
export class FilterStore extends Store<FilterState> {
  constructor(@Inject(FILTER_CONFIGURATION_PROVIDER) readonly configure: FilterConfigurationProvider) {
    super({}, configure);
  }

  add(name: string, model: FilterModel): void {
    this.update((state) => ({
      ...state,
      [name]: model
    }));
  }

  remove(name: string): void {
    this.update((state) => ({
      ...state,
      [name]: null
    }));
  }
}

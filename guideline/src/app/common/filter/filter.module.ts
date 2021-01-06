import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FILTER_CONFIGURATION_PROVIDER,
  FilterConfigurationProvider,
} from './types/filter.type';
import { FilterStore } from './stores/filter/filter.store';
import { FilterQuery } from './stores/filter/filter.query';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
})
export class FilterModule {
  static forChild(configure: FilterConfigurationProvider): ModuleWithProviders<FilterModule> {
    return {
      ngModule: FilterModule,
      providers: [
        FilterStore,
        FilterQuery,
        {
          provide: FILTER_CONFIGURATION_PROVIDER,
          useValue: configure
        }
      ]
    };
  }
}

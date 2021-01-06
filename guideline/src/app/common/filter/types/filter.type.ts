import { InjectionToken } from '@angular/core';

export enum FilterType {
  TEXT = 'TEXT',
  BOOLEAN = 'BOOLEAN'
}

export interface FilterText {
  type: FilterType.TEXT;
  value: string;
}

export interface FilterBoolean {
  type: FilterType.BOOLEAN;
  value: boolean;
}

export type FilterModel = FilterText | FilterBoolean;

export interface FilterState {
  [key: string]: FilterModel;
}

export interface FilterConfigurationProvider {
  name: string;
  resettable: boolean;
}

export const FILTER_CONFIGURATION_PROVIDER: InjectionToken<FilterConfigurationProvider> = new InjectionToken(
  'FILTER_CONFIGURATION_PROVIDER'
);

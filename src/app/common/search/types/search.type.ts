import { InjectionToken } from '@angular/core';
import { FormGroup } from '@angular/forms';

export interface SearchForm {
  form: FormGroup;
  submit(): void;
}

export const SEARCH_FORM: InjectionToken<SearchForm> = new InjectionToken(
  'SEARCH_FORM'
);

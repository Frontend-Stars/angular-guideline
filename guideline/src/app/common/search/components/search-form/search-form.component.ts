import {
  Component,
  ChangeDetectionStrategy,
  Inject,
  Output,
  EventEmitter,
} from '@angular/core';
import { SEARCH_FORM, SearchForm } from '../../types/search.type';


@Component({
  selector: 'ag-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchFormComponent {
  @Output() doSearch = new EventEmitter();

  form = this.searchForm.form;

  constructor(
    @Inject(SEARCH_FORM) private readonly searchForm: SearchForm
  ) {}

  submit(): void {
    this.doSearch.emit();
  }
}

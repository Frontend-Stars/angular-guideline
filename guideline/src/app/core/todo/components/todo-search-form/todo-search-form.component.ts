import {
  Component,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import {
  SEARCH_FORM,
  SearchForm,
} from '@common/search/types/search.type';

@Component({
  selector: 'ag-todo-search-form',
  templateUrl: './todo-search-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoSearchFormComponent {

  constructor(
    @Inject(SEARCH_FORM) private readonly searchForm: SearchForm,
  ) { }

  doSearch(): void {
    console.log('doSearch', this.searchForm.form.value);

    this.searchForm.reset();
  }

}

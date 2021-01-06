import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { SEARCH_FORM, SearchForm } from '@common/search/types/search.type';
import { FilterStore } from '@common/filter/stores/filter/filter.store';
import { FilterType } from '@common/filter/types/filter.type';
import { TODO_FILTER_TITLE } from '../../types/filter.type';


@Component({
  selector: 'ag-todo-search-form',
  templateUrl: './todo-search-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoSearchFormComponent {

  constructor(
    @Inject(SEARCH_FORM) private readonly searchForm: SearchForm,
    private readonly filterStore: FilterStore
  ) { }

  doSearch(): void {
    if (this.searchForm.form.invalid) {
      return;
    }

    if (this.searchForm.form.value.searchInput.length) {
      this.filterStore.add(TODO_FILTER_TITLE, {
        type: FilterType.TEXT,
        value: this.searchForm.form.value.searchInput
      });
    } else {
      this.filterStore.remove(TODO_FILTER_TITLE);
    }
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NAVIGATION_MENU_MANAGER } from '@common/navigation/types/navigation-menu.type';
import { SEARCH_FORM } from '@common/search/types/search.type';
import { SearchModule } from '@common/search/search.module';
import { LayoutModule } from '@common/layout/layout.module';
import { LoaderModule } from '@common/loader/loader.module';
import { FilterModule } from '@common/filter/filter.module';
import { TodoPageComponent } from './components/todo-page/todo-page.component';
import { TodoResource } from './resources/todo/todo.resource';
import { TodoManager } from './managers/todo/todo.manager';
import { TodoNavigationMenuManager } from './managers/menu/todo-navigation-menu.manager';
import { TodoStore } from './stores/todo/todo.store';
import { TodoQuery } from './stores/todo/todo.query';
import { TodoSearchForm } from './forms/search/search.form';
import { TodoAddForm } from './forms/todo-add/todo-add.form';
import { TodoViewModule } from './modules/todo-view/todo-view.module';
import { TodoSearchFormComponent } from './components/todo-search-form/todo-search-form.component';
import { TodoFilterManager } from './managers/filter/todo-filter.manager';


@NgModule({
  declarations: [
    TodoPageComponent,
    TodoSearchFormComponent,
  ],
  providers: [
    TodoManager,
    TodoResource,
    TodoStore,
    TodoQuery,
    TodoAddForm,
    {
      provide: NAVIGATION_MENU_MANAGER,
      useClass: TodoNavigationMenuManager,
    },
    {
      provide: SEARCH_FORM,
      useClass: TodoSearchForm,
    },
    TodoFilterManager
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    LayoutModule,
    SearchModule,
    LoaderModule,
    TodoViewModule,
    FilterModule.forChild({ name: 'todo-filter', resettable: true })
  ],
})
export class TodoModule { }

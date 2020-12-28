import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TodoWidgetProviderComponent } from './components/todo-widget-provider/todo-widget-provider.component';
import { LoaderModule } from '../../../../common/loader/loader.module';
import { TodoManager } from '../../managers/todo/todo.manager';
import { TodoResource } from '../../resources/todo/todo.resource';
import { TodoStore } from '../../stores/todo/todo.store';
import { TodoQuery } from '../../stores/todo/todo.query';
import { TodoWidgetComponent } from './components/todo-widget/todo-widget.component';
import { TodoViewModule } from '../todo-view/todo-view.module';


@NgModule({
  declarations: [
    TodoWidgetProviderComponent,
    TodoWidgetComponent
  ],
  exports: [
    TodoWidgetProviderComponent,
    TodoWidgetComponent,
  ],
  providers: [
    TodoManager,
    TodoResource,
    TodoStore,
    TodoQuery,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    LoaderModule,
    TodoViewModule,
  ],
})
export class TodoWidgetModule { }

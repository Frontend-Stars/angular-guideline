import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardNavigationMenuManager } from './managers/menu/dashboard-navigation-menu.manager';

import { LayoutModule } from '../../common/layout/layout.module';
import { NAVIGATION_MENU_MANAGER } from '../../common/navigation/types/navigation-menu.type';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import { TodoWidgetModule } from '../todo/modules/todo-widget/todo-widget.module';

@NgModule({
  declarations: [DashboardComponent, DashboardPageComponent],
  providers: [
    {
      provide: NAVIGATION_MENU_MANAGER,
      useClass: DashboardNavigationMenuManager
    }
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
    TodoWidgetModule,
  ],
})
export class DashboardModule { }
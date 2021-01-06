import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  NavigationMenuItems,
  NavigationMenuManager,
} from '@common/navigation/types/navigation-menu.type';
import { BaseNavigationMenuManager } from '@common/navigation/managers/menu/base-navigation-menu.manager';


@Injectable()
export class TodoNavigationMenuManager
  extends BaseNavigationMenuManager
  implements NavigationMenuManager
{
  getItems(): Observable<NavigationMenuItems> {
    return of([
      {
        title: 'Todo',
        command: '/todos'
      },
      {
        title: 'Dashboard',
        command: '/dashboard'
      }
    ]);
  }
}

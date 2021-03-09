import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  NavigationMenuItems,
  NavigationMenuManager,
} from '@common/navigation/types/navigation-menu.type';
import { BaseNavigationMenuManager } from '@common/navigation/managers/menu/base-navigation-menu.manager';


@Injectable()
export class RenderNavigationMenuManager
  extends BaseNavigationMenuManager
  implements NavigationMenuManager
{
  getItems(): Observable<NavigationMenuItems> {
    return of([
      {
        title: 'Homepage',
        command: '/'
      },
      {
        title: 'Render',
        command: '/render'
      }
    ]);
  }
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import {
  NavigationMenuItem,
  NavigationMenuItems,
  NavigationMenuManager,
} from '@common/navigation/types/navigation-menu.type';


@Injectable()
export class TodoNavigationMenuManager implements NavigationMenuManager {
  constructor(
    private readonly router: Router
  ) {}

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

  clickAction(item: NavigationMenuItem): void {
    this.router.navigate([item.command]);
  }
}

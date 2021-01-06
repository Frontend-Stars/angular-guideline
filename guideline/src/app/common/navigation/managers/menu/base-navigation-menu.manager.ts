import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  NavigationMenuItem,
  NavigationMenuItems,
  NavigationMenuManager,
} from '../../types/navigation-menu.type';


@Injectable()
export abstract class BaseNavigationMenuManager implements NavigationMenuManager {
  isOpened$ = new BehaviorSubject(false);

  constructor(
    private readonly router: Router
  ) {}

  clickAction(item: NavigationMenuItem): void {
    this.router.navigate([item.command]);
  }

  toggle(): void {
    this.isOpened$.next(!this.isOpened$.getValue());
  }

  abstract getItems(): Observable<NavigationMenuItems>;
}

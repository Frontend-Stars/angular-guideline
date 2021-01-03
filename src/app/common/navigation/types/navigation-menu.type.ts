import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';


export interface NavigationMenuItem {
  title: string;
  command: string;
}

export type NavigationMenuItems = Array<NavigationMenuItem>;

export interface NavigationMenuManager {
  getItems(): Observable<NavigationMenuItems>;
  clickAction(item: NavigationMenuItem): void;
}

export const NAVIGATION_MENU_MANAGER: InjectionToken<NavigationMenuManager> = new InjectionToken(
  'NAVIGATION_MENU_MANAGER'
);

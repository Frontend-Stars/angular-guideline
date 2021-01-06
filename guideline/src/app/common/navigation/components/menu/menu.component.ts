import { Component, Inject } from '@angular/core';
import { NAVIGATION_MENU_MANAGER, NavigationMenuItem, NavigationMenuManager } from '../../types/navigation-menu.type';


@Component({
  selector: 'ag-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  menuItems$ = this.navigationMenuManager.getItems();
  isOpened$ = this.navigationMenuManager.isOpened$;

  constructor(
    @Inject(NAVIGATION_MENU_MANAGER) private readonly navigationMenuManager: NavigationMenuManager
  ) { }

  click(event: Event, item: NavigationMenuItem): void {
    event.preventDefault();
    this.navigationMenuManager.clickAction(item);
    this.navigationMenuManager.toggle();
  }

  menuTrackBy(index: number, item: NavigationMenuItem): string {
    return `${item.title}-${item.command}`;
  }

  toggle(): void {
    this.navigationMenuManager.toggle();
  }
}

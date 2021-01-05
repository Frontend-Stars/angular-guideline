import { Component } from '@angular/core';
import { NavigationMenuItem } from '../shared.types';

@Component({
  selector: 'ap-navigation-menu',
  templateUrl: './navigation-menu.component.html'
})
export class NavigationMenuComponent {
  items = [
    {
      title: 'Homepage',
      link: ''
    }
  ];

  menuTrackBy(index: number, item: NavigationMenuItem): string {
    return `${item.title}-${item.link}`;
  }
}

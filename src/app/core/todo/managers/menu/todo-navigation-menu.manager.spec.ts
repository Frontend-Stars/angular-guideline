import { TestBed } from '@angular/core/testing';
import { TodoNavigationMenuManager } from './todo-navigation-menu.manager';

describe('TodoNavigationMenuManager', () => {
  let service: TodoNavigationMenuManager;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoNavigationMenuManager);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { DashboardNavigationMenuManager } from './dashboard-navigation-menu.manager';

describe('DashboardNavigationMenuManager', () => {
  let service: DashboardNavigationMenuManager;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardNavigationMenuManager);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

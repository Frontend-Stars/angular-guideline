import { TestBed } from '@angular/core/testing';

import { TodoResource } from './todo.resource';

describe('TodoResource', () => {
  let service: TodoResource;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoResource);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

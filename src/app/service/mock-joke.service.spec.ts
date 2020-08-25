import { TestBed } from '@angular/core/testing';

import { MockJokeService } from './mock-joke.service';

describe('MockJokeService', () => {
  let service: MockJokeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockJokeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

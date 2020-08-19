import { TestBed } from '@angular/core/testing';

import { AbstractJokeService } from './abstract-joke.service';

describe('AbstractJokeServiceService', () => {
  let service: AbstractJokeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbstractJokeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ICanHazDadJokeService } from './ican-haz-dad-joke.service';

describe('ICanHazDadJokeService', () => {
  let service: ICanHazDadJokeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ICanHazDadJokeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

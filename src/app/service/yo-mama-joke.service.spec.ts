import { TestBed } from '@angular/core/testing';

import { YoMamaJokeService } from './yo-mama-joke.service';

describe('MockJokeService', () => {
  let service: YoMamaJokeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YoMamaJokeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

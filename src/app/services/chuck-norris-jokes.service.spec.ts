import { TestBed, inject } from '@angular/core/testing';

import { ChuckNorrisJokesService } from './chuck-norris-jokes.service';

describe('ChuckNorrisJokesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChuckNorrisJokesService]
    });
  });

  it('should be created', inject([ChuckNorrisJokesService], (service: ChuckNorrisJokesService) => {
    expect(service).toBeTruthy();
  }));
});

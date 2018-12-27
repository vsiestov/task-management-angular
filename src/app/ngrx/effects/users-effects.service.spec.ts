import { TestBed } from '@angular/core/testing';

import { UsersEffectsService } from './users-effects.service';

describe('UsersEffectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersEffectsService = TestBed.get(UsersEffectsService);
    expect(service).toBeTruthy();
  });
});

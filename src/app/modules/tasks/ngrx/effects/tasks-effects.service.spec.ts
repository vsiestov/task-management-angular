import { TestBed } from '@angular/core/testing';

import { TasksEffectsService } from './tasks-effects.service';

describe('TasksEffectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TasksEffectsService = TestBed.get(TasksEffectsService);
    expect(service).toBeTruthy();
  });
});

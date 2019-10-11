import { TestBed } from '@angular/core/testing';

import { HttmService } from './httm.service';

describe('HttmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttmService = TestBed.get(HttmService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { BaremCaracService } from './barem-carac.service';

describe('BaremCaracService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaremCaracService = TestBed.get(BaremCaracService);
    expect(service).toBeTruthy();
  });
});

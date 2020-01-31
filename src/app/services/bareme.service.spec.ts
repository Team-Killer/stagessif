import { TestBed } from '@angular/core/testing';

import { BaremeService } from './bareme.service';

describe('BaremeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaremeService = TestBed.get(BaremeService);
    expect(service).toBeTruthy();
  });
});

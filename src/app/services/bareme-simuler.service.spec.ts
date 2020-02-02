import { TestBed } from '@angular/core/testing';

import { BaremeSimulerService } from './bareme-simuler.service';

describe('BaremeSimulerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaremeSimulerService = TestBed.get(BaremeSimulerService);
    expect(service).toBeTruthy();
  });
});

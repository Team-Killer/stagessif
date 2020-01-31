import { TestBed } from '@angular/core/testing';

import { CentreFiscalService } from './centre-fiscal.service';

describe('CentreFiscalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CentreFiscalService = TestBed.get(CentreFiscalService);
    expect(service).toBeTruthy();
  });
});

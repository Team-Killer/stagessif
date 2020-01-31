import { TestBed } from '@angular/core/testing';

import { ParamBorneService } from './param-borne.service';

describe('ParamBorneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParamBorneService = TestBed.get(ParamBorneService);
    expect(service).toBeTruthy();
  });
});

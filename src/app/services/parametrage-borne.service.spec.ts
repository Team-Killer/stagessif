import { TestBed } from '@angular/core/testing';

import { ParametrageBorneService } from './parametrage-borne.service';

describe('ParametrageBorneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParametrageBorneService = TestBed.get(ParametrageBorneService);
    expect(service).toBeTruthy();
  });
});

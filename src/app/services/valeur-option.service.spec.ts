import { TestBed } from '@angular/core/testing';

import { ValeurOptionService } from './valeur-option.service';

describe('ValeurOptionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValeurOptionService = TestBed.get(ValeurOptionService);
    expect(service).toBeTruthy();
  });
});

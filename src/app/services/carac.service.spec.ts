import { TestBed } from '@angular/core/testing';

import { CaracService } from './carac.service';

describe('CaracService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaracService = TestBed.get(CaracService);
    expect(service).toBeTruthy();
  });
});

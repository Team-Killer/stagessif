import { TestBed } from '@angular/core/testing';

import { ServeurService } from './serveur.service';

describe('ServeurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServeurService = TestBed.get(ServeurService);
    expect(service).toBeTruthy();
  });
});

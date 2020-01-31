import { TestBed } from '@angular/core/testing';

import { AdminParamService } from './admin-param.service';

describe('AdminParamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminParamService = TestBed.get(AdminParamService);
    expect(service).toBeTruthy();
  });
});

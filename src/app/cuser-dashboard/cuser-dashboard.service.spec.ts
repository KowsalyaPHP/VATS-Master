import { TestBed } from '@angular/core/testing';

import { CuserDashboardService } from './cuser-dashboard.service';

describe('CuserDashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CuserDashboardService = TestBed.get(CuserDashboardService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { VuserDashboardService } from './vuser-dashboard.service';

describe('VuserDashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VuserDashboardService = TestBed.get(VuserDashboardService);
    expect(service).toBeTruthy();
  });
});

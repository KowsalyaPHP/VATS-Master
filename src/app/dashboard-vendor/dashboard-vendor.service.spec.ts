import { TestBed } from '@angular/core/testing';

import { DashboardVendorService } from './dashboard-vendor.service';

describe('DashboardVendorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardVendorService = TestBed.get(DashboardVendorService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { VendorprofileService } from './vendorprofile.service';

describe('VendorprofileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VendorprofileService = TestBed.get(VendorprofileService);
    expect(service).toBeTruthy();
  });
});

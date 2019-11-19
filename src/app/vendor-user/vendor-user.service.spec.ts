import { TestBed } from '@angular/core/testing';

import { VendorUserService } from './vendor-user.service';

describe('VendorUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VendorUserService = TestBed.get(VendorUserService);
    expect(service).toBeTruthy();
  });
});

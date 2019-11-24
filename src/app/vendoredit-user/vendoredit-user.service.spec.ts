import { TestBed } from '@angular/core/testing';

import { VendoreditUserService } from './vendoredit-user.service';

describe('VendoreditUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VendoreditUserService = TestBed.get(VendoreditUserService);
    expect(service).toBeTruthy();
  });
});

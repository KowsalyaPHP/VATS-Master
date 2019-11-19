import { TestBed } from '@angular/core/testing';

import { ClientprofileService } from './clientprofile.service';

describe('ClientprofileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientprofileService = TestBed.get(ClientprofileService);
    expect(service).toBeTruthy();
  });
});

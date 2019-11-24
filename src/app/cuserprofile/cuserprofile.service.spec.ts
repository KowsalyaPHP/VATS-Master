import { TestBed } from '@angular/core/testing';

import { CuserprofileService } from './cuserprofile.service';

describe('CuserprofileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CuserprofileService = TestBed.get(CuserprofileService);
    expect(service).toBeTruthy();
  });
});

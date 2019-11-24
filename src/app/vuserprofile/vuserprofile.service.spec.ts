import { TestBed } from '@angular/core/testing';

import { VuserprofileService } from './vuserprofile.service';

describe('VuserprofileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VuserprofileService = TestBed.get(VuserprofileService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ClientUserService } from './client-user.service';

describe('ClientUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientUserService = TestBed.get(ClientUserService);
    expect(service).toBeTruthy();
  });
});

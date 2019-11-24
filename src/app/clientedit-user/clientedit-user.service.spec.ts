import { TestBed } from '@angular/core/testing';

import { ClienteditUserService } from './clientedit-user.service';

describe('ClienteditUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClienteditUserService = TestBed.get(ClienteditUserService);
    expect(service).toBeTruthy();
  });
});

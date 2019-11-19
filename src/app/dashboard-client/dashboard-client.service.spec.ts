import { TestBed } from '@angular/core/testing';

import { DashboardClientService } from './dashboard-client.service';

describe('DashboardClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardClientService = TestBed.get(DashboardClientService);
    expect(service).toBeTruthy();
  });
});

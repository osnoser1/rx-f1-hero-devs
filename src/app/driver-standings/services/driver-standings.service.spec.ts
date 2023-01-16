import { TestBed } from '@angular/core/testing';

import { DriverStandingService } from './driver-standing.service';

describe('DriverStandingsService', () => {
  let service: DriverStandingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DriverStandingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

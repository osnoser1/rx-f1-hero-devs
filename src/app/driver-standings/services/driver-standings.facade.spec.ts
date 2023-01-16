import { TestBed } from '@angular/core/testing';

import { DriverStandingsFacade } from './driver-standings.facade';

describe('DriverStandingsFacade', () => {
  let service: DriverStandingsFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DriverStandingsFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

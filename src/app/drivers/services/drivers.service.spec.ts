import { TestBed } from '@angular/core/testing';

import { DriverService } from './driver.service';

describe('DriversService', () => {
  let service: DriverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DriverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

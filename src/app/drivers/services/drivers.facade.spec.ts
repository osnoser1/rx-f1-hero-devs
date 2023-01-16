import { TestBed } from '@angular/core/testing';

import { DriversFacade } from './drivers.facade';

describe('DriversFacade', () => {
  let service: DriversFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DriversFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

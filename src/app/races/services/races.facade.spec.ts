import { TestBed } from '@angular/core/testing';

import { RacesFacade } from './races.facade';

describe('DriversFacade', () => {
  let service: RacesFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RacesFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

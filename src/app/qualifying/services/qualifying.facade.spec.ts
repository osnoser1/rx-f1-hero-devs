import { TestBed } from '@angular/core/testing';

import { QualifyingFacade } from './qualifying.facade';

describe('QualifyingFacade', () => {
  let service: QualifyingFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QualifyingFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

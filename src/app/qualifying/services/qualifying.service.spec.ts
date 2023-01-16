import { TestBed } from '@angular/core/testing';

import { QualifyingService } from './qualifying.service';

describe('QualifyingService', () => {
  let service: QualifyingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QualifyingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

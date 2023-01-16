import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullScreenLoadingSpinnerComponent } from './full-screen-loading-spinner.component';

describe('FullScreenLoadingSpinnerComponent', () => {
  let component: FullScreenLoadingSpinnerComponent;
  let fixture: ComponentFixture<FullScreenLoadingSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullScreenLoadingSpinnerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FullScreenLoadingSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

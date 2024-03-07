import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcForgotPassFormModalComponent } from './dc-forgot-pass-form-modal.component';

describe('DcForgotPassFormModalComponent', () => {
  let component: DcForgotPassFormModalComponent;
  let fixture: ComponentFixture<DcForgotPassFormModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DcForgotPassFormModalComponent]
    });
    fixture = TestBed.createComponent(DcForgotPassFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

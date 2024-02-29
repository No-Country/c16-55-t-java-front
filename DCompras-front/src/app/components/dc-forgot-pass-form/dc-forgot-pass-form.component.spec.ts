import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcForgotPassFormComponent } from './dc-forgot-pass-form.component';

describe('DcForgotPassFormComponent', () => {
  let component: DcForgotPassFormComponent;
  let fixture: ComponentFixture<DcForgotPassFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DcForgotPassFormComponent]
    });
    fixture = TestBed.createComponent(DcForgotPassFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

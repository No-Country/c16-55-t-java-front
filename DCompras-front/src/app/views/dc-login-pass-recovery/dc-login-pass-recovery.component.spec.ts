import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcLoginPassRecoveryComponent } from './dc-login-pass-recovery.component';

describe('DcLoginPassRecoveryComponent', () => {
  let component: DcLoginPassRecoveryComponent;
  let fixture: ComponentFixture<DcLoginPassRecoveryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DcLoginPassRecoveryComponent]
    });
    fixture = TestBed.createComponent(DcLoginPassRecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

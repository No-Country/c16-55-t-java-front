import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcSavePasswordComponent } from './dc-save-password.component';

describe('DcSavePasswordComponent', () => {
  let component: DcSavePasswordComponent;
  let fixture: ComponentFixture<DcSavePasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DcSavePasswordComponent]
    });
    fixture = TestBed.createComponent(DcSavePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

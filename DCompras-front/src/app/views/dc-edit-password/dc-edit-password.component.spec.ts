import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcEditPasswordComponent } from './dc-edit-password.component';

describe('DcEditPasswordComponent', () => {
  let component: DcEditPasswordComponent;
  let fixture: ComponentFixture<DcEditPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DcEditPasswordComponent]
    });
    fixture = TestBed.createComponent(DcEditPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

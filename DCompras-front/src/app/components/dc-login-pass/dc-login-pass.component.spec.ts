import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcLoginPassComponent } from './dc-login-pass.component';

describe('DcLoginPassComponent', () => {
  let component: DcLoginPassComponent;
  let fixture: ComponentFixture<DcLoginPassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DcLoginPassComponent]
    });
    fixture = TestBed.createComponent(DcLoginPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcLoginFormComponent } from './dc-login-form.component';

describe('DcLoginFormComponent', () => {
  let component: DcLoginFormComponent;
  let fixture: ComponentFixture<DcLoginFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DcLoginFormComponent]
    });
    fixture = TestBed.createComponent(DcLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

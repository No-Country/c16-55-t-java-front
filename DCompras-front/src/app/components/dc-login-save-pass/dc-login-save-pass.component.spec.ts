import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcLoginSavePassComponent } from './dc-login-save-pass.component';

describe('DcLoginSavePassComponent', () => {
  let component: DcLoginSavePassComponent;
  let fixture: ComponentFixture<DcLoginSavePassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DcLoginSavePassComponent]
    });
    fixture = TestBed.createComponent(DcLoginSavePassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

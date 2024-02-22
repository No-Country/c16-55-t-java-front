import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcRegisterComponent } from './dc-register.component';

describe('DcRegisterComponent', () => {
  let component: DcRegisterComponent;
  let fixture: ComponentFixture<DcRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DcRegisterComponent]
    });
    fixture = TestBed.createComponent(DcRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

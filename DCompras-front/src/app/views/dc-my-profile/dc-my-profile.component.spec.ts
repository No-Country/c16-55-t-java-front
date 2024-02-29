import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcMyProfileComponent } from './dc-my-profile.component';

describe('DcMyProfileComponent', () => {
  let component: DcMyProfileComponent;
  let fixture: ComponentFixture<DcMyProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DcMyProfileComponent]
    });
    fixture = TestBed.createComponent(DcMyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

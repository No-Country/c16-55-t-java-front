import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcLoginBannerComponent } from './dc-login-banner.component';

describe('DcLoginBannerComponent', () => {
  let component: DcLoginBannerComponent;
  let fixture: ComponentFixture<DcLoginBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DcLoginBannerComponent]
    });
    fixture = TestBed.createComponent(DcLoginBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

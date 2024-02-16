import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcSidenavComponent } from './dc-sidenav.component';

describe('DcSidenavComponent', () => {
  let component: DcSidenavComponent;
  let fixture: ComponentFixture<DcSidenavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DcSidenavComponent]
    });
    fixture = TestBed.createComponent(DcSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

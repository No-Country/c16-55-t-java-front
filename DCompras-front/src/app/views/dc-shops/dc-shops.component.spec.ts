import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcShopsComponent } from './dc-shops.component';

describe('DcShopsComponent', () => {
  let component: DcShopsComponent;
  let fixture: ComponentFixture<DcShopsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DcShopsComponent]
    });
    fixture = TestBed.createComponent(DcShopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

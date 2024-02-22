import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcOffersComponent } from './dc-offers.component';

describe('DcOffersComponent', () => {
  let component: DcOffersComponent;
  let fixture: ComponentFixture<DcOffersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DcOffersComponent]
    });
    fixture = TestBed.createComponent(DcOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

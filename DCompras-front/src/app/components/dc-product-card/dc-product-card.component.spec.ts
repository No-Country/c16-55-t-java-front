import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcProductCardComponent } from './dc-product-card.component';

describe('DcProductCardComponent', () => {
  let component: DcProductCardComponent;
  let fixture: ComponentFixture<DcProductCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DcProductCardComponent]
    });
    fixture = TestBed.createComponent(DcProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

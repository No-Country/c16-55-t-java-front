import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcProductDetailListModalComponent } from './dc-product-detail-list-modal.component';

describe('DcProductDetailListModalComponent', () => {
  let component: DcProductDetailListModalComponent;
  let fixture: ComponentFixture<DcProductDetailListModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DcProductDetailListModalComponent]
    });
    fixture = TestBed.createComponent(DcProductDetailListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

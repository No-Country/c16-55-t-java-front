import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcSelectProductComponent } from './dc-selectProduct.component';

describe('DcSelectProductComponent', () => {
  let component: DcSelectProductComponent;
  let fixture: ComponentFixture<DcSelectProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DcSelectProductComponent],
    });
    fixture = TestBed.createComponent(DcSelectProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcShoppingCartComponent } from './dc-shopping-cart.component';

describe('DcShoppingCartComponent', () => {
  let component: DcShoppingCartComponent;
  let fixture: ComponentFixture<DcShoppingCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DcShoppingCartComponent]
    });
    fixture = TestBed.createComponent(DcShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

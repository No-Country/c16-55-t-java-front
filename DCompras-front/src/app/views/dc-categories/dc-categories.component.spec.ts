import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcCategoriesComponent } from './dc-categories.component';

describe('DcCategoriesComponent', () => {
  let component: DcCategoriesComponent;
  let fixture: ComponentFixture<DcCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DcCategoriesComponent]
    });
    fixture = TestBed.createComponent(DcCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcHeaderComponent } from './dc-header.component';

describe('DcHeaderComponent', () => {
  let component: DcHeaderComponent;
  let fixture: ComponentFixture<DcHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DcHeaderComponent],
    });
    fixture = TestBed.createComponent(DcHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

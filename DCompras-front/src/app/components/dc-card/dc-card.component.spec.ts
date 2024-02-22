import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcCardComponent } from './dc-card.component';

describe('DcCardComponent', () => {
  let component: DcCardComponent;
  let fixture: ComponentFixture<DcCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DcCardComponent],
    });
    fixture = TestBed.createComponent(DcCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

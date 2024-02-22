import { TestBed } from '@angular/core/testing';

import { DcLoginService } from './dc-login.service';

describe('DcLoginService', () => {
  let service: DcLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DcLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

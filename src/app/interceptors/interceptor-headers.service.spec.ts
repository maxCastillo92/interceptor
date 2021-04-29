import { TestBed } from '@angular/core/testing';

import { InterceptorHeadersService } from './interceptor-headers.service';

describe('InterceptorHeadersService', () => {
  let service: InterceptorHeadersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterceptorHeadersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

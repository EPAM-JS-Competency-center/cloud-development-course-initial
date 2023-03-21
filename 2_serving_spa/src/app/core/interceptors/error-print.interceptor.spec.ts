import { TestBed } from '@angular/core/testing';

import { ErrorPrintInterceptor } from './error-print.interceptor';

describe('ErrorPrintInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [ErrorPrintInterceptor],
    })
  );

  it('should be created', () => {
    const interceptor: ErrorPrintInterceptor = TestBed.inject(
      ErrorPrintInterceptor
    );

    expect(interceptor).toBeTruthy();
  });
});

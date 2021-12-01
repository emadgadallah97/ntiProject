import { TestBed } from '@angular/core/testing';

import { AdminsInterceptor } from './admins.interceptor';

describe('AdminsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AdminsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AdminsInterceptor = TestBed.inject(AdminsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

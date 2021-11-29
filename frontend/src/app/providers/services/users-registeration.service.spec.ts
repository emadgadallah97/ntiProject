import { TestBed } from '@angular/core/testing';

import { UsersRegisterationService } from './users-registeration.service';

describe('UsersRegisterationService', () => {
  let service: UsersRegisterationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersRegisterationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

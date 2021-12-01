import { TestBed } from '@angular/core/testing';

import { AdminsDataService } from './admins-data.service';

describe('AdminsDataService', () => {
  let service: AdminsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

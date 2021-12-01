import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsLoginComponent } from './admins-login.component';

describe('AdminsLoginComponent', () => {
  let component: AdminsLoginComponent;
  let fixture: ComponentFixture<AdminsLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminsLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

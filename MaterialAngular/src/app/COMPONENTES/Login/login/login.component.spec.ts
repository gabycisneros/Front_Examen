import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let compnents: LoginComponent;
  let fixtures: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixtures = TestBed.createComponent(LoginComponent);
    compnents = fixtures.componentInstance;
    fixtures.detectChanges();
  });

  it('should create', () => {
    expect(compnents).toBeTruthy();
  });
});

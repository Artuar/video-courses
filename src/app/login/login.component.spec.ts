import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {FormsModule} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../core/services/user.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';

describe('LoginComponent', () => {

  let fixture: ComponentFixture<LoginComponent>;
  let component;

    const fakeActivatedRoute = {
    snapshot: { data: { } }
  } as ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        StoreModule.forRoot({})
      ],
      declarations: [ LoginComponent ],
      providers: [
        UserService,
        HttpClient,
        HttpHandler,
        {provide: ActivatedRoute, useValue: fakeActivatedRoute},
        {
          provide: Router,
          useClass: class { navigate = jasmine.createSpy('navigate'); }
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

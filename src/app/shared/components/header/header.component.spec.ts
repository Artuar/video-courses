import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {User} from '../../../core/services/User';
import {UserService} from '../../../core/services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {StoreModule} from '@ngrx/store';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  const fakeActivatedRoute = {
    snapshot: { data: { } },
    data: new Observable()
  } as ActivatedRoute;

  const mockUserService = {
    getUserData: () => {},
    isLogin : () => {}
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [  StoreModule.forRoot({})],
      declarations: [ HeaderComponent ],
      providers: [
        { provide: UserService, useValue: mockUserService },
        HttpClient,
        HttpHandler,
        {provide: ActivatedRoute, useValue: fakeActivatedRoute},
        {
          provide: Router,
          useClass: class { navigate = jasmine.createSpy('navigate'); }
        }],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', async(() => {
    component.pageTitle = 'Video courses';
    fixture.detectChanges();
    const title = fixture.debugElement.nativeElement.querySelector('.title');
    expect(title.textContent).toContain('Video courses');
  }));

  it('logOff should be called', () => {
    spyOn(component, 'logOff');

    component.user = {id: 1, name: {first: 'Test', last: ''}} as User;
    fixture.detectChanges();

    const loadButton = fixture.debugElement.nativeElement.querySelector('.logOff');
    loadButton.click();

    fixture.whenStable().then(() => {
      expect(component.logOff).toHaveBeenCalled();
    });
  });

});

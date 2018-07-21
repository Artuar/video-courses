import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {User} from '../../services/User';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [
        UserService,
        HttpClient,
        HttpHandler,
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', async(() => {
    const title = fixture.debugElement.nativeElement.querySelector('.title');
    expect(title.textContent).toContain('Video courses');
  }));

  it('logOff should be called', () => {
    spyOn(component, 'logOff');

    component.user = {id: 1, firstName: 'Test', lastName: ''} as User;
    fixture.detectChanges();

    const loadButton = fixture.debugElement.nativeElement.querySelector('.logOff');
    loadButton.click();

    fixture.whenStable().then(() => {
      expect(component.logOff).toHaveBeenCalled();
    });
  });

});

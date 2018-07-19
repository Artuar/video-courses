import {UserService} from './user.service';
import {HeaderComponent} from '../components/header/header.component';
import {Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";

describe('Component: Login', () => {

  let component: HeaderComponent;
  let service: UserService;
  // tslint:disable-next-line
  let http: HttpClient;

  beforeEach(() => {
    service = new UserService(http);
    component = new HeaderComponent();
  });

  afterEach(() => {
    localStorage.removeItem('video-courses');
    service = null;
    component = null;
  });


  it('false when the user is not authenticated', () => {
    expect(component.user).toBeFalsy();
  });

});

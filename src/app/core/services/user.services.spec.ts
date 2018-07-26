import {UserService} from './user.service';
import {HeaderComponent} from '../../shared/components/header/header.component';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

describe('UserService', () => {

  let component: HeaderComponent;
  let service: UserService;
  // tslint:disable-next-line
  let router: Router;
  // tslint:disable-next-line
  let activatedRoute: ActivatedRoute;
  // tslint:disable-next-line
  let http: HttpClient;

  beforeEach(() => {
    service = new UserService(http);
    component = new HeaderComponent(service, router, activatedRoute);
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

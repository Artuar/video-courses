import {UserService} from './user.service';
import {HeaderComponent} from '../../core/header/header.component';
import {Router} from '@angular/router';

describe('Component: Login', () => {

  let component: HeaderComponent;
  let service: UserService;
  // tslint:disable-next-line
  let router: Router;

  beforeEach(() => {
    service = new UserService();
    component = new HeaderComponent(service, router);
  });

  afterEach(() => {
    localStorage.removeItem('video-courses');
    service = null;
    component = null;
  });


  it('false when the user is not authenticated', () => {
    expect(component.user).toBeFalsy();
  });

  it('true when the user is authenticated', () => {
    localStorage.setItem(
      'video-courses',
      '{"id":100500,"firstName":"Artur","lastName":"Rieznik","IsAuthenticated":true}'
    );
    component.ngOnInit();
    expect(component.user).toBeTruthy();
  });
});

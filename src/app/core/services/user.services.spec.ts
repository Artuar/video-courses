import {UserService} from './user.service';
import {HeaderComponent} from '../../shared/components/header/header.component';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {AppStore} from "../../app.store";
import {Store} from "@ngrx/store";

describe('UserService', () => {

  let component: HeaderComponent;
  let service: UserService;
  // tslint:disable-next-line
  let router: Router;
  // tslint:disable-next-line
  let activatedRoute: ActivatedRoute;
  // tslint:disable-next-line
  let http: HttpClient;
  // tslint:disable-next-line
  let store: Store<AppStore>;

  beforeEach(() => {
    service = new UserService(store, http);
    component = new HeaderComponent(store, service, router, activatedRoute);
  });

  afterEach(() => {
    service = null;
    component = null;
  });


  it('false when the user is not authenticated', () => {
    expect(component.user).toBeFalsy();
  });

});

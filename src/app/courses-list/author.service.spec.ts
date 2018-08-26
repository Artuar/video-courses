import { AuthorService } from './author.service';
import {AppStore} from '../app.store';
import {Store} from '@ngrx/store';
import {HttpClient} from '@angular/common/http';
import {CoursesItemEditComponent} from './courses-item-edit/courses-item-edit.component';
import {CoursesService} from './courses.service';
import {ActivatedRoute, Router} from '@angular/router';

describe('AuthorService', () => {
  let component: CoursesItemEditComponent;
  let authorService: AuthorService;
  let coursesService: CoursesService;
  // tslint:disable-next-line
  let router: Router;
  // tslint:disable-next-line
  let activatedRoute: ActivatedRoute;
  // tslint:disable-next-line
  let http: HttpClient;
  // tslint:disable-next-line
  let store: Store<AppStore>;
  beforeEach(() => {
    authorService = new AuthorService(store, http);
    coursesService = new CoursesService(store, http);
    component = new CoursesItemEditComponent(store, activatedRoute, router, coursesService, authorService);
  });

  afterEach(() => {
    authorService = null;
    coursesService = null;
    component = null;
  });


  it('false before using service', () => {
    expect(component).toBeTruthy();
  });

});

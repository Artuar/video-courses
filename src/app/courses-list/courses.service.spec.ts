import {CoursesService} from './courses.service';
import {CoursesListComponent} from './courses-list/courses-list.component';
import {FilterByPipe} from '../shared/pipes/filter-by.pipe';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Store} from "@ngrx/store";
import {AppStore} from "../app.store";

describe('CoursesService', () => {
  let component: CoursesListComponent;
  let service: CoursesService;
  let pipe: FilterByPipe;
  // tslint:disable-next-line
  let router: Router;
  // tslint:disable-next-line
  let http: HttpClient;
  // tslint:disable-next-line
  let store: Store<AppStore>;

  beforeEach(() => {
    service = new CoursesService(store, http);
    pipe = new FilterByPipe();
    component = new CoursesListComponent(store, service, router);
  });

  afterEach(() => {
    service = null;
    component = null;
  });


  it('false before using service', () => {
    expect(component.courses.length).toBe(0);
  });

});

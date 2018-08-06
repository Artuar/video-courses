import {CoursesService} from './courses.service';
import {CoursesListComponent} from './courses-list/courses-list.component';
import {FilterByPipe} from '../shared/pipes/filter-by.pipe';
import {Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";

describe('CoursesService', () => {
  let component: CoursesListComponent;
  let service: CoursesService;
  let pipe: FilterByPipe;
  // tslint:disable-next-line
  let router: Router;
  // tslint:disable-next-line
  let http: HttpClient;

  beforeEach(() => {
    service = new CoursesService(http);
    pipe = new FilterByPipe();
    component = new CoursesListComponent(service, router);
  });

  afterEach(() => {
    service = null;
    component = null;
  });


  it('false before using service', () => {
    expect(component.courses.length).toBe(0);
  });

});

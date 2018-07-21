import {CoursesService} from './courses.service';
import {CoursesListComponent} from './courses-list/courses-list.component';
import {FilterByPipe} from '../shared/pipes/filter-by.pipe';
import {Router} from '@angular/router';

describe('CoursesService', () => {
  let component: CoursesListComponent;
  let service: CoursesService;
  let pipe: FilterByPipe;
  // tslint:disable-next-line
  let router: Router;

  beforeEach(() => {
    service = new CoursesService();
    pipe = new FilterByPipe();
    component = new CoursesListComponent(service, pipe, router);
  });

  afterEach(() => {
    service = null;
    component = null;
  });


  it('false before using service', () => {
    expect(component.courses.length).toBe(0);
  });

});

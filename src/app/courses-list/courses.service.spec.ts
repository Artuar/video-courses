import {CoursesService} from './courses.service';
import {CoursesPageComponent} from './courses-page.component';
import {FilterByPipe} from './filter-by.pipe';

describe('Component: Login', () => {
  let component: CoursesPageComponent;
  let service: CoursesService;
  let pipe: FilterByPipe;

  beforeEach(() => {
    service = new CoursesService();
    pipe = new FilterByPipe();
    component = new CoursesPageComponent(service, pipe);
  });

  afterEach(() => {
    service = null;
    component = null;
  });


  it('false before using service', () => {
    expect(component.courses.length).toBe(0);
  });

  it('true after using service', () => {
    component.ngOnInit();
    expect(component.courses.length).toBe(5);
  });
});

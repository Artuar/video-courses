import { CoursesRoutingModule } from './courses-routing.module';

describe('CoursesRoutingModule', () => {
  let coursesRoutingModule: CoursesRoutingModule;

  beforeEach(() => {
    coursesRoutingModule = new CoursesRoutingModule();
  });

  it('should create an instance', () => {
    expect(coursesRoutingModule).toBeTruthy();
  });
});

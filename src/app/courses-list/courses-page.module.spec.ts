import { CoursesPageModule } from './courses-page.module';

describe('CoursesPageModule', () => {
  let coursesListModule: CoursesPageModule;

  beforeEach(() => {
    coursesListModule = new CoursesPageModule();
  });

  it('should create an instance', () => {
    expect(CoursesPageModule).toBeTruthy();
  });
});

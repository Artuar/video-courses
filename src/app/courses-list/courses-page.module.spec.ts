import { CoursesListModule } from './courses-page.module';

describe('CoursesListModule', () => {
  let coursesListModule: CoursesListModule;

  beforeEach(() => {
    coursesListModule = new CoursesListModule();
  });

  it('should create an instance', () => {
    expect(coursesListModule).toBeTruthy();
  });
});

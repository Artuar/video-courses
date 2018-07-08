import { Component, OnInit } from '@angular/core';
import {Course} from './Course';
import {CoursesService} from './courses-page.service';
import {FilterByPipe} from './filter-by.pipe';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
  providers: [ FilterByPipe ]
})
export class CoursesPageComponent implements OnInit {
  public courses: Course[] = [];
  public filteredCourses: Course[];
  public loader = false;

  constructor(
    private coursesService: CoursesService,
    private filterBy: FilterByPipe
  ) {}

  ngOnInit() {
    this.getCourses();
  }

  getCoursesList(): Course[] {
    return this.filteredCourses || this.courses;
  }

  search(searchString: string) {
    // this.getCourses(searchString);
    this.filteredCourses = this.filterBy.transform(
      this.courses,
      'title',
      searchString
    ) as Course[];
  }

  addCourse() {
    console.log('Click on Add course');
  }

  private getCourses(searchString: string = '') {
    this.loader = true;
    this.coursesService
      .getCoursesList(searchString)
      .subscribe(
        courses => {
          this.courses = courses;
          console.log('Courses list', this.courses);
        },
        () =>  {
          console.error('Error Courses list');
        },
        () => this.loader = false);
  }

  onDeleteCourse(course: Course) {
    console.log(`Delete '${course.title}' course (id: '${course.id}')`);
  }

  loadMore() {
    console.log(`Click on Load More`);
  }
}

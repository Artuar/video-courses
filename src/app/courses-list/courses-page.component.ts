import { Component, OnInit } from '@angular/core';
import {Course} from './Course';
import {CoursesService} from './courses-page.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {
  public courses: Course[] = [];
  public loader = false;

  constructor(
    private coursesService: CoursesService
  ) {}

  ngOnInit() {
    this.getCourses('');
  }

  search(searchString: string) {
    this.getCourses(searchString);
  }

  getCourses(searchString: string) {
    this.loader = true;
    this.coursesService
      .getCoursesList(searchString)
      .subscribe(
        courses => {
          this.courses = courses;
          this.loader = false;
          console.log('Courses list', this.courses);
        },
        () =>  {
          this.loader = false;
        });
  }

  onDeleteCourse(course: Course){
    console.log(`Delete '${course.title}' course (id: '${course.id}')`);
  }

  loadMore(){
    console.log(`Click on Load More`);
  }
}

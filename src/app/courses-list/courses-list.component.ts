import { Component, OnInit } from '@angular/core';
import {Course} from './shared/Course';
import {CoursesService} from './shared/courses-list.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
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
        },
        () =>  {
          this.courses = [];
          this.loader = false;
        });
  }
}

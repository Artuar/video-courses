import { Component, OnInit } from '@angular/core';
import {Course} from "../../shared/courses-list/Course";
import {CoursesService} from "../../shared/courses-list/courses-list.service";

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  public courses: Course[];

  constructor(
    private coursesService: CoursesService
  ) {}

  ngOnInit() {
    this.coursesService
      .getCoursesList()
      .subscribe(courses => this.courses = courses);
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../Course';

@Component({
  selector: 'app-courses-item',
  templateUrl: './courses-item.component.html',
  styleUrls: ['./courses-item.component.scss']
})
export class CoursesItemComponent {
  @Input() course: Course;

  constructor() { }

  edit() {
    console.log(`Click on Edit ${this.course.title} course`);
  }

  delete() {
    console.log(`Click on Delete ${this.course.title} course`);
  }
}

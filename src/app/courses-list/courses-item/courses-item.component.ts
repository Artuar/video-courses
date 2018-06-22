import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../Course';

@Component({
  selector: 'app-courses-item',
  templateUrl: './courses-item.component.html',
  styleUrls: ['./courses-item.component.scss']
})
export class CoursesItemComponent {
  @Input() course: Course;
  @Output() delete = new EventEmitter();

  constructor() { }

  edit() {
    console.log(`Click on Edit ${this.course.title} course`);
  }

  onDelete() {
    this.delete.emit(this.course);
  }
}

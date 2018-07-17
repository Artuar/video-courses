import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Course} from '../../Course';

@Component({
  selector: 'app-courses-edit',
  templateUrl: './courses-edit.component.html',
  styleUrls: ['../courses-item.component.scss']
})
export class CoursesEditComponent implements OnInit {
  @Input() course: Course;
  @Output() save = new EventEmitter();
  @Output() cancel = new EventEmitter();
  @Input() editedCourse: Course;

  constructor(
    private ref: ElementRef
  ) { }

  ngOnInit() {
    this.editedCourse = {...this.course};
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event) {
    if (!this.ref.nativeElement.contains(event.target)) {
      this.onCancel();
    }
  }

  onChange($event, property) {
    let value = $event.target ? $event.target.value : $event;
    if (property === 'creation_date') {
      value = new Date(value).getTime();
    }
    this.editedCourse[property] = value;
  }

  onSave() {
    this.save.emit(this.editedCourse);
    this.onCancel();
  }

  onCancel() {
    this.editedCourse = this.course;
    this.cancel.emit();
  }

}

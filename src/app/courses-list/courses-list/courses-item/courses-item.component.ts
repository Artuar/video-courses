import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../../Course';

@Component({
  selector: 'app-courses-item',
  templateUrl: './courses-item.component.html',
  styleUrls: ['./courses-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesItemComponent {
  @Input() course: Course;
  @Output() del = new EventEmitter();
  @Output() edit = new EventEmitter();

  constructor(  ) { }

  onEdit($event) {
    $event.stopPropagation();
    this.edit.emit({course: this.course, isEdit: true});
  }

  onDelete() {
    this.del.emit(this.course);
  }

  onCancel() {
    this.edit.emit({course: this.course, isEdit: false});
  }



}

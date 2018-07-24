import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CoursesService} from '../courses.service';
import {Course} from '../Course';

@Component({
  selector: 'app-courses-item-edit',
  templateUrl: './courses-item-edit.component.html',
  styleUrls: ['./courses-item-edit.component.scss']
})
export class CoursesItemEditComponent implements OnInit {
  private id: string;
  public course: Course;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private coursesService: CoursesService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'] || 'new';
    });
  }

  ngOnInit() {
    if (this.id !== 'new') {
      this.coursesService
        .getCourseById(+this.id)
        .subscribe(
          course => {
            this.course = course;
          },
          () =>  {
            console.error('Error');
          });
    } else {
      this.course = {
        title: '',
        duration: 0,
        description: '',
        edit: true,
        new_course: true
      } as Course;
    }
  }

  onChange($event, property) {
    let value = $event.target ? $event.target.value : $event;
    if (property === 'creation_date') {
      value = new Date(value).getTime();
    }
    this.course[property] = value;
  }

  onSave() {
    this.coursesService.saveCourse(this.course);
    this.onCancel();
  }

  onCancel() {
    this.router.navigateByUrl('course');
  }

}

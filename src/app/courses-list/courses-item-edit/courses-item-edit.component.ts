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
  public authorsArray: string[] = [];

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
            if (!course) {
              this.onCancel();
            }
            this.course = course;
            this.authorsArray = this.course.authors
              .map(auth => `${auth['firstName']} ${auth['lastName']}`);
          },
          () =>  {
            console.error('Error');
          });
    } else {
      this.course = {
        name: '',
        duration: 0,
        description: '',
        authors: []
      } as Course;
    }
  }

  onChange($event, property) {
    let value = $event.target ? $event.target.value : $event;
    if (property === 'date') {
      value = new Date(value).getTime();
    } else if (property === 'authors') {
      value = value.map(author => {
        const authNameArr = author.split(' ');
        return {firstName: authNameArr.shift(), lastName: authNameArr.join(' ')};
      });
    }
    this.course[property] = value;
  }

  onSave() {
    this.coursesService.saveCourse(this.course);
    this.onCancel();
  }

  onCancel() {
    this.router.navigateByUrl('courses');
  }

}

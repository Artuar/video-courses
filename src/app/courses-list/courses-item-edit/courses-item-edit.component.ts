import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CoursesService} from '../courses.service';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthorService} from "../author.service";
import {AppStore} from "../../app.store";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-courses-item-edit',
  templateUrl: './courses-item-edit.component.html',
  styleUrls: ['./courses-item-edit.component.scss']
})
export class CoursesItemEditComponent implements OnInit {
  private id: string;
  public authorsArray: string[] = [];
  public foundedAuthors: string[] = [];
  public courseForm: FormGroup;

  constructor(
    private store: Store<AppStore>,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private coursesService: CoursesService,
    private authorService: AuthorService,
  ) {
    this.activatedRoute && this.activatedRoute.params.subscribe(params => {
      this.id = params['id'] || 'new';
    });
    if(store) {
      store.subscribe( reduxStore => {
        const str = reduxStore['store'];
        if (str) {
          this.foundedAuthors = str.foundedAuthors;
        }
      }, () =>  {
        console.error('Error');
      });
    }
  }

  ngOnInit() {
    this.autoFill();
    this.authorService.getAuthorsList();
  }

  autoFill() {
    if (this.id !== 'new') {
      this.coursesService
        .getCourseById(+this.id)
        .subscribe(
          course => {
            if (!course) {
              this.onCancel();
            }
            this.formValidateInit(course);
            this.authorsArray = course.authors
              .map(auth => `${auth['firstName']} ${auth['lastName']}`);
          },
          () =>  {
            console.error('Error');
          });
    } else {
      this.formValidateInit({
        name: '',
        duration: 0,
        description: '',
        authors: []
      });
    }
  }

  formValidateInit(course) {
    this.courseForm = new FormGroup({
      id: new FormControl(this.id, [Validators.required]),
      name: new FormControl(course.name, [Validators.required]),
      duration: new FormControl(course.duration, [Validators.required]),
      description: new FormControl(course.description  , [Validators.required]),
      date: new FormControl(course.date, [Validators.required]),
      authors: new FormControl(course.authors)
    });
  }

  onChangeAuthors($event) {
    this.courseForm.value.authors = $event.map(author => {
      const authNameArr = author.split(' ');
      return {firstName: authNameArr.shift(), lastName: authNameArr.join(' ')};
    });
  }

  onKeyupAuthors($event) {
    this.store.dispatch({type: 'FIND_AUTHORS', payload: $event});
  }

  onSelectItem($event) {
    this.authorsArray.push($event.name);

    const authNameArr = $event.name.split(' ');
    this.courseForm.value.authors.push({firstName: authNameArr.shift(), lastName: authNameArr.join(' ')});

    this.onKeyupAuthors('');
  }

  onRemove($event) {
    this.authorsArray = this.authorsArray.filter(item => item !== $event);

    const authNameArr = $event.split(' ');
    const firstName = authNameArr.shift();
    const lastName = authNameArr.join(' ');
    this.courseForm.value.authors = this.courseForm.value.authors.filter(item =>
      !(item.firstName === firstName && item.lastName === lastName));

    this.onKeyupAuthors('');
  }

  onSave(course) {
    this.coursesService.saveCourse(course);
    this.onCancel();
  }

  onCancel() {
    this.router.navigateByUrl('courses');
  }

}

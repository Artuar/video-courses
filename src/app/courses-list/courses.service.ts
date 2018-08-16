import { Injectable } from '@angular/core';

import {Observable, throwError} from 'rxjs';
import {Course} from './Course';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/internal/operators';
import {Store} from '@ngrx/store';
import {AppStore} from '../app.store';


@Injectable()
export class CoursesService {
  private courseUrl = 'http://localhost:3004/courses';
  private count = 0;
  private step = 5;

  constructor(
    private store: Store<AppStore>,
    private http: HttpClient
  ) {  }

  private handleError(error: any) {
    console.error('Error', error);
    return throwError(error.message || error);
  }

  public getCoursesList(textFragment: string, fromBeginning?: boolean) {
    if (fromBeginning) {
      this.count = 0;
    }
    return this.http.get(
      this.courseUrl,
      {
        params: {
          start: (this.count).toString(),
          count: (this.step).toString(),
          sort: 'date',
          textFragment
        }
      })
      .pipe(
        map(response => {
          this.count += this.step;
          return {
            courses: (response || []) as Course[],
            thereAreMore: response['length'] === this.step
          };
        }),
        catchError(this.handleError)
      ).subscribe(({courses, thereAreMore}) => {
        this.store.dispatch({
          type: fromBeginning ? 'COURSES_LIST' : 'ADD_COURSES',
          payload: {courses, thereAreMore}
        });
      });
  }

  public getCourseById(id: number): Observable<Course> {
    return this.http.get(`${this.courseUrl}/${id}`)
      .pipe(
        map(course => course as Course),
        catchError(this.handleError)
      );
  }

  public deleteCourse(id: number) {
    return this.http.delete(`${this.courseUrl}/${id}`)
      .pipe(
        map(() => {
          return id;
        }),
        catchError(this.handleError)
      )
      .subscribe((action) => {
        this.store.dispatch({type: 'DELETE_COURSE', payload: id });
      });
  }

  public saveCourse(courseProps) {
    let url = `${this.courseUrl}/${courseProps.id}`;
    let type = 'EDIT_COURSE';
    let method = 'put';
    if (!courseProps.id) {
      url = this.courseUrl;
      type = 'SAVE_COURSE';
      method = 'post';
    }
    return this.http[method](url, courseProps)
      .pipe(
        map(course => course as Course),
        catchError(this.handleError)
      ).subscribe((course) => {
        this.store.dispatch({type, payload: course });
      });
  }
}

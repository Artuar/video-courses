import { Injectable } from '@angular/core';

import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {Course} from './Course';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/internal/operators';


@Injectable()
export class CoursesService {
  private coursesList: Course[] = [];
  private courseUrl = 'http://localhost:3004/courses';
  private count = 0;
  private step = 5;

  constructor(
    private http: HttpClient
  ) {  }

  private handleError(error: any) {
    console.error('Error', error);
    return throwError(error.message || error);
  }

  public getCoursesList(textFragment: string, fromBeginning?: boolean): Observable<{courses: Course[], thereAreMore: boolean}> {
    if (fromBeginning) {
      this.count = 0;
      this.coursesList = [];
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
          this.coursesList = [...this.coursesList, ...(response as {}[])] as Course[];
          return {
            courses: this.coursesList,
            thereAreMore: response['length'] === this.step
          };
        }),
        catchError(this.handleError)
      );
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
          this.coursesList = this.coursesList.filter(course => id !== course.id);
          return this.coursesList;
        }),
        catchError(this.handleError)
      );
  }

  public saveCourse(courseProps): Observable<Course> {
    if (courseProps.id !== 'new') {
      return this.http.put(`${this.courseUrl}/${courseProps.id}`, courseProps)
        .pipe(
          map(course => course as Course),
          catchError(this.handleError)
        );
    }
    return this.http.post(this.courseUrl, courseProps)
      .pipe(
        map(course => course as Course),
        catchError(this.handleError)
      );
  }
}

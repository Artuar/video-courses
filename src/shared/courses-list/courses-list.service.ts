import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";

import { throwError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators'
import {Course} from "./Course";

@Injectable()
export class CoursesService {

  private apiUrl: string;

  constructor(
    private http: HttpClient,
  ) {
    this.apiUrl = 'api/courses'
  }

  private handleError(error: any) {
    console.error('Error', error);
    return throwError(error.message || error);
  }

  getCoursesList(): Observable<Course[]> {
    return this.http.get(this.apiUrl)
      .pipe(
        map(response => response as Course[]),
        catchError(this.handleError)
      );
  }
}

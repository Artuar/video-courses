import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {throwError, Observable} from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {User} from './User';

@Injectable()
export class UserService {

  private userData: User;

  private apiUrl: string;

  constructor(
    private http: HttpClient,
  ) {
    this.apiUrl = 'api/user';
  }

  private handleError(error: any) {
    console.error('Error', error);
    return throwError(error.message || error);
  }

  getUserData(): Observable<User> {
    return this.http.get(this.apiUrl)
      .pipe(
        map(response => response as User),
        catchError(this.handleError)
      );
  }

  login(): Observable<{}> {
    window.localStorage['video-courses'] = JSON.stringify({IsAuthenticated: true});
    return new Observable((observer) => {
      observer.next({IsAuthenticated: true});
      observer.complete();
    });
  }

  logout(): Observable<{}> {
    window.localStorage['video-courses'] = JSON.stringify({IsAuthenticated: false});
    return new Observable((observer) => {
      observer.next({IsAuthenticated: false});
      observer.complete();
    });
  }

  isLogin(): boolean {
    const localData = window.localStorage['video-courses'];
    let data;
    if (localData)  {
      try {
        data = JSON.parse(localData);
      } catch (e) {
        delete window.localStorage['video-courses'];
      }
    }
    return data && data.IsAuthenticated;
  }

}

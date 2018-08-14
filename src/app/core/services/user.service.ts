import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {throwError, Observable} from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {User} from './User';

@Injectable()
export class UserService {
  private loginUrl = 'http://localhost:3004/auth/login';
  private userUrl = 'http://localhost:3004/auth/userinfo';
  private user: User;
  private token: string;

  constructor(
    private http: HttpClient,
  ) {  }

  private handleError(error: any) {
    console.error('Error', error);
    return throwError(error.message || error);
  }

  getUserData(): Observable<User> {
    return this.getInfo()
      .pipe(
        map(response => response as User),
        catchError(this.handleError)
      );
  }

  getInfo(){
    return this.http.post(this.userUrl, {})
  }

  login(login: string, password: string): Observable<{}> {
    return this.http.post(this.loginUrl, {login, password})
      .pipe(
        map(auth => {
          window.localStorage['video-courses'] = JSON.stringify({IsAuthenticated: true});
          this.token = auth['token'];
          return auth;
        })
      );
  }

  logout(): Observable<{}> {
    return new Observable((observer) => {
      observer.next({IsAuthenticated: false});
      observer.complete();
    });
  }

  isLogin(): boolean {
    return !!this.token;
  }

  getIsAuthenticated(): Observable<boolean> {
    return this.getInfo().pipe(
      map(user => !!user['fakeToken'])
    );
  }

  getToken() {
    return this.token;
  }

}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {throwError, Observable} from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {User} from './User';
import {AppStore} from "../../app.store";
import {Store} from "@ngrx/store";

@Injectable()
export class UserService {
  private loginUrl = 'http://localhost:3004/auth/login';
  private userUrl = 'http://localhost:3004/auth/userinfo';
  private token: string;

  constructor(
    private store: Store<AppStore>,
    private http: HttpClient,
  ) {  }

  private handleError(error: any) {
    console.error('Error', error);
    return throwError(error.message || error);
  }

  getUserData() {
    return this.getInfo()
      .pipe(
        map(response => response as User),
        catchError(this.handleError)
      ).subscribe(user => {
        this.store.dispatch({type: 'ADD_USER', payload: user });
      });
  }

  getInfo() {
    return this.http.post(this.userUrl, {});
  }

  login(login: string, password: string): Observable<{}> {
    return this.http.post(this.loginUrl, {login, password})
      .pipe(
        map(auth => {
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

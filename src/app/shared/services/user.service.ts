import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {throwError, Observable, Subject} from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {User} from './User';

const USER = {
  id: 100500,
  firstName: 'Artur',
  lastName: 'Rieznik',
  IsAuthenticated: true
};

@Injectable()
export class UserService {

    private userData: User;

    constructor() { }

    public getUserData(): Observable<User> {
      const localData = window.localStorage['video-courses'];
      if (localData)  {
        try {
          const data = JSON.parse(localData);
          const isAuth = data.IsAuthenticated;
          if (isAuth) {
            this.userData = data;
            return new Observable((observer) => {
              observer.next(USER as User);
              observer.complete();
            });
          }
        } catch (e) {}
      }
      return new Observable((observer) => {
        observer.next(Object.assign(this.userData || {}, {IsAuthenticated: false})  as User);
        observer.complete();
      });
    }

    login(): Observable<User> {
      window.localStorage['video-courses'] = JSON.stringify(USER);
      return new Observable((observer) => {
        observer.next(USER as User);
        observer.complete();
      });
    }

    logOut(): Observable<User> {
      delete window.localStorage['video-courses'];
      return new Observable((observer) => {
        observer.next(Object.assign(this.userData, {IsAuthenticated: false}));
        observer.complete();
      });
    }

}

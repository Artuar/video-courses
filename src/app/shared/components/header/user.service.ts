import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { throwError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {User} from './User';

@Injectable()
export class UserService {

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
}

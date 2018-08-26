import { Injectable } from '@angular/core';
import {throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/internal/operators';
import {Store} from '@ngrx/store';
import {AppStore} from '../app.store';

@Injectable()
export class AuthorService {
  private url = 'http://localhost:3004/authors';

  constructor(
    private store: Store<AppStore>,
    private http: HttpClient
  ) {  }

  private handleError(error: any) {
    console.error('Error', error);
    return throwError(error.message || error);
  }

  public getAuthorsList() {
    return this.http.get(this.url)
      .pipe(
        map(response => response),
        catchError(this.handleError)
      ).subscribe((authors) => {
        this.store.dispatch({
          type: 'ADD_AUTHORS',
          payload: authors
        });
      });
  }
}

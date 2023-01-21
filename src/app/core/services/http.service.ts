import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { API_URL } from '../tokens';
import { QueryParamValue } from '../types';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private readonly error = inject(ErrorService);
  private readonly http = inject(HttpClient);
  private readonly apiUrl = inject(API_URL);

  get<T>(
    path: string,
    options?: { params?: HttpParams | Record<string, QueryParamValue> },
  ) {
    return this.http
      .get<T>(`${this.apiUrl}${path}`, options)
      .pipe(this.handleError.bind(this));
  }

  private handleError<T>(obs: Observable<T>) {
    return obs.pipe(
      this.error.retry(3),
      catchError(err => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.log(
            `Backend returned code ${err.status}, body was:`,
            typeof err.error === 'string' ? 'HTML body' : err.error,
          );
        }

        return throwError(() => err);
      }),
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { delay, map, Observable, of, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  private condition?: (error: Error | HttpErrorResponse) => Observable<boolean>;

  retry(count: number) {
    const delayFn = (error: Error | HttpErrorResponse) => {
      if (!this.condition) {
        throw error;
      }

      return this.condition(error).pipe(
        // Without the delay in some cases the UI won't be notified
        delay(0),
        map(repeat => {
          if (repeat) {
            return of(true);
          }

          throw error;
        }),
      );
    };

    return (observable: Observable<any>) =>
      observable.pipe(retry({ count, delay: delayFn }));
  }

  retryWhenError(
    condition: (error: Error | HttpErrorResponse) => Observable<boolean>,
  ) {
    this.condition = condition;
  }
}

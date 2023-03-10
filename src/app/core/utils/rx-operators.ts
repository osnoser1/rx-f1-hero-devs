import { catchError, defer, finalize, map, Observable, of } from 'rxjs';
import { get } from 'lodash-es';
import { FormulaOneListResponse } from '../types/formula-one-list-response';
import { ListResponse } from '../types/list-response';

export const prepare =
  <T>(callback: () => void) =>
  (source: Observable<T>) =>
    defer(() => {
      callback();
      return source;
    });

export const indicate =
  <T>(indicator: { start: () => void; complete: () => void }) =>
  (source: Observable<T>) =>
    source.pipe(
      prepare(() => indicator.start()),
      finalize(() => indicator.complete()),
    );

export const toListResponse =
  <T>(key: string, innerKey?: string) =>
  (source: Observable<FormulaOneListResponse>): Observable<ListResponse<T>> =>
    source.pipe(
      map(({ MRData: response }) => ({
        count: Number(response.total),
        result: get(response[`${key}Table`], innerKey ?? `${key}s`),
      })),
      catchError(_ => of({ result: [], count: 0 })),
    );

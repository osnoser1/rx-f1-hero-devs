import { inject, Injectable } from '@angular/core';
import { HttpService } from '../../core/services';
import { Driver, DriverQuery, FormulaOneListResponse } from '../../core/types';
import { getFormulaOneParams, toListResponse } from '../../core/utils';

@Injectable()
export class DriverService {
  private readonly http = inject(HttpService);
  private readonly path = 'drivers.json';

  getAll(query?: DriverQuery) {
    const params = getFormulaOneParams(query ?? {});
    return this.http
      .get<FormulaOneListResponse>(this.path, { params })
      .pipe(toListResponse<Driver>('Driver'));
  }
}

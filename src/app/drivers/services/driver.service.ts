import { inject, Injectable } from '@angular/core';
import { isNumber } from 'lodash-es';
import { HttpService } from '../../core/services';
import { Driver, DriverQuery, FormulaOneListResponse } from '../../core/types';
import { getFormulaOneParams, toListResponse } from '../../core/utils';

@Injectable()
export class DriverService {
  private readonly http = inject(HttpService);
  private readonly path = 'drivers.json';

  getAll(query?: DriverQuery) {
    const { season, ...rest } = query ?? {};
    const params = getFormulaOneParams(rest);
    const seasonPath = isNumber(season) ? `${season}/` : '';
    return this.http
      .get<FormulaOneListResponse>(`${seasonPath}${this.path}`, { params })
      .pipe(toListResponse<Driver>('Driver'));
  }
}

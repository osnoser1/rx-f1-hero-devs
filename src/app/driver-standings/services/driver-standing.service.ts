import { inject, Injectable } from '@angular/core';
import { isNumber } from 'lodash-es';
import { HttpService } from '../../core/services';
import {
  DriverStanding,
  DriverStandingQuery,
  FormulaOneListResponse,
} from '../../core/types';
import { getFormulaOneParams, toListResponse } from '../../core/utils';

@Injectable()
export class DriverStandingService {
  private readonly http = inject(HttpService);
  private readonly path = 'driverStandings.json';

  getAll(query?: DriverStandingQuery) {
    const { season, round, ...rest } = query ?? {};
    const params = getFormulaOneParams(rest);
    const seasonPath = isNumber(season) ? `${season}/` : '';
    const roundPath = isNumber(round) ? `${round}/` : '';
    return this.http
      .get<FormulaOneListResponse>(`${seasonPath}${roundPath}${this.path}`, {
        params,
      })
      .pipe(
        toListResponse<DriverStanding>(
          'Standings',
          'StandingsLists[0].DriverStandings',
        ),
      );
  }
}

import { inject, Injectable } from '@angular/core';
import { HttpService } from '../../core/services';
import {
  DriverStanding,
  DriverStandingQuery,
  FormulaOneListResponse,
} from '../../core/types';
import { getFormulaOneParams, toListResponse } from '../../core/utils';
import { tap } from 'rxjs';

@Injectable()
export class DriverStandingService {
  private readonly http = inject(HttpService);
  private readonly path = 'driverStandings.json';

  getAll(query?: DriverStandingQuery) {
    const { season, round, ...rest } = query ?? {};
    const params = getFormulaOneParams(rest ?? {});
    const seasonPath = season ? `${season}/` : '';
    const roundPath = round ? `${round}/` : '';
    return this.http
      .get<FormulaOneListResponse>(`${seasonPath}${roundPath}${this.path}`, {
        params,
      })
      .pipe(
        toListResponse<DriverStanding>(
          'Standings',
          'StandingsLists[0].DriverStandings',
        ),
        tap(console.log),
      );
  }
}

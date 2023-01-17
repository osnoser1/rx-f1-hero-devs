import { inject, Injectable } from '@angular/core';
import { isNumber } from 'lodash-es';
import { HttpService } from '../../core/services';
import {
  Qualifying,
  QualifyingQuery,
  FormulaOneListResponse,
} from '../../core/types';
import { getFormulaOneParams, toListResponse } from '../../core/utils';

@Injectable()
export class QualifyingService {
  private readonly http = inject(HttpService);
  private readonly path = 'qualifying.json';

  getAll(query?: QualifyingQuery) {
    const { season, round, ...rest } = query ?? {};
    const params = getFormulaOneParams(rest ?? {});
    const seasonPath = isNumber(season) ? `${season}/` : '';
    const roundPath = isNumber(round) ? `${round}/` : '';
    return this.http
      .get<FormulaOneListResponse>(`${seasonPath}${roundPath}${this.path}`, {
        params,
      })
      .pipe(toListResponse<Qualifying>('Race'));
  }
}

import { inject, Injectable } from '@angular/core';
import { HttpService } from '../../core/services';
import { FormulaOneListResponse, Race, RaceQuery } from '../../core/types';
import { getFormulaOneParams, toListResponse } from '../../core/utils';

@Injectable()
export class RaceService {
  private readonly http = inject(HttpService);
  private readonly path = 'results.json';

  getAll(query?: RaceQuery) {
    const { season, ...rest } = query ?? {};
    const params = getFormulaOneParams(rest);
    const seasonPath = season ? `${season}/` : '';
    return this.http
      .get<FormulaOneListResponse>(`${seasonPath}${this.path}`, { params })
      .pipe(toListResponse<Race>('Race'));
  }
}

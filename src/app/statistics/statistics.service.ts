import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HttpService } from '../core/services';
import { FormulaOneListResponse } from '../core/types';
import { getParams } from '../core/utils';

export enum CarStatus {
  Finished = 1,
  Accident = 3,
  PlusOneLap = 11,
}

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  private readonly http = inject(HttpService);
  private readonly path = 'results.json';

  getTotalCars(status: CarStatus, season: number) {
    const params = getParams({ limit: 0 });
    return this.http
      .get<FormulaOneListResponse>(`${season}/status/${status}/${this.path}`, {
        params,
      })
      .pipe(map(({ MRData }) => Number(MRData.total)));
  }
}

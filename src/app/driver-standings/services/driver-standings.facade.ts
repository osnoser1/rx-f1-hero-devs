import { inject, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, shareReplay, switchMap } from 'rxjs';
import { DriverStandingService } from './driver-standing.service';
import { toDriverStandingsQueryObject } from '../utils/driver-standings-query-object';
import { LoadingService } from '../../core/services';
import { indicate } from '../../core/utils';

@Injectable()
export class DriverStandingsFacade {
  private driverStandingsService = inject(DriverStandingService);
  private loading = inject(LoadingService);
  private route = inject(ActivatedRoute);

  queryParams$ = this.route.queryParams.pipe(
    map(toDriverStandingsQueryObject),
    shareReplay(1),
  );

  data$ = this.queryParams$.pipe(
    switchMap(query =>
      this.driverStandingsService.getAll(query).pipe(indicate(this.loading)),
    ),
    shareReplay(1),
  );

  loading$ = this.loading.isLoading$;
}

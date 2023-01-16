import { inject, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, shareReplay, switchMap } from 'rxjs';
import { RaceService } from './race.service';
import { toRaceQueryObject } from '../utils/race-query-object';
import { LoadingService } from '../../core/services';
import { indicate } from '../../core/utils';

@Injectable()
export class RacesFacade {
  private raceService = inject(RaceService);
  private loading = inject(LoadingService);
  private route = inject(ActivatedRoute);

  queryParams$ = this.route.queryParams.pipe(
    map(toRaceQueryObject),
    shareReplay(1),
  );

  data$ = this.queryParams$.pipe(
    switchMap(query =>
      this.raceService.getAll(query).pipe(indicate(this.loading)),
    ),
    shareReplay(1),
  );

  loading$ = this.loading.isLoading$;
}

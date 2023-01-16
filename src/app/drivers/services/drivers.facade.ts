import { inject, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay, map, shareReplay, switchMap } from 'rxjs';
import { DriverService } from './driver.service';
import { toDriverQueryObject } from '../utils/to-driver-query-object';
import { LoadingService } from '../../core/services';
import { indicate } from '../../core/utils';

@Injectable()
export class DriversFacade {
  private driverService = inject(DriverService);
  private loading = inject(LoadingService);
  private route = inject(ActivatedRoute);
  queryParams$ = this.route.queryParams.pipe(
    map(toDriverQueryObject),
    shareReplay(1),
  );
  data$ = this.queryParams$.pipe(
    switchMap(query =>
      this.driverService
        .getAll(query)
        .pipe(delay(3000), indicate(this.loading)),
    ),
    shareReplay(1),
  );
  loading$ = this.loading.isLoading$;
}

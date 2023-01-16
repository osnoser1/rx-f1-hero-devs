import { inject, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, shareReplay, switchMap } from 'rxjs';
import { QualifyingService } from './qualifying.service';
import { toQualifyingQueryObject } from '../utils/qualifying-query-object';
import { LoadingService } from '../../core/services';
import { indicate } from '../../core/utils';

@Injectable()
export class QualifyingFacade {
  private qualifyingService = inject(QualifyingService);
  private loading = inject(LoadingService);
  private route = inject(ActivatedRoute);
  queryParams$ = this.route.queryParams.pipe(
    map(toQualifyingQueryObject),
    shareReplay(1),
  );
  data$ = this.queryParams$.pipe(
    switchMap(query =>
      this.qualifyingService.getAll(query).pipe(indicate(this.loading)),
    ),
    shareReplay(1),
  );
  loading$ = this.loading.isLoading$;
}

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { combineLatest, map, shareReplay, Subject } from 'rxjs';
import { CarStatus, StatisticsService } from './statistics.service';
import { LoadingService } from '../core/services';
import { indicate } from '../core/utils';
import { FullScreenLoadingSpinnerComponent } from '../shared/components';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CommonModule, FullScreenLoadingSpinnerComponent],
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatisticsComponent {
  loading = inject(LoadingService);
  statisticsService = inject(StatisticsService);

  private readonly year = 2021;
  private readonly destroy$ = new Subject<void>();

  data$ = combineLatest([
    this.statisticsService.getTotalCars(CarStatus.Finished, this.year),
    this.statisticsService.getTotalCars(CarStatus.Accident, this.year),
    this.statisticsService.getTotalCars(CarStatus.PlusOneLap, this.year),
  ]).pipe(
    indicate(this.loading),
    map(([finished, accident, plusOneLap]) => ({
      finished,
      accident,
      plusOneLap,
    })),
    shareReplay(1),
  );
}

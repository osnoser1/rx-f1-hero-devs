import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { combineLatest, shareReplay } from 'rxjs';
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

  data$ = combineLatest({
    finished: this.statisticsService.getTotalCars(
      CarStatus.Finished,
      this.year,
    ),
    accident: this.statisticsService.getTotalCars(
      CarStatus.Accident,
      this.year,
    ),
    plusOneLap: this.statisticsService.getTotalCars(
      CarStatus.PlusOneLap,
      this.year,
    ),
  }).pipe(indicate(this.loading), shareReplay(1));
}

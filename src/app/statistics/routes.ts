import { Routes } from '@angular/router';
import { StatisticsService } from './statistics.service';
import { StatisticsComponent } from './statistics.component';

export default [
  {
    path: '',
    component: StatisticsComponent,
    providers: [StatisticsService],
  },
] as Routes;

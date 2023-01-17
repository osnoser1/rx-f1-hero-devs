import { Routes } from '@angular/router';
import { DriverStandingsComponent } from './driver-standings.component';
import { DriverStandingService } from './services/driver-standing.service';

export default [
  {
    path: '',
    component: DriverStandingsComponent,
    providers: [DriverStandingService],
  },
] as Routes;

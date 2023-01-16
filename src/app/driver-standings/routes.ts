import { Routes } from '@angular/router';
import { DriverStandingsComponent } from './driver-standings.component';
import { DriverStandingService } from './services/driver-standing.service';
import { DriverStandingsFacade } from './services/driver-standings.facade';

export default [
  {
    path: '',
    component: DriverStandingsComponent,
    providers: [DriverStandingService, DriverStandingsFacade],
  },
] as Routes;

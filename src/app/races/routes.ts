import { Routes } from '@angular/router';
import { RacesComponent } from './races.component';
import { RaceService } from './services/race.service';
import { RacesFacade } from './services/races.facade';

export default [
  {
    path: '',
    component: RacesComponent,
    providers: [RaceService, RacesFacade],
  },
] as Routes;

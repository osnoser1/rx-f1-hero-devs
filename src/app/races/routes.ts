import { Routes } from '@angular/router';
import { RacesComponent } from './races.component';
import { RaceService } from './services/race.service';

export default [
  {
    path: '',
    component: RacesComponent,
    providers: [RaceService],
  },
] as Routes;

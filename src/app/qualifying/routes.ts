import { Routes } from '@angular/router';
import { QualifyingComponent } from './qualifying.component';
import { QualifyingService } from './services/qualifying.service';
import { QualifyingFacade } from './services/qualifying.facade';

export default [
  {
    path: '',
    component: QualifyingComponent,
    providers: [QualifyingService, QualifyingFacade],
  },
] as Routes;

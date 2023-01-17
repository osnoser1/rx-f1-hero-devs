import { Routes } from '@angular/router';
import { QualifyingComponent } from './qualifying.component';
import { QualifyingService } from './services/qualifying.service';

export default [
  {
    path: '',
    component: QualifyingComponent,
    providers: [QualifyingService],
  },
] as Routes;

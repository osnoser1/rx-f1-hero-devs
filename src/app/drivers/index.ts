import { Routes } from '@angular/router';
import { DriversComponent } from './drivers.component';
import { DriverService } from './services/driver.service';

export default [
  {
    path: '',
    component: DriversComponent,
    providers: [DriverService],
  },
] as Routes;

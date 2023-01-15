import { Routes } from '@angular/router';
import { DriversComponent } from './drivers.component';
import { DriverService } from './services/driver.service';
import { DriversFacade } from './services/drivers.facade';

export default [
  {
    path: '',
    component: DriversComponent,
    providers: [DriverService, DriversFacade],
  },
] as Routes;

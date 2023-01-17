import type { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'drivers', loadChildren: () => import('./drivers/routes') },
      { path: 'races', loadChildren: () => import('./races/routes') },
      { path: 'qualifying', loadChildren: () => import('./qualifying/routes') },
      {
        path: 'driver-standings',
        loadChildren: () => import('./driver-standings/routes'),
      },
    ],
  },
];

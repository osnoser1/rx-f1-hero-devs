import type { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: 'drivers', loadChildren: () => import('./drivers/routes') },
  { path: 'races', loadChildren: () => import('./races/routes') },
];

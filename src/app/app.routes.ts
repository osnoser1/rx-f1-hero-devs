import type { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'drivers' },
  { path: '', loadChildren: () => import('./layout') },
];

import type { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ON_QUERY_CHANGE_FUNC } from './core/tokens';
import { getOnQueryChange } from './core/utils';

export const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'drivers' },
  {
    path: '',
    component: LayoutComponent,
    providers: [{ provide: ON_QUERY_CHANGE_FUNC, useValue: getOnQueryChange }],
    children: [
      { path: 'drivers', loadChildren: () => import('./drivers/routes') },
      { path: 'races', loadChildren: () => import('./races/routes') },
      { path: 'qualifying', loadChildren: () => import('./qualifying/routes') },
      {
        path: 'driver-standings',
        loadChildren: () => import('./driver-standings/routes'),
      },
      { path: 'statistics', loadChildren: () => import('./statistics/routes') },
    ],
  },
];

import { provideHttpClient } from '@angular/common/http';
import type { Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { ON_QUERY_CHANGE_FUNC } from '../core/tokens';
import { getOnQueryChange } from '../core/utils';
import { provideCoreServices } from '../core';

export default [
  {
    path: '',
    component: LayoutComponent,
    providers: [
      provideHttpClient(),
      provideCoreServices(),
      { provide: ON_QUERY_CHANGE_FUNC, useValue: getOnQueryChange },
    ],
    children: [
      { path: 'drivers', loadChildren: () => import('../drivers') },
      { path: 'races', loadChildren: () => import('../races') },
      { path: 'qualifying', loadChildren: () => import('../qualifying') },
      {
        path: 'driver-standings',
        loadChildren: () => import('../driver-standings'),
      },
      { path: 'statistics', loadChildren: () => import('../statistics') },
    ],
  },
] as Routes;

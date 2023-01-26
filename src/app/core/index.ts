import type { Provider } from '@angular/core';
import { ErrorService, HttpService, LoadingService } from './services';

export function provideCoreServices(): Provider[] {
  return [ErrorService, HttpService, LoadingService];
}

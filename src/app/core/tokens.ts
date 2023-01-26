import { InjectionToken } from '@angular/core';
import { PageQuery, QueryParamValue } from './types';

export const API_URL = new InjectionToken('api_url');
export const ON_QUERY_CHANGE_FUNC = new InjectionToken<
  (
    toQueryParamsFunc: (query: PageQuery) => Record<string, QueryParamValue>,
  ) => (query: PageQuery) => Promise<boolean>
>('onQueryChangeFunc');

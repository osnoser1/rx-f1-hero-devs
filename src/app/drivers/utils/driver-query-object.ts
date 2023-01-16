import { Params } from '@angular/router';
import { cloneDeep } from 'lodash-es';
import { toQueryObject, toQueryParams } from '../../core/utils';
import { DriverQuery } from '../../core/types';

export function toDriverQueryObject(params: Params) {
  const queryObject = toQueryObject(params) as DriverQuery;
  queryObject.season = queryObject.season ? Number(queryObject.season) : 2018;
  return queryObject;
}

export function toDriverQueryParams(query: DriverQuery) {
  const updatedQuery = cloneDeep(query);
  if (updatedQuery.season === 2018) {
    delete updatedQuery.season;
  }

  return toQueryParams(updatedQuery);
}

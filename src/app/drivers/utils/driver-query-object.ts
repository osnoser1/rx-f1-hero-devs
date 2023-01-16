import { Params } from '@angular/router';
import { cloneDeep } from 'lodash-es';
import { toQueryObject, toQueryParams } from '../../core/utils';
import { DeepNullable, DriverQuery, RaceQuery } from '../../core/types';

export function toDriverQueryObject(params: Params) {
  const queryObject = toQueryObject(params) as DriverQuery;
  queryObject.season = queryObject.season ? Number(queryObject.season) : 2018;
  return queryObject;
}

export function toRaceQueryParams(query: DeepNullable<RaceQuery>) {
  const updatedQuery = cloneDeep(query);
  if (updatedQuery.season === 2018) {
    updatedQuery.season = null;
  }

  return toQueryParams(updatedQuery);
}

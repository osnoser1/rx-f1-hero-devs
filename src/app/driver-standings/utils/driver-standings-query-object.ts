import { Params } from '@angular/router';
import { cloneDeep } from 'lodash-es';
import { toQueryObject, toQueryParams } from '../../core/utils';
import { DriverStandingQuery } from '../../core/types';

export function toDriverStandingsQueryObject(params: Params) {
  const queryObject = toQueryObject(params) as DriverStandingQuery;
  queryObject.season = queryObject.season ? Number(queryObject.season) : 2018;
  queryObject.round = queryObject.round ? Number(queryObject.round) : 'last';
  return queryObject;
}

export function toDriverStandingsQueryParams(query: DriverStandingQuery) {
  const updatedQuery = cloneDeep(query);
  if (updatedQuery.season === 2018) {
    delete updatedQuery.season;
  }

  if (updatedQuery.round === 'last') {
    delete updatedQuery.round;
  }

  return toQueryParams(updatedQuery);
}

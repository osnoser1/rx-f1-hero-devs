import { Params } from '@angular/router';
import { cloneDeep } from 'lodash-es';
import { toQueryObject, toQueryParams } from '../../core/utils';
import { RaceQuery } from '../../core/types';

export function toRaceQueryObject(params: Params) {
  const queryObject = toQueryObject(params) as RaceQuery;
  queryObject.season = queryObject.season ? Number(queryObject.season) : 2018;
  return queryObject;
}

export function toRaceQueryParams(query: RaceQuery) {
  const updatedQuery = cloneDeep(query);
  if (updatedQuery.season === 2018) {
    delete updatedQuery.season;
  }

  return toQueryParams(updatedQuery);
}

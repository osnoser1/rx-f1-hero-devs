import { Params } from '@angular/router';
import { cloneDeep } from 'lodash-es';
import { toQueryObject, toQueryParams } from '../../core/utils';
import { DeepNullable, QualifyingQuery, RaceQuery } from '../../core/types';

export function toQualifyingQueryObject(params: Params) {
  const queryObject = toQueryObject(params) as QualifyingQuery;
  queryObject.season = queryObject.season ? Number(queryObject.season) : 2018;
  if (queryObject.round) {
    queryObject.round = Number(queryObject.round);
  }

  return queryObject;
}

export function toQualifyingQueryParams(query: DeepNullable<RaceQuery>) {
  const updatedQuery = cloneDeep(query);
  if (updatedQuery.season === 2018) {
    updatedQuery.season = null;
  }

  console.log(updatedQuery);

  return toQueryParams(updatedQuery);
}

import { Params } from '@angular/router';
import { cloneDeep } from 'lodash-es';
import { toQueryObject, toQueryParams } from '../../core/utils';
import { QualifyingQuery } from '../../core/types';

export function toQualifyingQueryObject(params: Params) {
  const queryObject = toQueryObject(params) as QualifyingQuery;
  queryObject.season = queryObject.season ? Number(queryObject.season) : 2018;
  queryObject.round = queryObject.round ? Number(queryObject.round) : 'all';
  return queryObject;
}

export function toQualifyingQueryParams(query: QualifyingQuery) {
  const updatedQuery = cloneDeep(query);
  if (updatedQuery.season === 2018) {
    delete updatedQuery.season;
  }

  if (updatedQuery.round === 'all') {
    delete updatedQuery.round;
  }

  return toQueryParams(updatedQuery);
}

import { Params } from '@angular/router';
import { toCamelCase } from './to-camel-case';
import { isNil, kebabCase, omitBy } from 'lodash-es';
import { QueryParamValue } from '../types';

export function toQueryObject(params: Params) {
  const queryObject = Object.entries(toCamelCase(params)).reduce(
    (obj, [key, value]) => ({
      ...obj,
      [key]: key === 'page' || key === 'limit' ? Number(value) : value,
    }),
    {} as Record<string, any>,
  );
  if (!queryObject['limit']) {
    queryObject['limit'] = 10;
  }

  return queryObject;
}

export function toQueryParams(query: Record<string, any>) {
  return Object.keys(query)
    .sort()
    .reduce(
      (obj, key) => ({
        ...obj,
        [kebabCase(key)]:
          query[key] !== '' &&
          (key !== 'page' || query[key] !== 0) &&
          (key !== 'limit' || query[key] !== 10)
            ? query[key]
            : null,
      }),
      {} as Record<string, QueryParamValue>,
    );
}

import { Params } from '@angular/router';
import { toCamelCase } from './to-camel-case';
import { isNil, kebabCase, omitBy } from 'lodash-es';
import { QueryParamValue } from '../types';

export function toQueryObject(params: Params) {
  return Object.entries(toCamelCase(params)).reduce(
    (obj, [key, value]) => ({
      ...obj,
      [key]: key === 'page' || key === 'limit' ? Number(value) : value,
    }),
    {} as Record<string, any>,
  );
}

export function toQueryParams(query: Record<string, any>) {
  query = omitBy(query, (value, key) => {
    const isOmitted =
      isNil(value) || value === '' || (key === 'page' && value === 0);

    return isOmitted;
  });

  return Object.keys(query)
    .sort()
    .reduce(
      (obj, key) => ({ ...obj, [kebabCase(key)]: query[key] }),
      {} as Record<string, QueryParamValue>,
    );
}

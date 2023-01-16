import { Params } from '@angular/router';
import { toQueryObject } from '../../core/utils';
import { DriverQuery } from '../drivers';

export function toDriverQueryObject(params: Params) {
  const queryObject = toQueryObject(params) as DriverQuery;
  if (!queryObject.limit) {
    queryObject.limit = 10;
  }

  return queryObject;
}

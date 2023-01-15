import { Params } from '@angular/router';
import { toQueryObject } from '../../core/utils';
import { DriverQuery } from '../drivers';

export function toDriverQueryObject(params: Params) {
  return toQueryObject(params) as DriverQuery;
}

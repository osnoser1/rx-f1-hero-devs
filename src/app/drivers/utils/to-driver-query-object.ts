import { Params } from '@angular/router';
import { toQueryObject } from '../../core/utils';
import { DriverQuery } from '../../core/types';

export function toDriverQueryObject(params: Params) {
  return toQueryObject(params) as DriverQuery;
}

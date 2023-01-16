import { HttpParams } from '@angular/common/http';
import { QueryParamValue } from '../types';

export function getParams(obj: Record<string, QueryParamValue>) {
  return new HttpParams({ fromObject: obj });
}

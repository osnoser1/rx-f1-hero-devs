import { PageQuery } from '../types';
import { getParams } from './http';

export function getFormulaOneParams(query: PageQuery) {
  const { page, ...rest } = query;
  const offset = (page ?? 0) * (rest.limit ?? 0);
  return getParams(offset ? { ...rest, offset } : { ...rest });
}

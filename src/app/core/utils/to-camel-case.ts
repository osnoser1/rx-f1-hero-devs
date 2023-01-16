import { camelCase, isObject } from 'lodash-es';

export const toCamelCase = <T = Record<string, any>, K = any>(obj: K): T => {
  return deepCamelCase(obj) as T;
};

function deepCamelCase<T = Record<string, any>, K = any>(
  obj: K,
): Record<string, any> | K | any[] {
  if (Array.isArray(obj)) {
    return obj.map(element => deepCamelCase(element));
  }

  if (isObject(obj)) {
    const n: Record<string, any> = {};

    Object.keys(obj).forEach(key => {
      n[camelCase(key)] = deepCamelCase((obj as any)[key]);
    });

    return n;
  }

  return obj;
}

export const isUndefined = (value: unknown): value is undefined => (
  typeof value === 'undefined'
);

export const isNotUndefined = <T>(value: T | undefined): value is T => (
  typeof value !== 'undefined'
);

export const objectIsEmpty = (object: object | undefined): boolean => (
  !object || Object.keys(object).length === 0
);

export const objectIsNotEmpty = (object: object | undefined): boolean => !objectIsEmpty(object);

export const isEmpty = (value: unknown): boolean => (
  typeof value === 'undefined' || value === null || value === '' || (Array.isArray(value) && value.length === 0) || value === -1
);

export const isNotEmpty = (value: unknown): boolean => !isEmpty(value);

export const isArray: (arg: unknown) => boolean = Array.isArray;

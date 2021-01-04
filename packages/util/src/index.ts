/* eslint-disable no-console */
const DEV = process.env.NODE_ENV !== 'production'

/**
 * Identity function.
 * @param x
 */
export const identity = <T>(x: T) => x

/**
 * Check if a value is not null and not undefined.
 * @param n
 */
export const is = <T>(n: T): n is Exclude<T, undefined | null> =>
  n !== undefined && n !== null

/**
 * Check if a value is a number.
 * @param n
 */
export const num = (n: any): n is number =>
  typeof n === 'number' && !Number.isNaN(n)

/**
 * Check if a value is a string.
 * @param n
 */
export const string = (n: any): n is Exclude<string, ''> =>
  typeof n === 'string' && n !== ''

/**
 * Check if a value is an object.
 * @param n
 */
export const obj = (n: any): n is object => typeof n === 'object' && n !== null

/**
 * Check if a value is a function.
 * @param n
 */
export const func = (n: any): n is Function => typeof n === 'function'

/**
 * Check if a value is a negative number.
 * @param n
 */
export const negative = (n: any): n is number => num(n) && n < 0

type Path = string | number

/**
 * Get a value from an object or an array.
 * @param from
 * @param path
 */
export const get = <T>(from: { [key: string]: any } | any[], path: Path): T => {
  const paths = String(path).split('.')
  const pathsLength = paths.length
  let result: any = from
  for (let i = 0; i < pathsLength; i += 1) {
    if (result === undefined) return result
    const path = paths[i]
    result = is(result[path]) ? result[path] : undefined
  }
  return result
}

/**
 * Assign object into another
 * @param a
 * @param b
 */
export const assign = <TObject, TSource>(
  a: TObject,
  b: TSource,
): TObject & TSource => {
  // @ts-ignore
  if (!is(b)) return a
  // eslint-disable-next-line no-restricted-syntax, guard-for-in
  for (const key in b) {
    // @ts-ignore
    a[key] = b[key]
  }
  // @ts-ignore
  return a
}

/**
 * Merge deeply one object into another.
 * @param a
 * @param b
 */
export const merge = <TObject, TSource>(
  a: TObject,
  b: TSource,
): TObject & TSource => {
  // @ts-ignore
  if (!is(b)) return a
  // eslint-disable-next-line no-restricted-syntax
  for (const key in b) {
    // eslint-disable-next-line no-continue
    // @ts-ignore
    if (obj(a[key])) {
      // @ts-ignore
      a[key] = merge(assign({}, a[key]), b[key])
    } else {
      // @ts-ignore
      a[key] = b[key]
    }
  }
  // @ts-ignore
  return a
}

/**
 * Warn if a condition is not met.
 * @param condition
 * @param message
 */
export const warn = (condition: boolean, message: string) => {
  if (DEV) {
    if (!condition && console.error) {
      console.error(message)
    }
  }
}

/**
 * Recursively call a function until getting something that is not a function.
 * @param value
 * @param arg
 */
export function cascade(value: any, arg?: any): Exclude<any, Function> {
  if (typeof value === 'function') {
    return cascade(value(arg), arg)
  }
  return value
}

/**
 * Get value from theme.
 * @param props
 * @param path
 * @param initial
 */
export const getThemeValue = <TProps extends { theme?: any }>(
  props: TProps,
  path: Path,
  initial = props.theme,
) => cascade(get(initial, path), props)

/**
 * Omit values from an object.
 * @param object
 * @param values
 */
export function omit<T extends object, K extends string[]>(
  object: T,
  values: K,
) {
  const result: { [key: string]: any } = {}
  // eslint-disable-next-line no-restricted-syntax
  for (const key in object) {
    if (values.indexOf(key) === -1) {
      result[key] = object[key]
    }
  }
  return result as Pick<T, Exclude<keyof T, K[number]>>
}

/* eslint-disable no-continue, no-loop-func, no-cond-assign */

/**
 * Flatten every string together in an array.
 * @param array
 */
export function flattenStrings(array: any[]): any[] {
  return array.reduce((flattenedArray, value) => {
    const lastIndex = flattenedArray.length - 1
    const last = flattenedArray[lastIndex]
    if (typeof last === 'string' && typeof value === 'string') {
      flattenedArray[lastIndex] = last + value
    } else {
      flattenedArray.push(value)
    }
    return flattenedArray
  }, [])
}

function flattenDown(array: any[], result: any[]) {
  for (let i = 0; i < array.length; i++) {
    const value = array[i]

    if (Array.isArray(value)) {
      flattenDown(value, result)
    } else {
      result.push(value)
    }
  }

  return result
}

/**
 * Flatten an array.
 * @param array
 */
export function flatten(array: any[]) {
  return flattenDown(array, [])
}

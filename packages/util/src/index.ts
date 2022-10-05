import { Props, Path } from './types'

export * from './types'

const DEV = process.env.NODE_ENV !== 'production'

const specialProperties = ['__proto__', 'constructor', 'prototype']
/**
 * Identity function.
 */
export const identity = <T>(x: T): T => x

/**
 * Check if a value is not null and not undefined.
 */
export const is = <T>(n: T): n is Exclude<T, undefined | null> =>
  n !== undefined && n !== null

/**
 * Check if a value is a number.
 */
export const num = (n: unknown): n is number =>
  typeof n === 'number' && !Number.isNaN(n)

/**
 * Check if a value is a string.
 */
export const string = (n: unknown): n is Exclude<string, ''> =>
  typeof n === 'string' && n !== ''

/**
 * Check if a value is an object.
 */
export const obj = (
  n: unknown,
): n is { [key: string]: unknown; [key: number]: unknown } =>
  typeof n === 'object' && n !== null

/**
 * Check if a value is a function.
 */
export const func = (n: unknown): n is Function => typeof n === 'function'

/**
 * Check if a value is a negative number.
 */
export const negative = (n: unknown): n is number => num(n) && n < 0

/**
 * Get a value from an object or an array.
 */
export const get = (from: unknown, path: Path): unknown => {
  const paths = String(path).split('.')
  const pathsLength = paths.length
  let result: any = from
  for (let i = 0; i < pathsLength; i += 1) {
    if (!is(result)) return result
    const path = paths[i]
    result = is(result[path]) ? result[path] : undefined
  }
  return result
}

/**
 * Assign object into another
 */
export const assign = <T, U>(target: T, source: U): T & U => {
  if (!is(source)) return target as T & U
  for (const key in source) {
    if (specialProperties.indexOf(key) !== -1) {
      continue
    }
    // @ts-ignore
    target[key] = source[key]
  }
  return target as T & U
}

/**
 * Merge deeply one object into another.
 */
export const merge = <T, U>(target: T, source: U): T & U => {
  if (!is(source)) return target as T & U
  for (const key in source) {
    if (specialProperties.indexOf(key) !== -1) {
      continue
    }
    // @ts-ignore
    if (obj(target[key])) {
      // @ts-ignore
      target[key] = merge(assign({}, target[key]), source[key])
    } else {
      // @ts-ignore
      target[key] = source[key]
    }
  }
  return target as T & U
}

/**
 * Warn if a condition is not met.
 */
export const warn = (condition: boolean, message: string): void => {
  if (DEV) {
    if (!condition && console.error) {
      console.error(message)
    }
  }
}

/**
 * Recursively call a function until getting something that is not a function.
 */
export function cascade(value: unknown, arg?: unknown): Exclude<any, Function> {
  if (typeof value === 'function') {
    return cascade(value(arg), arg)
  }
  return value
}

/**
 * Get value from theme.
 */
export const getThemeValue = <T extends Props>(
  props: T,
  path: Path,
  initial: unknown = props.theme,
): unknown => cascade(get(initial, path), props)

/**
 * Omit values from an object.
 */
export function omit<T extends { [key: string]: unknown }, K extends string[]>(
  object: T,
  values: K,
): Pick<T, Exclude<keyof T, K[number]>> {
  const result: { [key: string]: unknown } = {}
  for (const key in object) {
    if (values.indexOf(key) === -1) {
      result[key] = object[key]
    }
  }
  return result as Pick<T, Exclude<keyof T, K[number]>>
}

/**
 * Flatten every string together in an array.
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
 */
export function flatten(array: any[]): any[] {
  return flattenDown(array, [])
}

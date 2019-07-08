/* eslint-disable no-console */

const DEV = process.env.NODE_ENV !== 'production'

export const identity = x => x

export const is = n => n !== undefined && n !== null
export const num = n => typeof n === 'number' && !Number.isNaN(n)
export const string = n => typeof n === 'string' && n !== ''
export const obj = n => typeof n === 'object' && n !== null
export const func = n => typeof n === 'function'
export const negative = n => num(n) && n < 0

export const get = (from, path) => {
  const paths = String(path).split('.')
  const pathsLength = paths.length
  let result = from
  for (let i = 0; i < pathsLength; i += 1) {
    if (result === undefined) return result
    const path = paths[i]
    result = is(result[path]) ? result[path] : undefined
  }
  return result
}

export const assign = (a, b) => {
  if (!is(b)) return a
  // eslint-disable-next-line no-restricted-syntax, guard-for-in
  for (const key in b) {
    a[key] = b[key]
  }
  return a
}

export const merge = (a, b) => {
  if (!is(b)) return a
  // eslint-disable-next-line no-restricted-syntax
  for (const key in b) {
    // eslint-disable-next-line no-continue
    if (obj(a[key])) {
      a[key] = merge(assign({}, a[key]), b[key])
    } else {
      a[key] = b[key]
    }
  }
  return a
}

export const warn = (condition, message) => {
  if (DEV) {
    if (!condition && console.error) {
      console.error(message)
    }
  }
}

export const cascade = (fn, ...args) => {
  if (!func(fn)) return fn
  const next = fn(...args)
  return cascade(next, ...args)
}

export const getThemeValue = (props, path, initial = props.theme) =>
  cascade(get(initial, path), props)

export function omit(object, values) {
  const result = {}
  // eslint-disable-next-line no-restricted-syntax
  for (const key in object) {
    if (values.indexOf(key) === -1) {
      result[key] = object[key]
    }
  }
  return result
}

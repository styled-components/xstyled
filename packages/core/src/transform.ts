/* eslint-disable no-continue, no-loop-func, no-cond-assign */
import { propGetters } from './propGetters'

const PROP_REGEXP = /(\s*)([^&{}:;\n]+):\s*([^&{}:;\n]+)(\s*);/g
const IMPORTANT_REGEXP = /\s*!important\s*/

export function transform(rawValue: any) {
  if (typeof rawValue !== 'string') return rawValue
  let matches
  let lastIndex = 0
  const values = []
  while ((matches = PROP_REGEXP.exec(rawValue))) {
    const [, start, prop, propValue, end] = matches
    const getter = (propGetters as any)[prop]
    if (getter) {
      const hasImportant = IMPORTANT_REGEXP.test(propValue)
      const cleanValue = propValue.replace(IMPORTANT_REGEXP, '')
      values.push(rawValue.slice(lastIndex, matches.index))
      values.push(
        (p: object) =>
          `${start}${prop}: ${getter(cleanValue)(p)}${
            hasImportant ? ' !important' : ''
          };${end}`,
      )
      lastIndex = matches.index + matches[0].length
    }
  }
  values.push(rawValue.slice(lastIndex, rawValue.length))
  return values
}

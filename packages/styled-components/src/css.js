/* eslint-disable no-continue, no-loop-func, no-cond-assign */
import { css as scCss } from 'styled-components'
import { propGetters } from './propGetters'

const PROP_REGEXP = /(\s*)([^&{}:;\n]+):\s*([^&{}:;\n]+)(\s*);/g
const IMPORTANT_REGEXP = /\s*!important\s*/

function transform(rawValue) {
  if (typeof rawValue !== 'string') return rawValue
  let matches
  let lastIndex = 0
  const values = []
  while ((matches = PROP_REGEXP.exec(rawValue))) {
    const [, start, prop, propValue, end] = matches
    const getter = propGetters[prop]
    if (getter) {
      const hasImportant = IMPORTANT_REGEXP.test(propValue)
      const cleanValue = propValue.replace(IMPORTANT_REGEXP, '')
      values.push(rawValue.slice(lastIndex, matches.index))
      values.push(
        p =>
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

function flattenStrings(array) {
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

export function css(...rawArgs) {
  const scCssArgs = scCss(...rawArgs)
  const flattenedArgs = flattenStrings(scCssArgs)
  return flattenedArgs.map(transform)
}

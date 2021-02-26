/* eslint-disable no-continue, no-loop-func, no-cond-assign */
import { propGetters } from './propGetters'

// prop name is an ident: word chars, underscore and dash.
const PROP_CHAR = `[-\\w]`

// prop value consists of non-semis unless backslash-escaped.
const VALUE_CHAR = `(?:\\\\.|[^\\\\;])`

// prettier-ignore
const PROP_REGEXP = new RegExp(
  `(${PROP_CHAR}+)` +   // capture prop name
  `(\\s*:\\s*)` +       // colon & whitespace
  `(?=\\S)` +           // prop value starts with non-whitespace
  `(${VALUE_CHAR}*?)` + // capture prop value (non-greedy)
  `(\\s*!important)?` + // capture !important
  `(\\s*;)`,            // semi & whitespace
  `gs`,                 // flags
)

export function transform(rawValue: any) {
  if (typeof rawValue !== 'string') return rawValue
  let matches
  let lastIndex = 0
  const values = []
  while ((matches = PROP_REGEXP.exec(rawValue))) {
    const [, prop, colon, value, imp, semi] = matches
    const getter = (propGetters as any)[prop]
    if (getter) {
      values.push(rawValue.slice(lastIndex, matches.index))
      values.push(
        (p: object) => `${prop}${colon}${getter(value)(p)}${imp || ''}${semi}`,
      )
      lastIndex = matches.index + matches[0].length
    }
  }
  values.push(rawValue.slice(lastIndex, rawValue.length))
  return values
}

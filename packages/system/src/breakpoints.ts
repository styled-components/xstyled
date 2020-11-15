import {
  getBreakpoints,
  getBreakpointMin,
  getBreakpointMax,
  mediaMinWidth,
  mediaMaxWidth,
  mediaBetweenWidth,
} from './media'
import { Props } from './types'

export const up = (key: string | number, rules: any) => (props: Props) => {
  const breakpoints = getBreakpoints(props)
  const value = getBreakpointMin(breakpoints, key)
  if (value === null) return rules
  return [`${mediaMinWidth(value)} {`, rules, '}']
}

export const down = (key: string | number, rules: any) => (props: Props) => {
  const breakpoints = getBreakpoints(props)
  const value = getBreakpointMax(breakpoints, key)
  if (value === null) return null
  return [`${mediaMaxWidth(value)} {`, rules, '}']
}

export const between = (
  lower: string | number,
  upper: string | number,
  rules: any,
) => (props: Props) => {
  const breakpoints = getBreakpoints(props)
  const min = getBreakpointMin(breakpoints, lower)
  const max = getBreakpointMax(breakpoints, upper)

  if (max === null) return up(lower, rules)(props)
  if (min === null) return down(upper, rules)(props)
  return [`${mediaBetweenWidth(min, max)} {`, rules, '}']
}

export const breakpoints = (values: { [key: string]: any }) => (
  props: Props,
) => {
  const allRules = []
  const keys = Object.keys(values)
  const keysLength = keys.length
  for (let i = 0; i < keysLength; i++) {
    const key = keys[i]
    const rules = values[key]
    const result = up(key, rules)(props)
    if (Array.isArray(result)) {
      result.forEach((v) => allRules.push(v))
    } else {
      allRules.push(result)
    }
  }
  return allRules
}

import {
  getBreakpointMin,
  getBreakpointMax,
  mediaMinWidth,
  mediaMaxWidth,
  mediaBetweenWidth,
} from './media'
import { getScreens } from './theme'
import { Props } from './types'

export const up = <T>(key: string | number, rules: T) => (
  props: Props,
): T | (string | T)[] => {
  const screens = getScreens(props)
  const value = getBreakpointMin(screens, key)
  if (value === null) return rules
  return [`${mediaMinWidth(value)} {`, rules, '}']
}

export const down = <T>(key: string | number, rules: T) => (
  props: Props,
): null | (string | T)[] => {
  const screens = getScreens(props)
  const value = getBreakpointMax(screens, key)
  if (value === null) return null
  return [`${mediaMaxWidth(value)} {`, rules, '}']
}

export const between = <T>(
  lower: string | number,
  upper: string | number,
  rules: T,
) => (props: Props): T | (string | T)[] | null => {
  const screens = getScreens(props)
  const min = getBreakpointMin(screens, lower)
  const max = getBreakpointMax(screens, upper)

  if (max === null) return up(lower, rules)(props)
  if (min === null) return down(upper, rules)(props)
  return [`${mediaBetweenWidth(min, max)} {`, rules, '}']
}

export const breakpoints = <T>(values: {
  [key: string]: T
  [key: number]: T
}) => (props: Props): T[] => {
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

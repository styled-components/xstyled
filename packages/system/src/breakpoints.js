import {
  getBreakpoints,
  getBreakpointMin,
  getBreakpointMax,
  mediaMinWidth,
  mediaMaxWidth,
  mediaBetweenWidth,
} from './media'

export const up = (key, rules) => props => {
  const breakpoints = getBreakpoints(props)
  const value = getBreakpointMin(breakpoints, key)
  if (value === null) return rules
  return [`${mediaMinWidth(value)} {`, rules, '}']
}

export const down = (key, rules) => props => {
  const breakpoints = getBreakpoints(props)
  const value = getBreakpointMax(breakpoints, key)
  if (value === null) return null
  return [`${mediaMaxWidth(value)} {`, rules, '}']
}

export const between = (lower, upper, rules) => props => {
  const breakpoints = getBreakpoints(props)
  const min = getBreakpointMin(breakpoints, lower)
  const max = getBreakpointMax(breakpoints, upper)

  if (min !== null && max !== null) {
    return [`${mediaBetweenWidth(min, max)} {`, rules, '}']
  }
  if (max === null) return up(lower, rules)(props)
  if (min === null) return down(upper, rules)(props)
  return null
}

export const breakpoints = values => props => {
  const allRules = []
  const keys = Object.keys(values)
  const keysLength = keys.length
  for (let i = 0; i < keysLength; i++) {
    const key = keys[i]
    const rules = values[key]
    const result = up(key, rules)(props)
    if (Array.isArray(result)) {
      result.forEach(v => allRules.push(v))
    } else {
      allRules.push(result)
    }
  }
  return allRules
}

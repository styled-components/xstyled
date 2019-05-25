import { is, getThemeValue } from './util'
import { px } from './unit'

const DEFAULT_BREAKPOINTS = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
}

export function getBreakpoints(props) {
  const themeBreakpoints = getThemeValue(props, 'breakpoints')
  if (is(themeBreakpoints)) return themeBreakpoints
  return DEFAULT_BREAKPOINTS
}

export const mediaMinWidth = value => `@media (min-width: ${value})`
export const mediaMaxWidth = value => `@media (max-width: ${value})`
export const mediaBetweenWidth = (min, max) =>
  `@media (min-width: ${min}) and (max-width: ${max})`

/**
 * Minimum breakpoint width.
 * Null for the smallest breakpoint.
 */
export const getBreakpointMin = (breakpoints, key) => {
  const value = breakpoints[key]
  return value === 0 ? null : px(value)
}

/**
 * Maximum breakpoint width. Null for the largest (last) breakpoint.
 * The maximum value is calculated as the minimum of the next one less 0.02px
 * to work around the limitations of `min-` and `max-` prefixes and viewports with fractional widths.
 * See https://www.w3.org/TR/mediaqueries-4/#mq-min-max
 * Uses 0.02px rather than 0.01px to work around a current rounding bug in Safari.
 * See https://bugs.webkit.org/show_bug.cgi?id=178261
 */
export const getBreakpointMax = (breakpoints, key) => {
  const breakPoint = breakpoints[key]
  return breakPoint === 0 ? null : px(breakPoint - 0.02)
}

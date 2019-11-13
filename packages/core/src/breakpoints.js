/* eslint-disable no-undef */
import React from 'react'
import { getBreakpoints } from '@xstyled/system'

export function useThemeBreakpoints(theme) {
  return getBreakpoints({ theme })
}

/**
 * Minimum breakpoint width.
 * Null for the smallest breakpoint.
 */
function useThemeMinValue(theme, key) {
  const breakpoints = useThemeBreakpoints(theme)
  const value = breakpoints[key]
  return value === 0 ? null : value
}

/**
 * Maximum breakpoint width. Null for the largest (last) breakpoint.
 * The maximum value is calculated as the minimum of the next one less 0.02px
 * to work around the limitations of `min-` and `max-` prefixes and viewports with fractional widths.
 * See https://www.w3.org/TR/mediaqueries-4/#mq-min-max
 * Uses 0.02px rather than 0.01px to work around a current rounding bug in Safari.
 * See https://bugs.webkit.org/show_bug.cgi?id=178261
 */
function useThemeMaxValue(theme, key) {
  const breakpoints = useThemeBreakpoints(theme)
  const breakPoint = breakpoints[key]
  return breakPoint === 0 ? null : breakPoint - 0.02
}

export function useViewportWidth() {
  const [width, setWidth] = React.useState(null)

  React.useLayoutEffect(() => {
    setWidth(window.innerWidth)

    function handleResize() {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return width
}

export function useThemeBreakpoint(theme) {
  const breakpoints = useThemeBreakpoints(theme)
  const width = useViewportWidth()
  return React.useMemo(() => {
    return (
      Object.keys(breakpoints)
        .reverse()
        .find(breakpoint => width > breakpoints[breakpoint]) || null
    )
  }, [breakpoints, width])
}

export function useThemeUp(theme, key) {
  const value = useThemeMinValue(theme, key)
  const width = useViewportWidth()
  return width > value
}

export function useThemeDown(theme, key) {
  const value = useThemeMaxValue(theme, key)
  const width = useViewportWidth()
  return width < value
}

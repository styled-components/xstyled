/* eslint-disable no-undef */
import * as React from 'react'
import { getScreens, ITheme, Screens } from '@xstyled/system'

export function useThemeScreens(theme: ITheme): Screens {
  return getScreens({ theme })
}

/**
 * Minimum breakpoint width.
 * Null for the smallest breakpoint.
 */
function useThemeMinValue(theme: ITheme, key: string | number): number | null {
  const screens = useThemeScreens(theme)
  const value = screens[key]
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
function useThemeMaxValue(theme: ITheme, key: string | number): number | null {
  const screens = useThemeScreens(theme)
  const breakPoint = screens[key]
  return breakPoint === 0 ? null : breakPoint - 0.02
}

export function useViewportWidth(): number | null {
  const [width, setWidth] = React.useState(
    typeof window === 'undefined' ? null : window.innerWidth,
  )

  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }

    // Add the listener, then setWidth to avoid race.
    window.addEventListener('resize', handleResize)
    setWidth(window.innerWidth)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return width
}

export function useThemeBreakpoint(theme: ITheme): string | null {
  const screns = useThemeScreens(theme)
  const width = useViewportWidth()
  return React.useMemo(() => {
    return (
      Object.keys(screns)
        .reverse()
        .find((screen) => width !== null && width > screns[screen]) || null
    )
  }, [screns, width])
}

export function useThemeUp(theme: ITheme, key: string | number): boolean {
  const value = useThemeMinValue(theme, key)
  const width = useViewportWidth()
  return width !== null && value !== null && width >= value
}

export function useThemeDown(theme: ITheme, key: string | number): boolean {
  const value = useThemeMaxValue(theme, key)
  const width = useViewportWidth()
  return width !== null && value !== null && width < value
}

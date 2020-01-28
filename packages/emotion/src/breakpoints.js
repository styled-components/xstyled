import {
  useThemeBreakpoints,
  useThemeBreakpoint,
  useThemeUp,
  useThemeDown,
} from '@xstyled/core'
import { useTheme } from '@emotion/react'

export { useViewportWidth } from '@xstyled/core'

export function useBreakpoints() {
  return useThemeBreakpoints(useTheme())
}

export function useBreakpoint() {
  return useThemeBreakpoint(useTheme())
}

export function useUp(key) {
  return useThemeUp(useTheme(), key)
}

export function useDown(key) {
  return useThemeDown(useTheme(), key)
}

import {
  useThemeBreakpoints,
  useThemeBreakpoint,
  useThemeUp,
  useThemeDown,
} from '@xstyled/core'
import { useTheme } from 'emotion-theming'

export { useViewportWidth } from '@xstyled/core'

export function useBreakpoints() {
  return useThemeBreakpoints(useTheme())
}

export function useBreakpoint() {
  return useThemeBreakpoint(useTheme())
}

export function useUp(key: string | number) {
  return useThemeUp(useTheme(), key)
}

export function useDown(key: string | number) {
  return useThemeDown(useTheme(), key)
}

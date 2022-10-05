import { getScreens, getBreakpointMin, getBreakpointMax } from '@xstyled/system'

const getMediaWidth =
  (getBreakpointBound: any) => (value: any) => (props: any) => {
    const v = getBreakpointBound(getScreens(props), value)
    // getters return null for smallest, undefined for not found, and otherwise
    // a px string. Since we MUST emit a matcher at this point, use 0px for the
    // smallest case (always true for min, never true for max).
    return v === null ? '0' : v || value
  }

export const mediaGetters = {
  'min-width': getMediaWidth(getBreakpointMin),
  'max-width': getMediaWidth(getBreakpointMax),
}

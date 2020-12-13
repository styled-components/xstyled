import { is, getThemeValue } from '@xstyled/util'
import {
  getColor,
  getPx,
  getPercent,
  getRadius,
  getBorder,
  getBorderWidth,
  getBorderStyle,
  getBorderColor,
  getShadow,
  getSize,
  getZIndex,
  getSpace,
  getFont,
  getFontSize,
  getLineHeight,
  getFontWeight,
  getLetterSpacing,
  getTransition,
  getInset,
  getAnimation,
  getTimingFunction,
  getTransform,
  getTransitionProperty,
} from './styles/index'
import { Props, ThemeGetter } from './types'

interface ThemeGet {
  (path: string, defaultValue?: any): (props: Props) => any
  [key: string]: ThemeGetter<any, any>
}

export const th = <ThemeGet>((path: string, defaultValue?: string) => (
  props: Props,
) => {
  const value = getThemeValue(props, path)
  if (is(value)) return value
  if (is(defaultValue)) return defaultValue
  return path
})
;[
  getColor,
  getPx,
  getPercent,
  getRadius,
  getBorder,
  getBorderWidth,
  getBorderStyle,
  getBorderColor,
  getShadow,
  getSize,
  getZIndex,
  getSpace,
  getFont,
  getFontSize,
  getLineHeight,
  getFontWeight,
  getLetterSpacing,
  getTransition,
  getInset,
  getAnimation,
  getTimingFunction,
  getTransform,
  getTransitionProperty,
].forEach((themeGetter) => {
  if (themeGetter.meta.name) {
    th[themeGetter.meta.name] = themeGetter
  }
})

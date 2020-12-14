import { is, getThemeValue } from '@xstyled/util'
import {
  getAngle,
  getAnimation,
  getBorder,
  getBorderColor,
  getBorderStyle,
  getBorderWidth,
  getColor,
  getDuration,
  getFont,
  getFontSize,
  getFontWeight,
  getInset,
  getLetterSpacing,
  getLineHeight,
  getPercent,
  getPx,
  getRadius,
  getRingWidth,
  getShadow,
  getSize,
  getSpace,
  getTimingFunction,
  getTransform,
  getTransition,
  getTransitionProperty,
  getZIndex,
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
  getAngle,
  getAnimation,
  getBorder,
  getBorderColor,
  getBorderStyle,
  getBorderWidth,
  getColor,
  getDuration,
  getFont,
  getFontSize,
  getFontWeight,
  getInset,
  getLetterSpacing,
  getLineHeight,
  getPercent,
  getPx,
  getRadius,
  getRingWidth,
  getShadow,
  getSize,
  getSpace,
  getTimingFunction,
  getTransform,
  getTransition,
  getTransitionProperty,
  getZIndex,
].forEach(themeGetter => {
  if (themeGetter.meta.name) {
    th[themeGetter.meta.name] = themeGetter
  }
})

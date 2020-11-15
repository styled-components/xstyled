import { is, warn, getThemeValue } from '@xstyled/util'
import {
  getColor,
  getPx,
  getPercent,
  getRadius,
  getBorder,
  getBorderWidth,
  getBorderStyle,
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
} from './styles/index'
import { Props, ThemeGetter } from './types'

interface ThemeGet {
  (path: string): (props: Props) => any
  [key: string]: ThemeGetter<any, any>
}

export const th = <ThemeGet>((path: string) => (props: Props) => {
  const value = getThemeValue(props, path)
  warn(is(value), `value "${path}" not found in theme`)
  return value
})
;[
  getColor,
  getPx,
  getPercent,
  getRadius,
  getBorder,
  getBorderWidth,
  getBorderStyle,
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
].forEach((themeGetter) => {
  if (themeGetter.meta.name) {
    th[themeGetter.meta.name] = themeGetter
  }
})

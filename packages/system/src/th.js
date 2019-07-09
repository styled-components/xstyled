import { is, warn, getThemeValue } from './util'
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

export const th = path => props => {
  const value = getThemeValue(props, path)
  warn(is(value), `value "${path}" not found in theme`)
  return value
}
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
].forEach(themeGetter => {
  th[themeGetter.meta.name] = themeGetter
})

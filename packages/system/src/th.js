import { is, warn, getThemeValue } from './util'
import {
  getColor,
  getPx,
  getPercent,
  getRadius,
  getBorder,
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

th.color = getColor
th.px = getPx
th.percent = getPercent
th.radius = getRadius
th.border = getBorder
th.borderStyle = getBorderStyle
th.shadow = getShadow
th.size = getSize
th.zIndex = getZIndex
th.space = getSpace
th.font = getFont
th.fontSize = getFontSize
th.lineHeight = getLineHeight
th.fontWeight = getFontWeight
th.letterSpacing = getLetterSpacing
th.transition = getTransition

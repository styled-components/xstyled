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
import { ThemeGetter } from './types'

interface ThGetters {
  angle: typeof getAngle
  animation: typeof getAnimation
  border: typeof getBorder
  borderColor: typeof getBorderColor
  borderStyle: typeof getBorderStyle
  borderWidth: typeof getBorderWidth
  color: typeof getColor
  duration: typeof getDuration
  font: typeof getFont
  fontSize: typeof getFontSize
  fontWeight: typeof getFontWeight
  inset: typeof getInset
  letterSpacing: typeof getLetterSpacing
  lineHeight: typeof getLineHeight
  percent: typeof getPercent
  px: typeof getPx
  radius: typeof getRadius
  ringWidth: typeof getRingWidth
  shadow: typeof getShadow
  size: typeof getSize
  space: typeof getSpace
  timingFunction: typeof getTimingFunction
  transform: typeof getTransform
  transition: typeof getTransition
  transitionProperty: typeof getTransitionProperty
  zIndex: typeof getZIndex
}
interface Th extends ThemeGetter, ThGetters {}

export const th = <Th>((path, defaultValue?) => (props) => {
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
].forEach((themeGetter) => {
  // @ts-ignore
  th[themeGetter.meta.name] = themeGetter
})

import * as CSS from 'csstype'
import { style, themeGetter, compose } from '../style'
import { SystemProp, ITheme, Theme, VariantsType } from '../types'

// Getters

export type ShadowGetter<T extends ITheme = Theme> = VariantsType<T['shadows']>
export const getShadow = themeGetter<ShadowGetter>({
  name: 'shadow',
  key: 'shadows',
})

// Style

type OpacityProp<T> = SystemProp<CSS.Property.Opacity, T>
export interface OpacityProps<T extends ITheme = Theme> {
  opacity?: OpacityProp<T>
  motionSafeOpacity?: OpacityProp<T>
  motionReduceOpacity?: OpacityProp<T>
  firstOpacity?: OpacityProp<T>
  lastOpacity?: OpacityProp<T>
  oddOpacity?: OpacityProp<T>
  evenOpacity?: OpacityProp<T>
  visitedOpacity?: OpacityProp<T>
  checkedOpacity?: OpacityProp<T>
  focusWithinOpacity?: OpacityProp<T>
  hoverOpacity?: OpacityProp<T>
  focusOpacity?: OpacityProp<T>
  focusVisibleOpacity?: OpacityProp<T>
  activeOpacity?: OpacityProp<T>
  disabledOpacity?: OpacityProp<T>
  placeholderOpacity?: OpacityProp<T>
}
export const opacity = style({
  prop: 'opacity',
})

type BoxShadowProp<T> = SystemProp<ShadowGetter<T> | CSS.Property.BoxShadow, T>
export interface BoxShadowProps<T extends ITheme = Theme> {
  boxShadow?: BoxShadowProp<T>
  motionSafeBoxShadow?: BoxShadowProp<T>
  motionReduceBoxShadow?: BoxShadowProp<T>
  firstBoxShadow?: BoxShadowProp<T>
  lastBoxShadow?: BoxShadowProp<T>
  oddBoxShadow?: BoxShadowProp<T>
  evenBoxShadow?: BoxShadowProp<T>
  visitedBoxShadow?: BoxShadowProp<T>
  checkedBoxShadow?: BoxShadowProp<T>
  focusWithinBoxShadow?: BoxShadowProp<T>
  hoverBoxShadow?: BoxShadowProp<T>
  focusBoxShadow?: BoxShadowProp<T>
  focusVisibleBoxShadow?: BoxShadowProp<T>
  activeBoxShadow?: BoxShadowProp<T>
  disabledBoxShadow?: BoxShadowProp<T>
  placeholderBoxShadow?: BoxShadowProp<T>
}
export const boxShadow = style({
  prop: 'boxShadow',
  themeGet: getShadow,
  cssProperty: value => ({
    '--x-shadow': value,
    boxShadow: 'var(--x-ring-shadow, 0 0 #0000), var(--x-shadow)',
  }),
})

type TextShadowProp<T> = SystemProp<
  ShadowGetter<T> | CSS.Property.TextShadow,
  T
>
export interface TextShadowProps<T extends ITheme = Theme> {
  boxShadow?: TextShadowProp<T>
  motionSafeTextShadow?: TextShadowProp<T>
  motionReduceTextShadow?: TextShadowProp<T>
  firstTextShadow?: TextShadowProp<T>
  lastTextShadow?: TextShadowProp<T>
  oddTextShadow?: TextShadowProp<T>
  evenTextShadow?: TextShadowProp<T>
  visitedTextShadow?: TextShadowProp<T>
  checkedTextShadow?: TextShadowProp<T>
  focusWithinTextShadow?: TextShadowProp<T>
  hoverTextShadow?: TextShadowProp<T>
  focusTextShadow?: TextShadowProp<T>
  focusVisibleTextShadow?: TextShadowProp<T>
  activeTextShadow?: TextShadowProp<T>
  disabledTextShadow?: TextShadowProp<T>
  placeholderTextShadow?: TextShadowProp<T>
}
export const textShadow = style({
  prop: 'textShadow',
  themeGet: getShadow,
})

export type EffectsProps<T extends ITheme = Theme> = OpacityProps<T> &
  BoxShadowProps<T> &
  TextShadowProps<T>
export const effects = compose(opacity, boxShadow, textShadow)

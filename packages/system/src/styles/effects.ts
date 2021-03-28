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

type OpacityProp<T extends ITheme> = SystemProp<CSS.Property.Opacity, T>
export interface OpacityProps<T extends ITheme = Theme> {
  opacity?: OpacityProp<T>
}
export const opacity = style({
  prop: 'opacity',
})

type BoxShadowProp<T extends ITheme> = SystemProp<
  ShadowGetter<T> | CSS.Property.BoxShadow,
  T
>
export interface BoxShadowProps<T extends ITheme = Theme> {
  boxShadow?: BoxShadowProp<T>
}
export const boxShadow = style({
  prop: 'boxShadow',
  themeGet: getShadow,
  cssProperty: (value) => ({
    '--x-shadow': value,
    boxShadow: 'var(--x-ring-shadow, 0 0 #0000), var(--x-shadow)',
  }),
})

type TextShadowProp<T extends ITheme> = SystemProp<
  ShadowGetter<T> | CSS.Property.TextShadow,
  T
>
export interface TextShadowProps<T extends ITheme = Theme> {
  boxShadow?: TextShadowProp<T>
}
export const textShadow = style({
  prop: 'textShadow',
  themeGet: getShadow,
})

export interface EffectsProps<T extends ITheme = Theme>
  extends OpacityProps<T>,
    BoxShadowProps<T>,
    TextShadowProps<T> {}
export const effects = compose(opacity, boxShadow, textShadow)

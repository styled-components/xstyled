import * as CSS from 'csstype'
import { style, themeGetter, compose } from '../style'
import { SystemProp, ITheme, Theme, ThemeNamespaceValue } from '../types'

// Getters

export type ThemeShadow<T extends ITheme = Theme> = ThemeNamespaceValue<
  'shadows',
  T
>
export const getShadow = themeGetter<ThemeShadow>({
  name: 'shadow',
  key: 'shadows',
  multiple: true,
})

// Style

export interface OpacityProps<T extends ITheme = Theme> {
  opacity?: SystemProp<CSS.Property.Opacity, T>
}
export const opacity = style<OpacityProps>({
  prop: 'opacity',
})

export interface BoxShadowProps<T extends ITheme = Theme> {
  boxShadow?: SystemProp<ThemeShadow<T> | CSS.Property.BoxShadow, T>
}
export const boxShadow = style<BoxShadowProps>({
  prop: 'boxShadow',
  themeGet: getShadow,
  css: (value) => ({
    '--x-shadow': value,
    boxShadow: 'var(--x-ring-shadow, 0 0 #0000), var(--x-shadow)',
  }),
})

export interface TextShadowProps<T extends ITheme = Theme> {
  textShadow?: SystemProp<ThemeShadow<T> | CSS.Property.TextShadow, T>
}
export const textShadow = style<TextShadowProps>({
  prop: 'textShadow',
  themeGet: getShadow,
})

export interface EffectsProps<T extends ITheme = Theme>
  extends OpacityProps<T>,
    BoxShadowProps<T>,
    TextShadowProps<T> {}
export const effects = compose<EffectsProps>(opacity, boxShadow, textShadow)

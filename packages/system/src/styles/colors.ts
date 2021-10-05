import * as CSS from 'csstype'
import { themeGetter } from '../style'
import { ThemeNamespaceValue, ITheme, Theme } from '../types'

export type ThemeColor<T extends ITheme = Theme> = ThemeNamespaceValue<
  'colors',
  T
>
export type Color<T extends ITheme = Theme> = ThemeColor<T> | CSS.Property.Color
export const getColor = themeGetter<ThemeColor>({
  name: 'color',
  key: 'colors',
})

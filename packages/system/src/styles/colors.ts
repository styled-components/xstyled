import * as CSS from 'csstype'
import { themeGetter } from '../style'
import { SystemProp, ThemeNamespaceValue, ITheme, Theme } from '../types'

export type ThemeColor<T extends ITheme = Theme> = ThemeNamespaceValue<
  'colors',
  T
>
export type Color<T extends ITheme = Theme> = SystemProp<ThemeColor<T> | CSS.Property.Color, T>;
export const getColor = themeGetter<ThemeColor>({
  name: 'color',
  key: 'colors',
})

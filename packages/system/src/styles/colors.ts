import * as CSS from 'csstype'
import { themeGetter } from '../style'
import { SynthesizedPath, ITheme, Theme } from '../types'

export type ThemeColor<T extends ITheme = Theme> = SynthesizedPath<T['colors']>
export type Color<T extends ITheme = Theme> = ThemeColor<T> | CSS.Property.Color
export const getColor = themeGetter<ThemeColor>({
  name: 'color',
  key: 'colors',
})

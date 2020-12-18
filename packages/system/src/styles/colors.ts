import { themeGetter } from '../style'
import { VariantsType, ITheme, Theme } from '../types'

export type ColorGetter<T extends ITheme = Theme> = VariantsType<T['colors']>
export const getColor = themeGetter<ColorGetter>({
  name: 'color',
  key: 'colors',
})

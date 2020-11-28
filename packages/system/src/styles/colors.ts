import { themeGetter } from '../style'
import { VariantsType, ExtractThemeProperty } from '../types'

export type ColorGetter<T = {}> = VariantsType<
  ExtractThemeProperty<T, 'colors'>
>
export const getColor = themeGetter({
  name: 'color',
  key: 'colors',
})

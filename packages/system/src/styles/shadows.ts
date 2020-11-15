import * as CSS from 'csstype'
import { style, themeGetter, compose } from '../style'
import { SystemProperty, VariantsType, ExtractThemeProperty } from '../types'

// Getters

export type ShadowGetter<T = {}> = VariantsType<
  ExtractThemeProperty<T, 'shadows'>
>

export const getShadow = themeGetter({
  name: 'shadow',
  key: 'shadows',
})

// Style

export interface BoxShadowProps<T = {}> {
  boxShadow?: SystemProperty<ShadowGetter<T> | CSS.Property.BoxShadow, T>
}
export const boxShadow = style<BoxShadowProps>({
  prop: 'boxShadow',
  themeGet: getShadow,
})

export interface TextShadowProps<T = {}> {
  textShadow?: SystemProperty<ShadowGetter<T> | CSS.Property.TextShadow, T>
}
export const textShadow = style<TextShadowProps>({
  prop: 'textShadow',
  themeGet: getShadow,
})

export type ShadowsProps<T = {}> = BoxShadowProps<T> & TextShadowProps<T>
export const shadows = compose<ShadowsProps>(boxShadow, textShadow)

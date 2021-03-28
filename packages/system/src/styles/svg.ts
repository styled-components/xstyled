import * as CSS from 'csstype'
import { style, compose } from '../style'
import { getColor, ColorGetter } from './colors'
import { SystemProp, Theme, ITheme } from '../types'

type FillProp<T extends ITheme = Theme> = SystemProp<
  ColorGetter<T> | CSS.Property.Fill,
  T
>
export interface FillProps<T extends ITheme = Theme> {
  fill?: FillProp<T>
}
export const fill = style({
  prop: 'fill',
  themeGet: getColor,
})

type StrokeProp<T extends ITheme = Theme> = SystemProp<
  ColorGetter<T> | CSS.Property.Stroke,
  T
>
export interface StrokeProps<T extends ITheme = Theme> {
  stroke?: StrokeProp<T>
}
export const stroke = style({
  prop: 'stroke',
  themeGet: getColor,
})

export interface SvgProps<T extends ITheme = Theme>
  extends FillProps<T>,
    StrokeProps<T> {}
export const svg = compose(fill, stroke)

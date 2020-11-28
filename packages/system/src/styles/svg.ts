import * as CSS from 'csstype'
import { style, compose } from '../style'
import { getColor, ColorGetter } from './basics'
import { SystemProperty } from '../types'

type Fill<T = {}> = ColorGetter<T> | CSS.Property.Fill
export interface FillProps<T = {}> {
  fill?: SystemProperty<Fill, T>
}
export const fill = style<FillProps>({
  prop: 'fill',
  themeGet: getColor,
})

type Stroke<T = {}> = ColorGetter<T> | CSS.Property.Stroke
export interface StrokeProps<T = {}> {
  stroke?: SystemProperty<Stroke, T>
}
export const stroke = style<StrokeProps>({
  prop: 'stroke',
  themeGet: getColor,
})

export type SvgProps<T = {}> = FillProps<T> & StrokeProps<T>
export const svg = compose<SvgProps>(fill, stroke)

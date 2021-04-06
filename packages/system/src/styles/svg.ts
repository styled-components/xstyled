import * as CSS from 'csstype'
import { style, compose } from '../style'
import { getColor, ThemeColor } from './colors'
import { SystemProp, Theme, ITheme } from '../types'

export interface FillProps<T extends ITheme = Theme> {
  fill?: SystemProp<ThemeColor<T> | CSS.Property.Fill, T>
}
export const fill = style<FillProps>({
  prop: 'fill',
  themeGet: getColor,
})

export interface StrokeProps<T extends ITheme = Theme> {
  stroke?: SystemProp<ThemeColor<T> | CSS.Property.Stroke, T>
}
export const stroke = style<StrokeProps>({
  prop: 'stroke',
  themeGet: getColor,
})

export interface SvgProps<T extends ITheme = Theme>
  extends FillProps<T>,
    StrokeProps<T> {}
export const svg = compose<SvgProps>(fill, stroke)

import * as CSS from 'csstype'
import { style, compose } from '../style'
import { getColor, ColorGetter } from './colors'
import { SystemProp, Theme, ITheme } from '../types'

type FillProp<T extends ITheme = Theme> = SystemProp<
  ColorGetter<T> | CSS.Property.Fill,
  T
>
export interface FillProps<T = {}> {
  fill?: FillProp<T>
  motionSafeFill?: FillProp<T>
  motionReduceFill?: FillProp<T>
  firstFill?: FillProp<T>
  lastFill?: FillProp<T>
  oddFill?: FillProp<T>
  evenFill?: FillProp<T>
  visitedFill?: FillProp<T>
  checkedFill?: FillProp<T>
  focusWithinFill?: FillProp<T>
  hoverFill?: FillProp<T>
  focusFill?: FillProp<T>
  focusVisibleFill?: FillProp<T>
  activeFill?: FillProp<T>
  disabledFill?: FillProp<T>
  placeholderFill?: FillProp<T>
}
export const fill = style({
  prop: 'fill',
  themeGet: getColor,
})

type StrokeProp<T extends ITheme = Theme> = SystemProp<
  ColorGetter<T> | CSS.Property.Stroke,
  T
>
export interface StrokeProps<T = {}> {
  stroke?: StrokeProp<T>
  motionSafeStroke?: StrokeProp<T>
  motionReduceStroke?: StrokeProp<T>
  firstStroke?: StrokeProp<T>
  lastStroke?: StrokeProp<T>
  oddStroke?: StrokeProp<T>
  evenStroke?: StrokeProp<T>
  visitedStroke?: StrokeProp<T>
  checkedStroke?: StrokeProp<T>
  focusWithinStroke?: StrokeProp<T>
  hoverStroke?: StrokeProp<T>
  focusStroke?: StrokeProp<T>
  focusVisibleStroke?: StrokeProp<T>
  activeStroke?: StrokeProp<T>
  disabledStroke?: StrokeProp<T>
  placeholderStroke?: StrokeProp<T>
}
export const stroke = style({
  prop: 'stroke',
  themeGet: getColor,
})

export type SvgProps<T extends ITheme = Theme> = FillProps<T> & StrokeProps<T>
export const svg = compose(fill, stroke)

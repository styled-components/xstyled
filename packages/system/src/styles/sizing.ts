import * as CSS from 'csstype'
import { style, themeGetter, compose } from '../style'
import { getPercent } from './units'
import { SystemProp, VariantsType, ITheme, Theme } from '../types'

// Getters

export type SizeGetter<T extends ITheme = Theme> = VariantsType<T['sizes']>
export const getSize = themeGetter({
  name: 'size',
  key: 'sizes',
  compose: getPercent,
})

// Styles

type WidthProp<T extends ITheme> = SystemProp<
  SizeGetter<T> | CSS.Property.Width,
  T
>
export interface WidthProps<T extends ITheme = Theme> {
  w?: WidthProp<T>
}
export const width = style({
  prop: 'w',
  cssProperty: 'width',
  themeGet: getSize,
})

type HeightProp<T extends ITheme> = SystemProp<
  SizeGetter<T> | CSS.Property.Height,
  T
>
export interface HeightProps<T extends ITheme = Theme> {
  h?: HeightProp<T>
}
export const height = style({
  prop: 'h',
  cssProperty: 'height',
  themeGet: getSize,
})

type MaxWidthProp<T extends ITheme> = SystemProp<
  SizeGetter<T> | CSS.Property.MaxWidth,
  T
>
export interface MaxWidthProps<T extends ITheme = Theme> {
  maxWidth?: MaxWidthProp<T>
  maxW?: MaxWidthProp<T>
}
export const maxWidth = style({
  prop: ['maxWidth', 'maxW'],
  themeGet: getSize,
})

type MaxHeightProp<T extends ITheme> = SystemProp<
  SizeGetter<T> | CSS.Property.MaxHeight,
  T
>
export interface MaxHeightProps<T extends ITheme = Theme> {
  maxHeight?: MaxHeightProp<T>
  maxH?: MaxWidthProp<T>
}
export const maxHeight = style({
  prop: ['maxHeight', 'maxH'],
  themeGet: getSize,
})

type MinWidthProp<T extends ITheme> = SystemProp<
  SizeGetter<T> | CSS.Property.MinWidth,
  T
>
export interface MinWidthProps<T extends ITheme = Theme> {
  minWidth?: MinWidthProp<T>
  minW?: MaxWidthProp<T>
}
export const minWidth = style({
  prop: ['minWidth', 'minW'],
  themeGet: getSize,
})

type MinHeightProp<T extends ITheme> = SystemProp<
  SizeGetter<T> | CSS.Property.MinHeight,
  T
>
export interface MinHeightProps<T extends ITheme = Theme> {
  minHeight?: MinHeightProp<T>
  minH?: MaxWidthProp<T>
}
export const minHeight = style({
  prop: ['minHeight', 'minH'],
  themeGet: getSize,
})

export interface SizingProps<T extends ITheme = Theme>
  extends WidthProps<T>,
    HeightProps<T>,
    MaxWidthProps<T>,
    MaxHeightProps<T>,
    MinWidthProps<T>,
    MinHeightProps<T> {}
export const sizing = compose(
  width,
  height,
  maxWidth,
  maxHeight,
  minWidth,
  minHeight,
)

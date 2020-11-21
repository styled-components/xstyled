import * as CSS from 'csstype'
import { style, themeGetter, compose } from '../style'
import { getPercent } from './basics'
import { SystemProperty, VariantsType, ExtractThemeProperty } from '../types'

// Getters

export type SizeGetter<T = {}> = VariantsType<ExtractThemeProperty<T, 'sizes'>>
export const getSize = themeGetter({
  name: 'size',
  key: 'sizes',
  compose: getPercent,
})

// Styles

export interface DisplayProps<T = {}> {
  display?: SystemProperty<CSS.Property.Display, T>
}
export const display = style<DisplayProps>({
  prop: 'display',
})

export interface WidthProps<T = {}> {
  width?: SystemProperty<SizeGetter<T> | CSS.Property.Width, T>
}
export const width = style<WidthProps>({
  prop: ['width', 'w'],
  themeGet: getSize,
})

export interface HeightProps<T = {}> {
  height?: SystemProperty<SizeGetter<T> | CSS.Property.Height, T>
}
export const height = style<HeightProps>({
  prop: ['height', 'h'],
  themeGet: getSize,
})

export interface MaxWidthProps<T = {}> {
  maxWidth?: SystemProperty<SizeGetter<T> | CSS.Property.MaxWidth, T>
}
export const maxWidth = style<MaxWidthProps>({
  prop: ['maxWidth', 'maxW'],
  themeGet: getSize,
})

export interface MaxHeightProps<T = {}> {
  maxHeight?: SystemProperty<SizeGetter<T> | CSS.Property.MaxHeight, T>
}
export const maxHeight = style<MaxHeightProps>({
  prop: ['maxHeight', 'maxH'],
  themeGet: getSize,
})

export interface MinWidthProps<T = {}> {
  minWidth?: SystemProperty<SizeGetter<T> | CSS.Property.MinWidth, T>
}
export const minWidth = style<MinWidthProps>({
  prop: ['minWidth', 'minW'],
  themeGet: getSize,
})

export interface MinHeightProps<T = {}> {
  minHeight?: SystemProperty<SizeGetter<T> | CSS.Property.MinHeight, T>
}
export const minHeight = style<MinHeightProps>({
  prop: ['minHeight', 'minH'],
  themeGet: getSize,
})

export interface SizeProps<T = {}> {
  size?: SystemProperty<
    SizeGetter<T> | (CSS.Property.Width & CSS.Property.Height),
    T
  >
}
export const size = style<SizeProps>({
  prop: 'size',
  cssProperty: ['width', 'height'],
  themeGet: getSize,
})

export interface VerticalAlignProps<T = {}> {
  verticalAlign?: SystemProperty<CSS.Property.VerticalAlign, T>
}
export const verticalAlign = style({
  prop: 'verticalAlign',
})

export type LayoutProps<T = {}> = DisplayProps<T> &
  WidthProps<T> &
  HeightProps<T> &
  MaxWidthProps<T> &
  MaxHeightProps<T> &
  MinWidthProps<T> &
  MinHeightProps<T> &
  SizeProps<T> &
  VerticalAlignProps<T>
export const layout = compose<LayoutProps>(
  display,
  width,
  height,
  maxWidth,
  maxHeight,
  minWidth,
  minHeight,
  size,
  verticalAlign,
)

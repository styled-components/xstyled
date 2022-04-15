import * as CSS from 'csstype'
import { style, themeGetter, compose } from '../style'
import { getPercent, Percent } from './units'
import { SystemProp, ThemeNamespaceValue, ITheme, Theme } from '../types'

// Getters

export type ThemeSize<T extends ITheme = Theme> = ThemeNamespaceValue<
  'sizes',
  T
>
export type Size<T extends ITheme = Theme> = Percent | ThemeSize<T>
export const getSize = themeGetter<ThemeSize>({
  name: 'size',
  key: 'sizes',
  compose: getPercent,
})

// Styles

export interface WidthProps<T extends ITheme = Theme> {
  w?: SystemProp<Size<T> | CSS.Property.Width, T>
}
export const width = style<WidthProps>({
  prop: 'w',
  themeGet: getSize,
  css: 'width',
})

export interface HeightProps<T extends ITheme = Theme> {
  h?: SystemProp<Size<T> | CSS.Property.Height, T>
}
export const height = style<HeightProps>({
  prop: 'h',
  themeGet: getSize,
  css: 'height',
})

type MaxWidthProp<T extends ITheme> = SystemProp<
  Size<T> | CSS.Property.MaxWidth,
  T
>
export interface MaxWidthProps<T extends ITheme = Theme> {
  maxWidth?: MaxWidthProp<T>
  maxW?: MaxWidthProp<T>
}
export const maxWidth = style<MaxWidthProps>({
  prop: ['maxWidth', 'maxW'],
  themeGet: getSize,
  css: 'maxWidth',
})

type MaxHeightProp<T extends ITheme> = SystemProp<
  Size<T> | CSS.Property.MaxHeight,
  T
>
export interface MaxHeightProps<T extends ITheme = Theme> {
  maxHeight?: MaxHeightProp<T>
  maxH?: MaxHeightProp<T>
}
export const maxHeight = style<MaxHeightProps>({
  prop: ['maxHeight', 'maxH'],
  themeGet: getSize,
  css: 'maxHeight',
})

export interface MinWidthProps<T extends ITheme = Theme> {
  minWidth?: SystemProp<Size<T> | CSS.Property.MinWidth, T>
}
export const minWidth = style<MinWidthProps>({
  prop: ['minWidth', 'minW'],
  themeGet: getSize,
  css: 'minWidth',
})

type MinHeightProp<T extends ITheme> = SystemProp<
  Size<T> | CSS.Property.MinHeight,
  T
>
export interface MinHeightProps<T extends ITheme = Theme> {
  minHeight?: MinHeightProp<T>
  minH?: MinHeightProp<T>
}
export const minHeight = style<MinHeightProps>({
  prop: ['minHeight', 'minH'],
  themeGet: getSize,
  css: 'minHeight',
})

export interface MaskSizeProps<T extends ITheme = Theme> {
  maskSize?: SystemProp<Size<T> | CSS.Property.MaskSize, T>
}
export const maskSize = style<MaskSizeProps>({
  prop: 'maskSize',
  themeGet: themeGetter<ThemeSize>({
    name: 'size',
    key: 'sizes',
    compose: getPercent,
    multiple: true,
    shorthand: true,
  }),
})

export interface SizingProps<T extends ITheme = Theme>
  extends WidthProps<T>,
    HeightProps<T>,
    MaxWidthProps<T>,
    MaxHeightProps<T>,
    MinWidthProps<T>,
    MinHeightProps<T>,
    MaskSizeProps<T> {}
export const sizing = compose<SizingProps>(
  width,
  height,
  maxWidth,
  maxHeight,
  minWidth,
  minHeight,
  maskSize,
)

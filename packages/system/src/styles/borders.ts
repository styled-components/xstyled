import * as CSS from 'csstype'
import { num } from '@xstyled/util'
import { style, themeGetter, compose } from '../style'
import { px } from '../unit'
import { getColor, ColorGetter, getRadius, RadiusGetter, getPx } from './basics'
import { ExtractThemeProperty, SystemProperty, VariantsType } from '../types'

// Getters
export type BorderGetter<T = {}> = VariantsType<
  ExtractThemeProperty<T, 'borders'>
>
export const getBorder = themeGetter({
  name: 'border',
  key: 'borders',
  transform: (n: number | string) => (num(n) && n > 0 ? `${px(n)} solid` : n),
})

export type BorderWidthGetter<T = {}> = VariantsType<
  ExtractThemeProperty<T, 'borderWidths'>
>
export const getBorderWidth = themeGetter({
  name: 'borderWidth',
  key: 'borderWidths',
  compose: getPx,
  shorthand: true,
})

export type BorderStyleGetter<T = {}> = VariantsType<
  ExtractThemeProperty<T, 'borderWidths'>
>
export const getBorderStyle = themeGetter({
  name: 'borderStyle',
  key: 'borderStyles',
})

// Border

export interface BorderProps<T = {}> {
  border?: SystemProperty<BorderGetter<T> | CSS.Property.Border, T>
}
export const border = style<BorderProps>({
  prop: 'border',
  themeGet: getBorder,
})

export interface BorderTopProps<T = {}> {
  borderTop?: SystemProperty<BorderGetter<T> | CSS.Property.BorderTop, T>
}
export const borderTop = style<BorderTopProps>({
  prop: 'borderTop',
  themeGet: getBorder,
})

export interface BorderTopColorProps<T = {}> {
  borderTopColor?: SystemProperty<
    ColorGetter<T> | CSS.Property.BorderTopColor,
    T
  >
}
export const borderTopColor = style<BorderTopColorProps>({
  prop: 'borderTopColor',
  themeGet: getColor,
})

export interface BorderRightProps<T = {}> {
  borderRight?: SystemProperty<BorderGetter<T> | CSS.Property.BorderRight, T>
}
export const borderRight = style<BorderRightProps>({
  prop: 'borderRight',
  themeGet: getBorder,
})

export interface BorderRightColorProps<T = {}> {
  borderRightColor?: SystemProperty<
    ColorGetter<T> | CSS.Property.BorderRightColor,
    T
  >
}
export const borderRightColor = style<BorderRightColorProps>({
  prop: 'borderRightColor',
  themeGet: getColor,
})

export interface BorderBottomProps<T = {}> {
  borderBottom?: SystemProperty<BorderGetter<T> | CSS.Property.BorderBottom, T>
}
export const borderBottom = style<BorderBottomProps>({
  prop: 'borderBottom',
  themeGet: getBorder,
})

export interface BorderBottomColorProps<T = {}> {
  borderBottomColor?: SystemProperty<
    ColorGetter<T> | CSS.Property.BorderBottomColor,
    T
  >
}
export const borderBottomColor = style<BorderBottomColorProps>({
  prop: 'borderBottomColor',
  themeGet: getColor,
})

export interface BorderLeftProps<T = {}> {
  borderLeft?: SystemProperty<BorderGetter<T> | CSS.Property.BorderLeft, T>
}
export const borderLeft = style<BorderLeftProps>({
  prop: 'borderLeft',
  themeGet: getBorder,
})

export interface BorderLeftColorProps<T = {}> {
  borderLeftColor?: SystemProperty<
    ColorGetter | CSS.Property.BorderLeftColor,
    T
  >
}
export const borderLeftColor = style<BorderLeftColorProps>({
  prop: 'borderLeftColor',
  themeGet: getColor,
})

export interface BorderColorProps<T = {}> {
  borderColor?: SystemProperty<ColorGetter | CSS.Property.BorderColor, T>
}
export const borderColor = style<BorderColorProps>({
  prop: 'borderColor',
  themeGet: getColor,
})

export interface BorderWidthProps<T = {}> {
  borderWidth?: SystemProperty<
    BorderWidthGetter<T> | CSS.Property.BorderWidth,
    T
  >
}
export const borderWidth = style<BorderWidthProps>({
  prop: 'borderWidth',
  themeGet: getBorderWidth,
})

export interface BorderStyleProps<T = {}> {
  borderStyle?: SystemProperty<
    BorderStyleGetter<T> | CSS.Property.BorderStyle,
    T
  >
}
export const borderStyle = style<BorderStyleProps>({
  prop: 'borderStyle',
  themeGet: getBorderStyle,
})

// Outline

export interface OutlineProps<T = {}> {
  outline?: SystemProperty<BorderGetter<T> | CSS.Property.Outline, T>
}
export const outline = style<OutlineProps>({
  prop: 'outline',
  themeGet: getBorder,
})

export interface OutlineColorProps<T = {}> {
  outlineColor?: SystemProperty<ColorGetter | CSS.Property.OutlineColor, T>
}
export const outlineColor = style<OutlineColorProps>({
  prop: 'outlineColor',
  themeGet: getColor,
})

export interface OutlineWidthProps<T = {}> {
  outlineWidth?: SystemProperty<
    BorderWidthGetter<T> | CSS.Property.OutlineWidth,
    T
  >
}
export const outlineWidth = style<OutlineWidthProps>({
  prop: 'outlineWidth',
  themeGet: getBorderWidth,
})

export interface OutlineStyleProps<T = {}> {
  outlineStyle?: SystemProperty<
    BorderStyleGetter<T> | CSS.Property.OutlineStyle,
    T
  >
}
export const outlineStyle = style<OutlineStyleProps>({
  prop: 'outlineStyle',
  themeGet: getBorderStyle,
})

// Radius

export interface BorderRadiusProps<T = {}> {
  borderRadius?: SystemProperty<RadiusGetter<T> | CSS.Property.BorderRadius, T>
}
export const borderRadius = style<BorderRadiusProps>({
  prop: 'borderRadius',
  themeGet: getRadius,
})

export type BordersProps<T = {}> = BorderProps<T> &
  BorderTopProps<T> &
  BorderTopColorProps<T> &
  BorderRightProps<T> &
  BorderRightColorProps<T> &
  BorderBottomProps<T> &
  BorderBottomColorProps<T> &
  BorderLeftProps<T> &
  BorderLeftColorProps<T> &
  BorderColorProps<T> &
  BorderWidthProps<T> &
  BorderStyleProps<T> &
  BorderRadiusProps<T> &
  OutlineProps<T> &
  OutlineColorProps<T> &
  OutlineWidthProps<T> &
  OutlineStyleProps<T>
export const borders = compose<BordersProps>(
  border,
  borderTop,
  borderTopColor,
  borderRight,
  borderRightColor,
  borderBottom,
  borderBottomColor,
  borderLeft,
  borderLeftColor,
  borderColor,
  borderWidth,
  borderStyle,
  borderRadius,
  outline,
  outlineColor,
  outlineWidth,
  outlineStyle,
)

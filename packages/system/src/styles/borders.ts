import * as CSS from 'csstype'
import { num } from '@xstyled/util'
import { style, themeGetter, compose, createStyleGenerator } from '../style'
import { px } from '../unit'
import { getColor, ColorGetter } from './colors'
import { getPx } from './units'
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

export type BorderColorGetter<T = {}> = ColorGetter<T>
export const getBorderColor = themeGetter({
  name: 'borderColor',
  compose: getColor,
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

export interface BorderColorProps<T = {}> {
  borderColor?: SystemProperty<ColorGetter | CSS.Property.BorderColor, T>
}
export const borderColor = style<BorderColorProps>({
  prop: 'borderColor',
  themeGet: getBorderColor,
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

export type RadiusGetter<T = {}> = VariantsType<
  ExtractThemeProperty<T, 'radii'>
>
export const getRadius = themeGetter({
  name: 'radius',
  key: 'radii',
  compose: getPx,
  shorthand: true,
})

export interface BorderRadiusProps<T = {}> {
  borderRadius?: SystemProperty<RadiusGetter<T> | CSS.Property.BorderRadius, T>
}
export const borderRadius = style<BorderRadiusProps>({
  prop: 'borderRadius',
  themeGet: getRadius,
})

// Divide

export interface DivideYProps<T = {}> {
  divideY?: SystemProperty<BorderWidthGetter<T>, T>
}
export const divideY = createStyleGenerator<DivideYProps>(
  props => {
    const value = getBorderWidth(props.divideY)(props)
    return {
      '& > :not([hidden]) ~ :not([hidden])': {
        '--x-divide-y-reverse': 0,
        borderTopWidth: `calc(${value} * calc(1 - var(--x-divide-y-reverse)))`,
        borderBottomWidth: `calc(${value} * var(--x-divide-y-reverse))`,
      },
    }
  },
  ['divideY'],
)

export interface DivideXProps<T = {}> {
  divideX?: SystemProperty<BorderWidthGetter<T>, T>
}
export const divideX = createStyleGenerator<DivideXProps>(
  props => {
    const value = getBorderWidth(props.divideX)(props)
    return {
      '& > :not([hidden]) ~ :not([hidden])': {
        '--x-divide-x-reverse': 0,
        borderRightWidth: `calc(${value} * var(--x-divide-x-reverse))`,
        borderLeftWidth: `calc(${value} * calc(1 - var(--x-divide-x-reverse)))`,
      },
    }
  },
  ['divideX'],
)

export interface DivideXReverseProps<T = {}> {
  divideXReverse?: SystemProperty<boolean, T>
}
export const divideXReverse = createStyleGenerator<DivideXReverseProps>(
  props => {
    if (!props.divideXReverse) return null
    return {
      '& > :not([hidden]) ~ :not([hidden])': {
        '--x-divide-x-reverse': '1',
      },
    }
  },
  ['divideXReverse'],
)

export interface DivideYReverseProps<T = {}> {
  divideYReverse?: SystemProperty<boolean, T>
}
export const divideYReverse = createStyleGenerator<DivideYReverseProps>(
  props => {
    if (!props.divideYReverse) return null
    return {
      '& > :not([hidden]) ~ :not([hidden])': {
        '--x-divide-y-reverse': '1',
      },
    }
  },
  ['divideYReverse'],
)

export type BordersProps<T = {}> = BorderProps<T> &
  BorderColorProps<T> &
  BorderWidthProps<T> &
  BorderStyleProps<T> &
  BorderRadiusProps<T> &
  OutlineProps<T> &
  OutlineColorProps<T> &
  OutlineWidthProps<T> &
  OutlineStyleProps<T> &
  DivideXProps<T> &
  DivideYProps<T> &
  DivideXReverseProps<T> &
  DivideYReverseProps<T>
export const borders = compose<BordersProps>(
  border,
  borderColor,
  borderWidth,
  borderStyle,
  borderRadius,
  outline,
  outlineColor,
  outlineWidth,
  outlineStyle,
  divideX,
  divideY,
  divideXReverse,
  divideYReverse,
)

import * as CSS from 'csstype'
import { num } from '@xstyled/util'
import { style, themeGetter, compose } from '../style'
import { px } from '../unit'
import { getColor, ColorGetter } from './colors'
import { getPx } from './units'
import { SystemProp, ITheme, Theme, VariantsType } from '../types'

// Getters
export type BorderGetter<T extends ITheme = Theme> = VariantsType<T['borders']>
export const getBorder = themeGetter<BorderGetter>({
  name: 'border',
  key: 'borders',
  transform: (n: number | string) => (num(n) && n > 0 ? `${px(n)} solid` : n),
})

export type BorderWidthGetter<T extends ITheme = Theme> = VariantsType<
  T['borderWidths']
>
export const getBorderWidth = themeGetter<BorderWidthGetter>({
  name: 'borderWidth',
  key: 'borderWidths',
  compose: getPx,
  shorthand: true,
})

export type BorderColorGetter<T extends ITheme = Theme> = ColorGetter<T>
export const getBorderColor = themeGetter<BorderColorGetter>({
  name: 'borderColor',
  compose: getColor,
  shorthand: true,
})

export type BorderStyleGetter<T extends ITheme = Theme> = VariantsType<
  T['borderStyles']
>
export const getBorderStyle = themeGetter<BorderStyleGetter>({
  name: 'borderStyle',
  key: 'borderStyles',
})

// Border

type BorderProp<T extends ITheme> = SystemProp<
  BorderGetter<T> | CSS.Property.Border,
  T
>
export interface BorderProps<T extends ITheme = Theme> {
  border?: BorderProp<T>
}
export const border = style({
  prop: 'border',
  themeGet: getBorder,
})

type BorderTopProp<T extends ITheme> = SystemProp<
  BorderGetter<T> | CSS.Property.Border,
  T
>
export interface BorderTopProps<T extends ITheme = Theme> {
  borderTop?: BorderTopProp<T>
}
export const borderTop = style({
  prop: 'borderTop',
  themeGet: getBorder,
})

type BorderRightProp<T extends ITheme> = SystemProp<
  BorderGetter<T> | CSS.Property.Border,
  T
>
export interface BorderRightProps<T extends ITheme = Theme> {
  borderRight?: BorderRightProp<T>
}
export const borderRight = style({
  prop: 'borderRight',
  themeGet: getBorder,
})

type BorderBottomProp<T extends ITheme> = SystemProp<
  BorderGetter<T> | CSS.Property.Border,
  T
>
export interface BorderBottomProps<T extends ITheme = Theme> {
  borderBottom?: BorderBottomProp<T>
}
export const borderBottom = style({
  prop: 'borderBottom',
  themeGet: getBorder,
})

type BorderLeftProp<T extends ITheme> = SystemProp<
  BorderGetter<T> | CSS.Property.Border,
  T
>
export interface BorderLeftProps<T extends ITheme = Theme> {
  borderLeft?: BorderLeftProp<T>
}
export const borderLeft = style({
  prop: 'borderLeft',
  themeGet: getBorder,
})

type BorderColorProp<T extends ITheme> = SystemProp<
  ColorGetter<T> | CSS.Property.BorderColor,
  T
>
export interface BorderColorProps<T extends ITheme = Theme> {
  borderColor?: BorderColorProp<T>
}
export const borderColor = style({
  prop: 'borderColor',
  themeGet: getBorderColor,
})

type BorderTopColorProp<T extends ITheme> = SystemProp<
  ColorGetter<T> | CSS.Property.BorderColor,
  T
>
export interface BorderTopColorProps<T extends ITheme = Theme> {
  borderTopColor?: BorderTopColorProp<T>
}
export const borderTopColor = style({
  prop: 'borderTopColor',
  themeGet: getBorderColor,
})

type BorderRightColorProp<T extends ITheme> = SystemProp<
  ColorGetter<T> | CSS.Property.BorderColor,
  T
>
export interface BorderRightColorProps<T extends ITheme = Theme> {
  borderRightColor?: BorderRightColorProp<T>
}
export const borderRightColor = style({
  prop: 'borderRightColor',
  themeGet: getBorderColor,
})

type BorderBottomColorProp<T extends ITheme> = SystemProp<
  ColorGetter<T> | CSS.Property.BorderColor,
  T
>
export interface BorderBottomColorProps<T extends ITheme = Theme> {
  borderBottomColor?: BorderBottomColorProp<T>
}
export const borderBottomColor = style({
  prop: 'borderBottomColor',
  themeGet: getBorderColor,
})

type BorderLeftColorProp<T extends ITheme> = SystemProp<
  ColorGetter<T> | CSS.Property.BorderColor,
  T
>
export interface BorderLeftColorProps<T extends ITheme = Theme> {
  borderLeftColor?: BorderLeftColorProp<T>
}
export const borderLeftColor = style({
  prop: 'borderLeftColor',
  themeGet: getBorderColor,
})

type BorderWidthProp<T extends ITheme> = SystemProp<
  BorderWidthGetter<T> | CSS.Property.BorderWidth,
  T
>
export interface BorderWidthProps<T extends ITheme = Theme> {
  borderWidth?: BorderWidthProp<T>
}
export const borderWidth = style({
  prop: 'borderWidth',
  themeGet: getBorderWidth,
})

type BorderTopWidthProp<T extends ITheme> = SystemProp<
  BorderWidthGetter<T> | CSS.Property.BorderWidth,
  T
>
export interface BorderTopWidthProps<T extends ITheme = Theme> {
  borderTopWidth?: BorderTopWidthProp<T>
}
export const borderTopWidth = style({
  prop: 'borderTopWidth',
  themeGet: getBorderWidth,
})

type BorderRightWidthProp<T extends ITheme> = SystemProp<
  BorderWidthGetter<T> | CSS.Property.BorderWidth,
  T
>
export interface BorderRightWidthProps<T extends ITheme = Theme> {
  borderRightWidth?: BorderRightWidthProp<T>
}
export const borderRightWidth = style({
  prop: 'borderRightWidth',
  themeGet: getBorderWidth,
})

type BorderBottomWidthProp<T extends ITheme> = SystemProp<
  BorderWidthGetter<T> | CSS.Property.BorderWidth,
  T
>
export interface BorderBottomWidthProps<T extends ITheme = Theme> {
  borderBottomWidth?: BorderBottomWidthProp<T>
}
export const borderBottomWidth = style({
  prop: 'borderBottomWidth',
  themeGet: getBorderWidth,
})

type BorderLeftWidthProp<T extends ITheme> = SystemProp<
  BorderWidthGetter<T> | CSS.Property.BorderWidth,
  T
>
export interface BorderLeftWidthProps<T extends ITheme = Theme> {
  borderLeftWidth?: BorderLeftWidthProp<T>
}
export const borderLeftWidth = style({
  prop: 'borderLeftWidth',
  themeGet: getBorderWidth,
})

type BorderStyleProp<T extends ITheme> = SystemProp<
  BorderStyleGetter<T> | CSS.Property.BorderStyle,
  T
>
export interface BorderStyleProps<T extends ITheme = Theme> {
  borderStyle?: BorderStyleProp<T>
}
export const borderStyle = style({
  prop: 'borderStyle',
  themeGet: getBorderStyle,
})

// Outline

type OutlineProp<T extends ITheme> = SystemProp<
  BorderGetter<T> | CSS.Property.Outline,
  T
>
export interface OutlineProps<T extends ITheme = Theme> {
  outline?: OutlineProp<T>
}
export const outline = style({
  prop: 'outline',
  themeGet: getBorder,
})

type OutlineColorProp<T extends ITheme> = SystemProp<
  ColorGetter<T> | CSS.Property.OutlineColor,
  T
>
export interface OutlineColorProps<T extends ITheme = Theme> {
  outlineColor?: OutlineColorProp<T>
}
export const outlineColor = style({
  prop: 'outlineColor',
  themeGet: getColor,
})

type OutlineWidthProp<T extends ITheme> = SystemProp<
  BorderWidthGetter<T> | CSS.Property.OutlineWidth,
  T
>
export interface OutlineWidthProps<T extends ITheme = Theme> {
  outlineWidth?: OutlineWidthProp<T>
}
export const outlineWidth = style({
  prop: 'outlineWidth',
  themeGet: getBorderWidth,
})

type OutlineStyleProp<T extends ITheme> = SystemProp<
  BorderStyleGetter<T> | CSS.Property.OutlineStyle,
  T
>
export interface OutlineStyleProps<T extends ITheme = Theme> {
  outlineStyle?: OutlineStyleProp<T>
}
export const outlineStyle = style({
  prop: 'outlineStyle',
  themeGet: getBorderStyle,
})

// Radius

export type RadiusGetter<T extends ITheme = Theme> = VariantsType<T['radii']>
export const getRadius = themeGetter({
  name: 'radius',
  key: 'radii',
  compose: getPx,
  shorthand: true,
})

type BorderRadiusProp<T extends ITheme> = SystemProp<
  RadiusGetter<T> | CSS.Property.BorderRadius,
  T
>
export interface BorderRadiusProps<T extends ITheme = Theme> {
  borderRadius?: BorderRadiusProp<T>
}
export const borderRadius = style({
  prop: 'borderRadius',
  themeGet: getRadius,
})

// Divide

const divideSelector = `& > :not([hidden]) ~ :not([hidden])`

type DivideYProp<T extends ITheme> = SystemProp<BorderWidthGetter<T>, T>
export interface DivideYProps<T extends ITheme = Theme> {
  divideY?: DivideYProp<T>
}
export const divideY = style({
  prop: 'divideY',
  themeGet: getBorderWidth,
  cssProperty: (value) => {
    const v = value === true ? 1 : value
    return {
      [divideSelector]: {
        '--x-divide-y-reverse': 0,
        borderTopWidth: `calc(${v} * calc(1 - var(--x-divide-y-reverse)))`,
        borderBottomWidth: `calc(${v} * var(--x-divide-y-reverse))`,
      },
    }
  },
})

type DivideXProp<T extends ITheme> = SystemProp<BorderWidthGetter<T>, T>
export interface DivideXProps<T extends ITheme = Theme> {
  divideX?: DivideXProp<T>
}
export const divideX = style({
  prop: 'divideX',
  themeGet: getBorderWidth,
  cssProperty: (value) => {
    const v = value === true ? 1 : value
    return {
      [divideSelector]: {
        '--x-divide-x-reverse': 0,
        borderRightWidth: `calc(${v} * var(--x-divide-x-reverse))`,
        borderLeftWidth: `calc(${v} * calc(1 - var(--x-divide-x-reverse)))`,
      },
    }
  },
})

type DivideXReverseProp<T extends ITheme> = SystemProp<boolean, T>
export interface DivideXReverseProps<T extends ITheme = Theme> {
  divideXReverse?: DivideXReverseProp<T>
}
export const divideXReverse = style({
  prop: 'divideXReverse',
  cssProperty: () => ({
    [divideSelector]: {
      '--x-divide-x-reverse': '1',
    },
  }),
})

type DivideYReverseProp<T extends ITheme> = SystemProp<boolean, T>
export interface DivideYReverseProps<T extends ITheme = Theme> {
  divideYReverse?: DivideYReverseProp<T>
}
export const divideYReverse = style({
  prop: 'divideYReverse',
  cssProperty: () => ({
    [divideSelector]: {
      '--x-divide-y-reverse': '1',
    },
  }),
})

type DivideColorProp<T extends ITheme> = SystemProp<
  ColorGetter<T> | CSS.Property.BorderColor,
  T
>
export interface DivideColorProps<T extends ITheme = Theme> {
  divideColor?: DivideColorProp<T>
}
export const divideColor = style({
  prop: 'divideColor',
  themeGet: getBorderColor,
  cssProperty: (value) => ({
    [divideSelector]: {
      borderColor: value,
    },
  }),
})

type DivideStyleProp<T extends ITheme> = SystemProp<
  BorderStyleGetter<T> | CSS.Property.BorderStyle,
  T
>
export interface DivideStyleProps<T extends ITheme = Theme> {
  divideStyle?: DivideStyleProp<T>
}
export const divideStyle = style({
  prop: 'divideStyle',
  themeGet: getBorderStyle,
  cssProperty: (value) => ({
    [divideSelector]: {
      borderStyle: value,
    },
  }),
})

export type RingWidthGetter<T extends ITheme = Theme> = VariantsType<
  T['ringWidths']
>
export const getRingWidth = themeGetter({
  name: 'ringWidth',
  key: 'ringWidths',
  compose: getPx,
})

type RingProp<T extends ITheme> = SystemProp<RingWidthGetter<T>, T>
export interface RingProps<T extends ITheme = Theme> {
  ring?: RingProp<T>
}
export const ring = style({
  prop: 'ring',
  themeGet: getRingWidth,
  cssProperty: (value) => ({
    '--x-ring-shadow': `var(--x-ring-inset, /*!*/ /*!*/) 0 0 0 ${value} var(--x-ring-color)`,
    boxShadow: 'var(--x-ring-shadow, 0 0 #0000), var(--x-shadow, 0 0 #0000)',
  }),
})

type RingInsetProp<T extends ITheme> = SystemProp<boolean, T>
export interface RingInsetProps<T extends ITheme = Theme> {
  ringInset?: RingInsetProp<T>
}
export const ringInset = style({
  prop: 'ringInset',
  cssProperty: () => ({ '--x-ring-inset': 'inset' }),
})

type RingColorProp<T extends ITheme> = SystemProp<ColorGetter<T>, T>
export interface RingColorProps<T extends ITheme = Theme> {
  ringColor?: RingColorProp<T>
}
export const ringColor = style({
  prop: 'ringColor',
  themeGet: getColor,
  cssProperty: (value) => ({ '--x-ring-color': value }),
})

export interface BordersProps<T extends ITheme>
  extends BorderProps<T>,
    BorderTopProps<T>,
    BorderRightProps<T>,
    BorderBottomProps<T>,
    BorderLeftProps<T>,
    BorderColorProps<T>,
    BorderTopColorProps<T>,
    BorderRightColorProps<T>,
    BorderBottomColorProps<T>,
    BorderLeftColorProps<T>,
    BorderWidthProps<T>,
    BorderTopWidthProps<T>,
    BorderRightWidthProps<T>,
    BorderBottomWidthProps<T>,
    BorderLeftWidthProps<T>,
    BorderStyleProps<T>,
    BorderRadiusProps<T>,
    OutlineProps<T>,
    OutlineColorProps<T>,
    OutlineWidthProps<T>,
    OutlineStyleProps<T>,
    DivideXProps<T>,
    DivideYProps<T>,
    DivideXReverseProps<T>,
    DivideYReverseProps<T>,
    DivideColorProps<T>,
    DivideStyleProps<T>,
    RingProps<T>,
    RingInsetProps<T>,
    RingColorProps<T> {}
export const borders = compose(
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderColor,
  borderTopColor,
  borderRightColor,
  borderBottomColor,
  borderLeftColor,
  borderWidth,
  borderTopWidth,
  borderRightWidth,
  borderBottomWidth,
  borderLeftWidth,
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
  divideColor,
  divideStyle,
  ring,
  ringInset,
  ringColor,
)

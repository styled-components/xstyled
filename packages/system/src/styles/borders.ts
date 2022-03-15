import * as CSS from 'csstype'
import { style, themeGetter, compose } from '../style'
import { px } from '../unit'
import { getColor, ThemeColor, Color } from './colors'
import { getPx } from './units'
import { SystemProp, ITheme, Theme, ThemeNamespaceValue } from '../types'

// Getters
export type ThemeBorder<T extends ITheme = Theme> = ThemeNamespaceValue<
  'borders',
  T
>
export const getBorder = themeGetter<ThemeBorder>({
  name: 'border',
  key: 'borders',
  transform: (value: number | string) => {
    const num = Number(value)
    return num > 0 ? `${px(num)} solid` : value
  },
})

export type ThemeBorderWidth<T extends ITheme = Theme> = ThemeNamespaceValue<
  'borderWidths',
  T
>
export const getBorderWidth = themeGetter<ThemeBorderWidth>({
  name: 'borderWidth',
  key: 'borderWidths',
  compose: getPx,
  shorthand: true,
})

export type ThemeBorderColor<T extends ITheme = Theme> = ThemeColor<T>
export const getBorderColor = themeGetter<ThemeBorderColor>({
  name: 'borderColor',
  compose: getColor,
  shorthand: true,
})

export type ThemeBorderStyle<T extends ITheme = Theme> = ThemeNamespaceValue<
  'borderStyles',
  T
>
export const getBorderStyle = themeGetter<ThemeBorderStyle>({
  name: 'borderStyle',
  key: 'borderStyles',
})

// Border

export interface BorderProps<T extends ITheme = Theme> {
  border?: SystemProp<ThemeBorder<T> | number | CSS.Property.Border, T>
}
export const border = style<BorderProps>({
  prop: 'border',
  themeGet: getBorder,
})

export interface BorderTopProps<T extends ITheme = Theme> {
  borderTop?: SystemProp<ThemeBorder<T> | number | CSS.Property.BorderTop, T>
}
export const borderTop = style<BorderTopProps>({
  prop: 'borderTop',
  themeGet: getBorder,
})

export interface BorderRightProps<T extends ITheme = Theme> {
  borderRight?: SystemProp<
    ThemeBorder<T> | number | CSS.Property.BorderRight,
    T
  >
}
export const borderRight = style<BorderRightProps>({
  prop: 'borderRight',
  themeGet: getBorder,
})

export interface BorderBottomProps<T extends ITheme = Theme> {
  borderBottom?: SystemProp<
    ThemeBorder<T> | number | CSS.Property.BorderBottom,
    T
  >
}
export const borderBottom = style<BorderBottomProps>({
  prop: 'borderBottom',
  themeGet: getBorder,
})

export interface BorderLeftProps<T extends ITheme = Theme> {
  borderLeft?: SystemProp<ThemeBorder<T> | number | CSS.Property.BorderLeft, T>
}
export const borderLeft = style<BorderLeftProps>({
  prop: 'borderLeft',
  themeGet: getBorder,
})

export interface BorderColorProps<T extends ITheme = Theme> {
  borderColor?: SystemProp<ThemeBorderColor<T> | CSS.Property.BorderColor, T>
}
export const borderColor = style<BorderColorProps>({
  prop: 'borderColor',
  themeGet: getBorderColor,
})

export interface BorderTopColorProps<T extends ITheme = Theme> {
  borderTopColor?: SystemProp<ThemeColor<T> | CSS.Property.BorderTopColor, T>
}
export const borderTopColor = style<BorderTopColorProps>({
  prop: 'borderTopColor',
  themeGet: getColor,
})

export interface BorderRightColorProps<T extends ITheme = Theme> {
  borderRightColor?: SystemProp<
    ThemeColor<T> | CSS.Property.BorderRightColor,
    T
  >
}
export const borderRightColor = style<BorderRightColorProps>({
  prop: 'borderRightColor',
  themeGet: getColor,
})

export interface BorderBottomColorProps<T extends ITheme = Theme> {
  borderBottomColor?: SystemProp<
    ThemeColor<T> | CSS.Property.BorderBottomColor,
    T
  >
}
export const borderBottomColor = style<BorderBottomColorProps>({
  prop: 'borderBottomColor',
  themeGet: getColor,
})

export interface BorderLeftColorProps<T extends ITheme = Theme> {
  borderLeftColor?: SystemProp<ThemeColor<T> | CSS.Property.BorderLeftColor, T>
}
export const borderLeftColor = style<BorderLeftColorProps>({
  prop: 'borderLeftColor',
  themeGet: getColor,
})

export interface BorderWidthProps<T extends ITheme = Theme> {
  borderWidth?: SystemProp<
    ThemeBorderWidth<T> | number | CSS.Property.BorderWidth,
    T
  >
}
export const borderWidth = style<BorderWidthProps>({
  prop: 'borderWidth',
  themeGet: getBorderWidth,
})

export interface BorderTopWidthProps<T extends ITheme = Theme> {
  borderTopWidth?: SystemProp<
    ThemeBorderWidth<T> | number | CSS.Property.BorderTopWidth,
    T
  >
}
export const borderTopWidth = style<BorderTopWidthProps>({
  prop: 'borderTopWidth',
  themeGet: getBorderWidth,
})

export interface BorderRightWidthProps<T extends ITheme = Theme> {
  borderRightWidth?: SystemProp<
    ThemeBorderWidth<T> | number | CSS.Property.BorderRightWidth,
    T
  >
}
export const borderRightWidth = style<BorderRightWidthProps>({
  prop: 'borderRightWidth',
  themeGet: getBorderWidth,
})

export interface BorderBottomWidthProps<T extends ITheme = Theme> {
  borderBottomWidth?: SystemProp<
    ThemeBorderWidth<T> | number | CSS.Property.BorderBottomWidth,
    T
  >
}
export const borderBottomWidth = style<BorderBottomWidthProps>({
  prop: 'borderBottomWidth',
  themeGet: getBorderWidth,
})

export interface BorderLeftWidthProps<T extends ITheme = Theme> {
  borderLeftWidth?: SystemProp<
    ThemeBorderWidth<T> | number | CSS.Property.BorderLeftWidth,
    T
  >
}
export const borderLeftWidth = style<BorderLeftWidthProps>({
  prop: 'borderLeftWidth',
  themeGet: getBorderWidth,
})

export interface BorderStyleProps<T extends ITheme = Theme> {
  borderStyle?: SystemProp<ThemeBorderStyle<T> | CSS.Property.BorderStyle, T>
}
export const borderStyle = style<BorderStyleProps>({
  prop: 'borderStyle',
  themeGet: getBorderStyle,
  cssProps: [
    'borderStyle',
    'borderTopStyle',
    'borderRightStyle',
    'borderBottomStyle',
    'borderLeftStyle',
  ],
})

export interface BorderTopStyleProps<T extends ITheme = Theme> {
  borderTopStyle?: SystemProp<
    ThemeBorderStyle<T> | CSS.Property.BorderTopStyle,
    T
  >
}
export const borderTopStyle = style<BorderTopStyleProps>({
  prop: 'borderTopStyle',
  themeGet: getBorderStyle,
})

export interface BorderRightStyleProps<T extends ITheme = Theme> {
  borderRightStyle?: SystemProp<
    ThemeBorderStyle<T> | CSS.Property.BorderRightStyle,
    T
  >
}
export const borderRightStyle = style<BorderRightStyleProps>({
  prop: 'borderRightStyle',
  themeGet: getBorderStyle,
})

export interface BorderBottomStyleProps<T extends ITheme = Theme> {
  borderBottomStyle?: SystemProp<
    ThemeBorderStyle<T> | CSS.Property.BorderBottomStyle,
    T
  >
}
export const borderBottomStyle = style<BorderBottomStyleProps>({
  prop: 'borderBottomStyle',
  themeGet: getBorderStyle,
})

export interface BorderLeftStyleProps<T extends ITheme = Theme> {
  borderLeftStyle?: SystemProp<
    ThemeBorderStyle<T> | CSS.Property.BorderLeftStyle,
    T
  >
}
export const borderLeftStyle = style<BorderLeftStyleProps>({
  prop: 'borderLeftStyle',
  themeGet: getBorderStyle,
})

// Outline

export interface OutlineProps<T extends ITheme = Theme> {
  outline?: SystemProp<ThemeBorder<T> | number | CSS.Property.Outline, T>
}
export const outline = style<OutlineProps>({
  prop: 'outline',
  themeGet: getBorder,
})

export interface OutlineColorProps<T extends ITheme = Theme> {
  outlineColor?: SystemProp<ThemeBorderColor<T> | CSS.Property.OutlineColor, T>
}
export const outlineColor = style<OutlineColorProps>({
  prop: 'outlineColor',
  themeGet: getColor,
})

export interface OutlineWidthProps<T extends ITheme = Theme> {
  outlineWidth?: SystemProp<
    ThemeBorderWidth<T> | number | CSS.Property.OutlineWidth,
    T
  >
}
export const outlineWidth = style<OutlineWidthProps>({
  prop: 'outlineWidth',
  themeGet: getBorderWidth,
})

export interface OutlineStyleProps<T extends ITheme = Theme> {
  outlineStyle?: SystemProp<ThemeBorderStyle<T> | CSS.Property.OutlineStyle, T>
}
export const outlineStyle = style<OutlineStyleProps>({
  prop: 'outlineStyle',
  themeGet: getBorderStyle,
})

// Radius

export type ThemeRadius<T extends ITheme = Theme> = ThemeNamespaceValue<
  'radii',
  T
>
export const getRadius = themeGetter<ThemeRadius>({
  name: 'radius',
  key: 'radii',
  compose: getPx,
  shorthand: true,
})

export interface BorderRadiusProps<T extends ITheme = Theme> {
  borderRadius?: SystemProp<
    ThemeRadius<T> | number | CSS.Property.BorderRadius,
    T
  >
}
export const borderRadius = style<BorderRadiusProps>({
  prop: 'borderRadius',
  themeGet: getRadius,
  cssProps: [
    'borderRadius',
    'borderTopLeftRadius',
    'borderTopRightRadius',
    'borderBottomRightRadius',
    'borderBottomLeftRadius',
  ],
})

// Divide

const divideSelector = `& > :not([hidden]) ~ :not([hidden])`

export interface DivideYProps<T extends ITheme = Theme> {
  divideY?: SystemProp<ThemeBorderWidth<T>, T>
}
export const divideY = style<DivideYProps>({
  prop: 'divideY',
  themeGet: getBorderWidth,
  css: (value) => {
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

export interface DivideXProps<T extends ITheme = Theme> {
  divideX?: SystemProp<ThemeBorderWidth<T>, T>
}
export const divideX = style<DivideXProps>({
  prop: 'divideX',
  themeGet: getBorderWidth,
  css: (value) => {
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

export interface DivideXReverseProps<T extends ITheme = Theme> {
  divideXReverse?: SystemProp<boolean, T>
}
export const divideXReverse = style<DivideXReverseProps>({
  prop: 'divideXReverse',
  css: () => ({
    [divideSelector]: {
      '--x-divide-x-reverse': '1',
    },
  }),
})

export interface DivideYReverseProps<T extends ITheme = Theme> {
  divideYReverse?: SystemProp<boolean, T>
}
export const divideYReverse = style<DivideYReverseProps>({
  prop: 'divideYReverse',
  css: () => ({
    [divideSelector]: {
      '--x-divide-y-reverse': '1',
    },
  }),
})

export interface DivideColorProps<T extends ITheme = Theme> {
  divideColor?: SystemProp<ThemeColor<T> | CSS.Property.BorderColor, T>
}
export const divideColor = style<DivideColorProps>({
  prop: 'divideColor',
  themeGet: getColor,
  css: (value) => ({
    [divideSelector]: {
      borderColor: value,
    },
  }),
})

export interface DivideStyleProps<T extends ITheme = Theme> {
  divideStyle?: SystemProp<ThemeBorderStyle<T> | CSS.Property.BorderStyle, T>
}
export const divideStyle = style<DivideStyleProps>({
  prop: 'divideStyle',
  themeGet: getBorderStyle,
  css: (value) => ({
    [divideSelector]: {
      borderStyle: value,
    },
  }),
})

export type ThemeRingWidth<T extends ITheme = Theme> = ThemeNamespaceValue<
  'ringWidths',
  T
>
export const getRingWidth = themeGetter<ThemeRingWidth>({
  name: 'ringWidth',
  key: 'ringWidths',
  compose: getPx,
})

export interface RingProps<T extends ITheme = Theme> {
  ring?: SystemProp<ThemeRingWidth<T> | number, T>
}
export const ring = style<RingProps>({
  prop: 'ring',
  themeGet: getRingWidth,
  css: (value) => ({
    '--x-ring-shadow': `var(--x-ring-inset, /*!*/ /*!*/) 0 0 0 ${value} var(--x-ring-color)`,
    boxShadow: 'var(--x-ring-shadow, 0 0 #0000), var(--x-shadow, 0 0 #0000)',
  }),
})

export interface RingInsetProps<T extends ITheme = Theme> {
  ringInset?: SystemProp<boolean, T>
}
export const ringInset = style<RingInsetProps>({
  prop: 'ringInset',
  css: () => ({ '--x-ring-inset': 'inset' }),
})

export interface RingColorProps<T extends ITheme = Theme> {
  ringColor?: SystemProp<Color<T>, T>
}
export const ringColor = style<RingColorProps>({
  prop: 'ringColor',
  themeGet: getColor,
  css: (value) => ({ '--x-ring-color': value }),
})

export interface BordersProps<T extends ITheme = Theme>
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
export const borders = compose<BordersProps>(
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
  borderTopStyle,
  borderRightStyle,
  borderBottomStyle,
  borderLeftStyle,
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

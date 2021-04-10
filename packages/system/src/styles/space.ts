import * as CSS from 'csstype'
import { style, themeGetter, compose } from '../style'
import { getPx } from './units'
import { transformNegative } from '../unit'
import { ITheme, Theme, ThemeNamespaceValue, SystemProp } from '../types'

export type ThemeSpace<T extends ITheme = Theme> = ThemeNamespaceValue<
  'space',
  T
>
export const getSpace = themeGetter<ThemeSpace>({
  name: 'space',
  key: 'space',
  compose: getPx,
  transform: transformNegative,
})

// Margin

type MarginProp<T extends ITheme> = SystemProp<
  ThemeSpace<T> | CSS.Property.Margin,
  T
>
export interface MarginProps<T extends ITheme = Theme> {
  margin?: MarginProp<T>
  m?: MarginProp<T>
}
export const margin = style({
  prop: ['margin', 'm'],
  themeGet: getSpace,
  css: 'margin',
})

type MarginTopProp<T extends ITheme> = SystemProp<
  ThemeSpace<T> | CSS.Property.MarginTop,
  T
>
export interface MarginTopProps<T extends ITheme = Theme> {
  marginTop?: MarginTopProp<T>
  mt?: MarginTopProp<T>
}
export const marginTop = style<MarginTopProps>({
  prop: ['marginTop', 'mt'],
  themeGet: getSpace,
  css: 'marginTop',
})

type MarginRightProp<T extends ITheme> = SystemProp<
  ThemeSpace<T> | CSS.Property.MarginRight,
  T
>
export interface MarginRightProps<T extends ITheme = Theme> {
  marginRight?: MarginRightProp<T>
  mr?: MarginRightProp<T>
}
export const marginRight = style<MarginRightProps>({
  prop: ['marginRight', 'mr'],
  themeGet: getSpace,
  css: 'marginRight',
})

type MarginBottomProp<T extends ITheme> = SystemProp<
  ThemeSpace<T> | CSS.Property.MarginBottom,
  T
>
export interface MarginBottomProps<T extends ITheme = Theme> {
  marginBottom?: MarginBottomProp<T>
  mb?: MarginBottomProp<T>
}
export const marginBottom = style<MarginBottomProps>({
  prop: ['marginBottom', 'mb'],
  themeGet: getSpace,
  css: 'marginBottom',
})

type MarginLeftProp<T extends ITheme> = SystemProp<
  ThemeSpace<T> | CSS.Property.MarginLeft,
  T
>
export interface MarginLeftProps<T extends ITheme = Theme> {
  marginLeft?: MarginLeftProp<T>
  ml?: MarginLeftProp<T>
}
export const marginLeft = style<MarginLeftProps>({
  prop: ['marginLeft', 'ml'],
  themeGet: getSpace,
  css: 'marginLeft',
})

export interface MarginXProps<T extends ITheme = Theme> {
  mx?: SystemProp<
    ThemeSpace<T> | (CSS.Property.MarginLeft & CSS.Property.MarginRight),
    T
  >
}
export const mx = style<MarginXProps>({
  prop: 'mx',
  themeGet: getSpace,
  css: ['marginRight', 'marginLeft'],
})

export interface MarginYProps<T extends ITheme = Theme> {
  my?: SystemProp<
    ThemeSpace<T> | (CSS.Property.MarginTop & CSS.Property.MarginBottom),
    T
  >
}
export const my = style<MarginYProps>({
  prop: 'my',
  themeGet: getSpace,
  css: ['marginTop', 'marginBottom'],
})

// Padding

type PaddingProp<T extends ITheme> = SystemProp<
  ThemeSpace<T> | CSS.Property.Padding,
  T
>
export interface PaddingProps<T extends ITheme = Theme> {
  padding?: PaddingProp<T>
  p?: PaddingProp<T>
}
export const padding = style<PaddingProps>({
  prop: ['padding', 'p'],
  themeGet: getSpace,
  css: 'padding',
})

type PaddingTopProp<T extends ITheme> = SystemProp<
  ThemeSpace<T> | CSS.Property.PaddingTop,
  T
>
export interface PaddingTopProps<T extends ITheme = Theme> {
  paddingTop?: PaddingTopProp<T>
  pt?: PaddingTopProp<T>
}
export const paddingTop = style<PaddingTopProps>({
  prop: ['paddingTop', 'pt'],
  themeGet: getSpace,
  css: 'paddingTop',
})

type PaddingRightProp<T extends ITheme> = SystemProp<
  ThemeSpace<T> | CSS.Property.PaddingRight,
  T
>
export interface PaddingRightProps<T extends ITheme = Theme> {
  paddingRight?: PaddingRightProp<T>
  pr?: PaddingRightProp<T>
}
export const paddingRight = style<PaddingRightProps>({
  prop: ['paddingRight', 'pr'],
  themeGet: getSpace,
  css: 'paddingRight',
})

type PaddingBottomProp<T extends ITheme> = SystemProp<
  ThemeSpace<T> | CSS.Property.PaddingBottom,
  T
>
export interface PaddingBottomProps<T extends ITheme = Theme> {
  paddingBottom?: PaddingBottomProp<T>
  pb?: PaddingBottomProp<T>
}
export const paddingBottom = style<PaddingBottomProps>({
  prop: ['paddingBottom', 'pb'],
  themeGet: getSpace,
  css: 'paddingBottom',
})

type PaddingLeftProp<T extends ITheme> = SystemProp<
  ThemeSpace<T> | CSS.Property.PaddingLeft,
  T
>
export interface PaddingLeftProps<T extends ITheme = Theme> {
  paddingLeft?: PaddingLeftProp<T>
  pl?: PaddingLeftProp<T>
}
export const paddingLeft = style<PaddingLeftProps>({
  prop: ['paddingLeft', 'pl'],
  themeGet: getSpace,
  css: 'paddingLeft',
})

export interface PaddingXProps<T extends ITheme = Theme> {
  px?: SystemProp<
    ThemeSpace<T> | (CSS.Property.PaddingLeft & CSS.Property.PaddingRight),
    T
  >
}
export const px = style<PaddingXProps>({
  prop: 'px',
  themeGet: getSpace,
  css: ['paddingRight', 'paddingLeft'],
})

export interface PaddingYProps<T extends ITheme = Theme> {
  py?: SystemProp<
    ThemeSpace<T> | (CSS.Property.PaddingTop & CSS.Property.PaddingBottom),
    T
  >
}
export const py = style<PaddingYProps>({
  prop: 'py',
  themeGet: getSpace,
  css: ['paddingTop', 'paddingBottom'],
})

export interface SpaceYProps<T extends ITheme = Theme> {
  spaceY?: SystemProp<ThemeSpace<T>, T>
}
export const spaceY = style<SpaceYProps>({
  prop: 'spaceY',
  themeGet: getSpace,
  css: (value) => ({
    '& > :not([hidden]) ~ :not([hidden])': {
      '--x-space-y-reverse': 0,
      marginTop: `calc(${value} * calc(1 - var(--x-space-y-reverse)))`,
      marginBottom: `calc(${value} * var(--x-space-y-reverse))`,
    },
  }),
})

export interface SpaceXProps<T extends ITheme = Theme> {
  spaceX?: SystemProp<ThemeSpace<T>, T>
}
export const spaceX = style<SpaceXProps>({
  prop: 'spaceX',
  themeGet: getSpace,
  css: (value) => ({
    '& > :not([hidden]) ~ :not([hidden])': {
      '--x-space-x-reverse': 0,
      marginRight: `calc(${value} * var(--x-space-x-reverse))`,
      marginLeft: `calc(${value} * calc(1 - var(--x-space-x-reverse)))`,
    },
  }),
})

export interface SpaceXReverseProps<T extends ITheme = Theme> {
  spaceXReverse?: SystemProp<boolean, T>
}
export const spaceXReverse = style<SpaceXReverseProps>({
  prop: 'spaceXReverse',
  css: () => ({
    '& > :not([hidden]) ~ :not([hidden])': {
      '--x-space-x-reverse': '1',
    },
  }),
})

export interface SpaceYReverseProps<T extends ITheme = Theme> {
  spaceYReverse?: SystemProp<boolean, T>
}
export const spaceYReverse = style<SpaceYReverseProps>({
  prop: 'spaceYReverse',
  css: () => ({
    '& > :not([hidden]) ~ :not([hidden])': {
      '--x-space-y-reverse': '1',
    },
  }),
})

export interface SpaceProps<T extends ITheme = Theme>
  extends MarginProps<T>,
    MarginTopProps<T>,
    MarginRightProps<T>,
    MarginBottomProps<T>,
    MarginLeftProps<T>,
    MarginXProps<T>,
    MarginYProps<T>,
    PaddingProps<T>,
    PaddingTopProps<T>,
    PaddingRightProps<T>,
    PaddingBottomProps<T>,
    PaddingLeftProps<T>,
    PaddingXProps<T>,
    PaddingYProps<T>,
    SpaceXProps<T>,
    SpaceYProps<T>,
    SpaceXReverseProps<T>,
    SpaceYReverseProps<T> {}

export const space = compose<SpaceProps>(
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  mx,
  my,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  px,
  py,
  spaceX,
  spaceY,
  spaceXReverse,
  spaceYReverse,
)

import * as CSS from 'csstype'
import { style, themeGetter, compose } from '../style'
import { getPx } from './units'
import { transformNegative } from '../unit'
import { ITheme, Theme, VariantsType, SystemProp } from '../types'

// Getters
export type SpaceGetter<T extends ITheme = Theme> = VariantsType<T['space']>
export const getSpace = themeGetter<SpaceGetter>({
  name: 'space',
  key: 'space',
  compose: getPx,
  transform: transformNegative,
})

// Styles

type MarginProp<T extends ITheme> = SystemProp<
  CSS.Property.Margin | SpaceGetter<T>,
  T
>
export interface MarginProps<T extends ITheme = Theme> {
  margin?: MarginProp<T>
  m?: MarginProp<T>
}
export const margin = style({
  prop: ['margin', 'm'],
  cssProperty: 'margin',
  themeGet: getSpace,
})

type MarginTopProp<T extends ITheme> = SystemProp<
  CSS.Property.MarginTop | SpaceGetter<T>,
  T
>
export interface MarginTopProps<T extends ITheme = Theme> {
  marginTop?: MarginTopProp<T>
  mt?: MarginTopProp<T>
}
export const marginTop = style({
  prop: ['marginTop', 'mt'],
  cssProperty: 'marginTop',
  themeGet: getSpace,
})

type MarginRightProp<T extends ITheme> = SystemProp<
  CSS.Property.MarginRight | SpaceGetter<T>,
  T
>
export interface MarginRightProps<T extends ITheme = Theme> {
  marginRight?: MarginRightProp<T>
  mr?: MarginRightProp<T>
}
export const marginRight = style({
  prop: ['marginRight', 'mr'],
  cssProperty: 'marginRight',
  themeGet: getSpace,
})

type MarginBottomProp<T extends ITheme> = SystemProp<
  CSS.Property.MarginBottom | SpaceGetter<T>,
  T
>
export interface MarginBottomProps<T extends ITheme = Theme> {
  marginBottom?: MarginBottomProp<T>
  mb?: MarginBottomProp<T>
}
export const marginBottom = style({
  prop: ['marginBottom', 'mb'],
  cssProperty: 'marginBottom',
  themeGet: getSpace,
})

type MarginLeftProp<T extends ITheme> = SystemProp<
  CSS.Property.MarginLeft | SpaceGetter<T>,
  T
>
export interface MarginLeftProps<T extends ITheme = Theme> {
  marginLeft?: MarginLeftProp<T>
  ml?: MarginLeftProp<T>
}
export const marginLeft = style({
  prop: ['marginLeft', 'ml'],
  cssProperty: 'marginLeft',
  themeGet: getSpace,
})

type MarginXProp<T extends ITheme = Theme> = SystemProp<
  (CSS.Property.MarginLeft & CSS.Property.MarginRight) | SpaceGetter<T>,
  T
>
export interface MarginXProps<T extends ITheme = Theme> {
  mx?: MarginXProp<T>
}
export const mx = style({
  prop: 'mx',
  cssProperty: ['marginRight', 'marginLeft'],
  themeGet: getSpace,
})

type MarginYProp<T extends ITheme> = SystemProp<
  (CSS.Property.MarginTop & CSS.Property.MarginBottom) | SpaceGetter<T>,
  T
>
export interface MarginYProps<T extends ITheme = Theme> {
  my?: MarginYProp<T>
}
export const my = style({
  prop: 'my',
  cssProperty: ['marginTop', 'marginBottom'],
  themeGet: getSpace,
})

// Padding

type PaddingProp<T extends ITheme> = SystemProp<
  CSS.Property.Padding | SpaceGetter<T>,
  T
>
export interface PaddingProps<T extends ITheme = Theme> {
  padding?: PaddingProp<T>
  p?: PaddingProp<T>
}
export const padding = style({
  prop: ['padding', 'p'],
  cssProperty: 'padding',
  themeGet: getSpace,
})

type PaddingTopProp<T extends ITheme> = SystemProp<
  CSS.Property.PaddingTop | SpaceGetter<T>,
  T
>
export interface PaddingTopProps<T extends ITheme = Theme> {
  paddingTop?: PaddingTopProp<T>
  pt?: PaddingTopProp<T>
}
export const paddingTop = style({
  prop: ['paddingTop', 'pt'],
  cssProperty: 'paddingTop',
  themeGet: getSpace,
})

type PaddingRightProp<T extends ITheme> = SystemProp<
  CSS.Property.PaddingRight | SpaceGetter<T>,
  T
>
export interface PaddingRightProps<T extends ITheme = Theme> {
  paddingRight?: PaddingRightProp<T>
  pr?: PaddingRightProp<T>
}
export const paddingRight = style({
  prop: ['paddingRight', 'pr'],
  cssProperty: 'paddingRight',
  themeGet: getSpace,
})

type PaddingBottomProp<T extends ITheme> = SystemProp<
  CSS.Property.PaddingBottom | SpaceGetter<T>,
  T
>
export interface PaddingBottomProps<T extends ITheme = Theme> {
  paddingBottom?: PaddingBottomProp<T>
  pb?: PaddingBottomProp<T>
}
export const paddingBottom = style({
  prop: ['paddingBottom', 'pb'],
  cssProperty: 'paddingBottom',
  themeGet: getSpace,
})

type PaddingLeftProp<T extends ITheme> = SystemProp<
  CSS.Property.PaddingLeft | SpaceGetter<T>,
  T
>
export interface PaddingLeftProps<T extends ITheme = Theme> {
  paddingLeft?: PaddingLeftProp<T>
  pl?: PaddingLeftProp<T>
}
export const paddingLeft = style({
  prop: ['paddingLeft', 'pl'],
  cssProperty: 'paddingLeft',
  themeGet: getSpace,
})

type PaddingXProp<T extends ITheme> = SystemProp<
  (CSS.Property.PaddingLeft & CSS.Property.PaddingRight) | SpaceGetter<T>,
  T
>
export interface PaddingXProps<T extends ITheme = Theme> {
  px?: PaddingXProp<T>
}
export const px = style({
  prop: 'px',
  cssProperty: ['paddingRight', 'paddingLeft'],
  themeGet: getSpace,
})

type PaddingYProp<T extends ITheme> = SystemProp<
  (CSS.Property.PaddingTop & CSS.Property.PaddingBottom) | SpaceGetter<T>,
  T
>
export interface PaddingYProps<T extends ITheme = Theme> {
  py?: PaddingYProp<T>
}
export const py = style({
  prop: 'py',
  cssProperty: ['paddingTop', 'paddingBottom'],
  themeGet: getSpace,
})

type SpaceYProp<T extends ITheme> = SystemProp<SpaceGetter<T>, T>
export interface SpaceYProps<T extends ITheme = Theme> {
  spaceY?: SpaceYProp<T>
}
export const spaceY = style({
  prop: 'spaceY',
  themeGet: getSpace,
  cssProperty: (value) => ({
    '& > :not([hidden]) ~ :not([hidden])': {
      '--x-space-y-reverse': 0,
      marginTop: `calc(${value} * calc(1 - var(--x-space-y-reverse)))`,
      marginBottom: `calc(${value} * var(--x-space-y-reverse))`,
    },
  }),
})

type SpaceXProp<T extends ITheme> = SystemProp<SpaceGetter<T>, T>
export interface SpaceXProps<T extends ITheme = Theme> {
  spaceX?: SpaceXProp<T>
}
export const spaceX = style({
  prop: 'spaceX',
  themeGet: getSpace,
  cssProperty: (value) => ({
    '& > :not([hidden]) ~ :not([hidden])': {
      '--x-space-x-reverse': 0,
      marginRight: `calc(${value} * var(--x-space-x-reverse))`,
      marginLeft: `calc(${value} * calc(1 - var(--x-space-x-reverse)))`,
    },
  }),
})

type SpaceXReverseProp<T extends ITheme> = SystemProp<boolean, T>
export interface SpaceXReverseProps<T extends ITheme = Theme> {
  spaceXReverse?: SpaceXReverseProp<T>
}
export const spaceXReverse = style({
  prop: 'spaceXReverse',
  cssProperty: () => ({
    '& > :not([hidden]) ~ :not([hidden])': {
      '--x-space-x-reverse': '1',
    },
  }),
})

type SpaceYReverseProp<T extends ITheme> = SystemProp<boolean, T>
export interface SpaceYReverseProps<T extends ITheme = Theme> {
  spaceYReverse?: SpaceYReverseProp<T>
}
export const spaceYReverse = style({
  prop: 'spaceYReverse',
  cssProperty: () => ({
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

export const space = compose(
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

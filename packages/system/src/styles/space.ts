import * as CSS from 'csstype'
import { is, string, negative, getThemeValue } from '@xstyled/util'
import { style, themeGetter, compose } from '../style'
import { getPx } from './basics'
import {
  ExtractThemeProperty,
  VariantsType,
  SystemProperty,
  Variants,
} from '../types'

function toNegative(value: string | number) {
  if (string(value)) return `-${value}`
  return value * -1
}

// Getters
const defaultSpaceVariants = <const>[0, 4, 8, 16, 24, 48, 96, 144, 192, 240]
export type SpaceGetter<T = {}> = VariantsType<
  ExtractThemeProperty<T, 'space'> extends Variants
    ? ExtractThemeProperty<T, 'space'>
    : typeof defaultSpaceVariants
>
export const getSpace = themeGetter({
  name: 'space',
  key: 'space',
  defaultVariants: defaultSpaceVariants,
  compose: getPx,
  transform: (_, { rawValue, variants, props }) => {
    if (string(rawValue)) {
      const neg = rawValue.startsWith('-')
      const absoluteValue = neg ? rawValue.substr(1) : rawValue
      const variantValue = getThemeValue(props, absoluteValue, variants)
      const value = is(variantValue) ? variantValue : absoluteValue
      return neg ? toNegative(value) : value
    }
    const abs = Math.abs(rawValue)
    const neg = negative(rawValue)
    const value = is(variants[abs]) ? variants[abs] : abs
    return neg ? toNegative(value) : value
  },
})

// Styles

type Margin<T> = SystemProperty<CSS.Property.Margin | SpaceGetter<T>, T>
export interface MarginProps<T = {}> {
  margin?: Margin<T>
  m?: Margin<T>
}
export const margin = style<MarginProps>({
  prop: ['margin', 'm'],
  cssProperty: 'margin',
  themeGet: getSpace,
})

type MarginTop<T> = SystemProperty<CSS.Property.MarginTop | SpaceGetter<T>, T>
export interface MarginTopProps<T = {}> {
  marginTop?: MarginTop<T>
  mt?: MarginTop<T>
}
export const marginTop = style<MarginTopProps>({
  prop: ['marginTop', 'mt'],
  cssProperty: 'marginTop',
  themeGet: getSpace,
})

type MarginRight<T> = SystemProperty<
  CSS.Property.MarginRight | SpaceGetter<T>,
  T
>
export interface MarginRightProps<T = {}> {
  marginRight?: MarginRight<T>
  mr?: MarginRight<T>
}
export const marginRight = style<MarginRightProps>({
  prop: ['marginRight', 'mr'],
  cssProperty: 'marginRight',
  themeGet: getSpace,
})

type MarginBottom<T> = SystemProperty<
  CSS.Property.MarginBottom | SpaceGetter<T>,
  T
>
export interface MarginBottomProps<T = {}> {
  marginBottom?: MarginBottom<T>
  mb?: MarginBottom<T>
}
export const marginBottom = style<MarginBottomProps>({
  prop: ['marginBottom', 'mb'],
  cssProperty: 'marginBottom',
  themeGet: getSpace,
})

type MarginLeft<T> = SystemProperty<CSS.Property.MarginLeft | SpaceGetter<T>, T>
export interface MarginLeftProps<T = {}> {
  marginLeft?: MarginLeft<T>
  ml?: MarginLeft<T>
}
export const marginLeft = style<MarginLeftProps>({
  prop: ['marginLeft', 'ml'],
  cssProperty: 'marginLeft',
  themeGet: getSpace,
})

type MarginX<T> = SystemProperty<
  (CSS.Property.MarginLeft & CSS.Property.MarginRight) | SpaceGetter<T>,
  T
>
export interface MarginXProps<T = {}> {
  mx?: MarginX<T>
}
export const mx = style<MarginXProps>({
  prop: 'mx',
  cssProperty: ['marginRight', 'marginLeft'],
  themeGet: getSpace,
})

type MarginY<T> = SystemProperty<
  (CSS.Property.MarginTop & CSS.Property.MarginBottom) | SpaceGetter<T>,
  T
>
export interface MarginYProps<T = {}> {
  my?: MarginY<T>
}
export const my = style<MarginYProps>({
  prop: 'my',
  cssProperty: ['marginTop', 'marginBottom'],
  themeGet: getSpace,
})

type Padding<T> = SystemProperty<CSS.Property.Padding | SpaceGetter<T>, T>
export interface PaddingProps<T = {}> {
  p?: Padding<T>
  padding?: Padding<T>
}
export const padding = style<PaddingProps>({
  prop: ['padding', 'p'],
  cssProperty: 'padding',
  themeGet: getSpace,
})

type PaddingTop<T> = SystemProperty<CSS.Property.PaddingTop | SpaceGetter<T>, T>
export interface PaddingTopProps<T = {}> {
  pt?: PaddingTop<T>
  paddingTop?: PaddingTop<T>
}
export const paddingTop = style<PaddingTopProps>({
  prop: ['paddingTop', 'pt'],
  cssProperty: 'paddingTop',
  themeGet: getSpace,
})

type PaddingRight<T> = SystemProperty<
  CSS.Property.PaddingRight | SpaceGetter<T>,
  T
>
export interface PaddingRightProps<T = {}> {
  pr?: PaddingRight<T>
  paddingRight?: PaddingRight<T>
}
export const paddingRight = style<PaddingRightProps>({
  prop: ['paddingRight', 'pr'],
  cssProperty: 'paddingRight',
  themeGet: getSpace,
})

type PaddingBottom<T> = SystemProperty<
  CSS.Property.PaddingBottom | SpaceGetter<T>,
  T
>
export interface PaddingBottomProps<T = {}> {
  pb?: PaddingBottom<T>
  paddingBottom?: PaddingBottom<T>
}
export const paddingBottom = style<PaddingBottomProps>({
  prop: ['paddingBottom', 'pb'],
  cssProperty: 'paddingBottom',
  themeGet: getSpace,
})

type PaddingLeft<T> = SystemProperty<
  CSS.Property.PaddingLeft | SpaceGetter<T>,
  T
>
export interface PaddingLeftProps<T = {}> {
  pl?: PaddingLeft<T>
  paddingLeft?: PaddingLeft<T>
}
export const paddingLeft = style<PaddingLeftProps>({
  prop: ['paddingLeft', 'pl'],
  cssProperty: 'paddingLeft',
  themeGet: getSpace,
})

type PaddingX<T> = SystemProperty<
  (CSS.Property.PaddingLeft & CSS.Property.PaddingRight) | SpaceGetter<T>,
  T
>
export interface PaddingXProps<T = {}> {
  px?: PaddingX<T>
}
export const px = style<PaddingXProps>({
  prop: 'px',
  cssProperty: ['paddingRight', 'paddingLeft'],
  themeGet: getSpace,
})

type PaddingY<T> = SystemProperty<
  (CSS.Property.PaddingTop & CSS.Property.PaddingBottom) | SpaceGetter<T>,
  T
>
export interface PaddingYProps<T = {}> {
  py?: PaddingY<T>
}
export const py = style<PaddingYProps>({
  prop: 'py',
  cssProperty: ['paddingTop', 'paddingBottom'],
  themeGet: getSpace,
})

export type SpaceProps<T = {}> = MarginProps<T> &
  MarginTopProps<T> &
  MarginRightProps<T> &
  MarginBottomProps<T> &
  MarginLeftProps<T> &
  MarginXProps<T> &
  MarginYProps<T> &
  PaddingProps<T> &
  PaddingTopProps<T> &
  PaddingRightProps<T> &
  PaddingBottomProps<T> &
  PaddingLeftProps<T> &
  PaddingXProps<T> &
  PaddingYProps<T>
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
)

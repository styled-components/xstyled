import * as CSS from 'csstype'
import { style, themeGetter, compose, createStyleGenerator } from '../style'
import { getPx } from './units'
import { transformNegative } from '../unit'
import { ExtractThemeProperty, VariantsType, SystemProperty } from '../types'

// Getters
export type SpaceGetter<T = {}> = VariantsType<ExtractThemeProperty<T, 'space'>>
export const getSpace = themeGetter({
  name: 'space',
  key: 'space',
  compose: getPx,
  transform: transformNegative,
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

export interface SpaceYProps<T = {}> {
  spaceY?: SystemProperty<SpaceGetter<T>, T>
}
export const spaceY = createStyleGenerator<SpaceYProps>(
  (props) => {
    const value = getSpace(props.spaceY)(props)
    return {
      '& > :not([hidden]) ~ :not([hidden])': {
        '--x-space-y-reverse': 0,
        marginTop: `calc(${value} * calc(1 - var(--x-space-y-reverse)))`,
        marginBottom: `calc(${value} * var(--x-space-y-reverse))`,
      },
    }
  },
  ['spaceY'],
)

export interface SpaceXProps<T = {}> {
  spaceX?: SystemProperty<SpaceGetter<T>, T>
}
export const spaceX = createStyleGenerator<SpaceXProps>(
  (props) => {
    const value = getSpace(props.spaceX)(props)
    return {
      '& > :not([hidden]) ~ :not([hidden])': {
        '--x-space-x-reverse': 0,
        marginRight: `calc(${value} * var(--x-space-x-reverse))`,
        marginLeft: `calc(${value} * calc(1 - var(--x-space-x-reverse)))`,
      },
    }
  },
  ['spaceX'],
)

export interface SpaceXReverseProps<T = {}> {
  spaceXReverse?: SystemProperty<boolean, T>
}
export const spaceXReverse = createStyleGenerator<SpaceXReverseProps>(
  (props) => {
    if (!props.spaceXReverse) return null
    return {
      '& > :not([hidden]) ~ :not([hidden])': {
        '--x-space-x-reverse': '1',
      },
    }
  },
  ['spaceXReverse'],
)

export interface SpaceYReverseProps<T = {}> {
  spaceYReverse?: SystemProperty<boolean, T>
}
export const spaceYReverse = createStyleGenerator<SpaceYReverseProps>(
  (props) => {
    if (!props.spaceYReverse) return null
    return {
      '& > :not([hidden]) ~ :not([hidden])': {
        '--x-space-y-reverse': '1',
      },
    }
  },
  ['spaceYReverse'],
)

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
  PaddingYProps<T> &
  SpaceXProps<T> &
  SpaceYProps<T> &
  SpaceXReverseProps<T> &
  SpaceYReverseProps<T>
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

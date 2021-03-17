import * as CSS from 'csstype'
import { SystemProp, VariantsType, ITheme, Theme } from '../types'
import { style, compose, themeGetter } from '../style'
import { rpx } from '../unit'
import { getPx } from './units'
import { getColor, ColorGetter } from './colors'

// Getters

export type FontGetter<T extends ITheme = Theme> = VariantsType<T['fonts']>
export const getFont = themeGetter<FontGetter>({ name: 'font', key: 'fonts' })

export type LineHeightGetter<T extends ITheme = Theme> = VariantsType<
  T['lineHeights']
>
export const getLineHeight = themeGetter<LineHeightGetter>({
  name: 'lineHeight',
  key: 'lineHeights',
  transform: (value: number | string, { props }) => {
    const rootFontSize = props?.theme?.settings?.rootFontSize ?? undefined
    return rpx(value, { rootFontSize })
  },
})

export type FontWeightGetter<T extends ITheme = Theme> = VariantsType<
  T['fontWeights']
>
export const getFontWeight = themeGetter<FontWeightGetter>({
  name: 'fontWeight',
  key: 'fontWeights',
})

export type LetterSpacingGetter<T extends ITheme = Theme> = VariantsType<
  T['letterSpacings']
>
export const getLetterSpacing = themeGetter<LetterSpacingGetter>({
  name: 'letterSpacing',
  key: 'letterSpacings',
  compose: getPx,
})

export type FontSizeGetter<T extends ITheme = Theme> = VariantsType<
  T['fontSizes']
>
export const getFontSize = themeGetter<FontSizeGetter>({
  name: 'fontSize',
  key: 'fontSizes',
  compose: getPx,
})

// Font properties

type FontFamilyProp<T extends ITheme> = SystemProp<
  FontGetter<T> | CSS.Property.FontFamily,
  T
>
export interface FontFamilyProps<T extends ITheme = Theme> {
  fontFamily?: FontFamilyProp<T>
}
export const fontFamily = style({
  prop: 'fontFamily',
  themeGet: getFont,
})

type FontSizeProp<T extends ITheme> = SystemProp<
  FontSizeGetter<T> | CSS.Property.FontSize,
  T
>
export interface FontSizeProps<T extends ITheme = Theme> {
  fontSize?: FontSizeProp<T>
}
export const fontSize = style({
  prop: 'fontSize',
  themeGet: getFontSize,
})

type LineHeightProp<T extends ITheme> = SystemProp<
  LineHeightGetter<T> | CSS.Property.LineHeight,
  T
>
export interface LineHeightProps<T extends ITheme = Theme> {
  lineHeight?: LineHeightProp<T>
}
export const lineHeight = style({
  prop: 'lineHeight',
  themeGet: getLineHeight,
})

type FontWeightProp<T extends ITheme> = SystemProp<
  FontWeightGetter<T> | CSS.Property.FontWeight,
  T
>
export interface FontWeightProps<T extends ITheme = Theme> {
  fontWeight?: FontWeightProp<T>
}
export const fontWeight = style({
  prop: 'fontWeight',
  themeGet: getFontWeight,
})

type FontStyleProp<T extends ITheme> = SystemProp<CSS.Property.FontStyle, T>
export interface FontStyleProps<T extends ITheme = Theme> {
  fontStyle?: FontStyleProp<T>
}
export const fontStyle = style({
  prop: 'fontStyle',
})

type LetterSpacingProp<T extends ITheme> = SystemProp<
  LetterSpacingGetter<T> | CSS.Property.LetterSpacing,
  T
>
export interface LetterSpacingProps<T extends ITheme = Theme> {
  letterSpacing?: LetterSpacingProp<T>
}
export const letterSpacing = style({
  prop: 'letterSpacing',
  themeGet: getLetterSpacing,
})

// Color

type ColorProp<T extends ITheme> = SystemProp<
  ColorGetter<T> | CSS.Property.Color,
  T
>
export interface ColorProps<T extends ITheme = Theme> {
  color?: ColorProp<T>
}
export const color = style({
  prop: 'color',
  themeGet: getColor,
})

// Text Transform

type TextTransformProp<T extends ITheme> = SystemProp<
  CSS.Property.TextTransform,
  T
>
export interface TextTransformProps<T extends ITheme = Theme> {
  textTransform?: TextTransformProp<T>
}
export const textTransform = style({
  prop: 'textTransform',
})

// Text Decoration

type TextDecorationProp<T extends ITheme> = SystemProp<
  CSS.Property.TextDecoration,
  T
>
export interface TextDecorationProps<T extends ITheme = Theme> {
  textDecoration?: TextDecorationProp<T>
}
export const textDecoration = style({
  prop: 'textDecoration',
})

// @TODO add text decoration variants

// Align

type TextAlignProp<T extends ITheme> = SystemProp<CSS.Property.TextAlign, T>
export interface TextAlignProps<T extends ITheme = Theme> {
  textAlign?: TextAlignProp<T>
}
export const textAlign = style({
  prop: 'textAlign',
})

type VerticalAlignProp<T extends ITheme> = SystemProp<
  CSS.Property.VerticalAlign,
  T
>
export interface VerticalAlignProps<T extends ITheme = Theme> {
  verticalAlign?: VerticalAlignProp<T>
}
export const verticalAlign = style({
  prop: 'verticalAlign',
})

// WhiteSpace

type WhiteSpaceProp<T extends ITheme> = SystemProp<CSS.Property.WhiteSpace, T>
export interface WhiteSpaceProps<T extends ITheme = Theme> {
  whiteSpace?: WhiteSpaceProp<T>
}
export const whiteSpace = style({
  prop: 'whiteSpace',
})

// Overflow

type TextOverflowProp<T extends ITheme> = SystemProp<
  CSS.Property.TextOverflow,
  T
>
export interface TextOverflowProps<T extends ITheme = Theme> {
  textOverflow?: TextOverflowProp<T>
}
export const textOverflow = style({
  prop: 'textOverflow',
})

// List

type ListStyleTypeProp<T extends ITheme> = SystemProp<
  CSS.Property.ListStyleType,
  T
>
export interface ListStyleTypeProps<T extends ITheme = Theme> {
  listStyleType?: ListStyleTypeProp<T>
}
export const listStyleType = style({
  prop: 'listStyleType',
})

type ListStylePositionProp<T extends ITheme> = SystemProp<
  CSS.Property.ListStylePosition,
  T
>
export interface ListStylePositionProps<T extends ITheme = Theme> {
  listStylePosition?: ListStylePositionProp<T>
}
export const listStylePosition = style({
  prop: 'listStylePosition',
})

// @TODO add word-break
// @TODO add overflow-wrap

export interface TypographyProps<T extends ITheme = Theme>
  extends FontFamilyProps<T>,
    FontSizeProps<T>,
    FontStyleProps<T>,
    LineHeightProps<T>,
    FontWeightProps<T>,
    TextAlignProps<T>,
    LetterSpacingProps<T>,
    ColorProps<T>,
    TextTransformProps<T>,
    TextDecorationProps<T>,
    VerticalAlignProps<T>,
    WhiteSpaceProps<T>,
    TextOverflowProps<T>,
    ListStyleTypeProps<T>,
    ListStylePositionProps<T> {}
export const typography = compose(
  fontFamily,
  fontSize,
  fontStyle,
  lineHeight,
  fontWeight,
  textAlign,
  letterSpacing,
  color,
  textTransform,
  textDecoration,
  verticalAlign,
  whiteSpace,
  textOverflow,
  listStyleType,
  listStylePosition,
)

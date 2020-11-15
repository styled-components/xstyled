import * as CSS from 'csstype'
import {
  SystemProperty,
  VariantsType,
  ExtractThemeProperty,
  Variants,
} from '../types'
import { style, compose, themeGetter } from '../style'
import { rpx } from '../unit'
import { getColor, ColorGetter, getPx } from './basics'

// Getters

export type FontGetter<T = {}> = VariantsType<ExtractThemeProperty<T, 'fonts'>>
export const getFont = themeGetter({ name: 'font', key: 'fonts' })

export type LineHeightGetter<T = {}> = VariantsType<
  ExtractThemeProperty<T, 'lineHeights'>
>
export const getLineHeight = themeGetter({
  name: 'lineHeight',
  key: 'lineHeights',
  transform: rpx,
})

export type FontWeightGetter<T = {}> = VariantsType<
  ExtractThemeProperty<T, 'fontWeights'>
>
export const getFontWeight = themeGetter({
  name: 'fontWeight',
  key: 'fontWeights',
})

export type LetterSpacingGetter<T = {}> = VariantsType<
  ExtractThemeProperty<T, 'letterSpacings'>
>
export const getLetterSpacing = themeGetter({
  name: 'letterSpacing',
  key: 'letterSpacings',
  compose: getPx,
})

const defaultFontSizeVariants = <const>[0, 12, 14, 16, 20, 24, 32, 48, 64, 72]
export type FontSizeGetter<
  T = {},
  V = ExtractThemeProperty<T, 'fontSizes'>
> = VariantsType<V extends Variants ? V : typeof defaultFontSizeVariants>
export const getFontSize = themeGetter({
  name: 'fontSize',
  key: 'fontSizes',
  defaultVariants: defaultFontSizeVariants,
  compose: getPx,
})

// Styles

export interface FontFamilyProps<T = {}> {
  fontFamily?: SystemProperty<FontGetter<T> | CSS.Property.FontFamily, T>
}
export const fontFamily = style<FontFamilyProps>({
  prop: 'fontFamily',
  themeGet: getFont,
})

export interface FontSizeProps<T = {}> {
  fontSize?: SystemProperty<FontSizeGetter<T> | CSS.Property.FontSize, T>
}
export const fontSize = style<FontSizeProps>({
  prop: 'fontSize',
  themeGet: getFontSize,
})

export interface LineHeightProps<T = {}> {
  lineHeight?: SystemProperty<LineHeightGetter<T> | CSS.Property.LineHeight, T>
}
export const lineHeight = style<LineHeightProps>({
  prop: 'lineHeight',
  themeGet: getLineHeight,
})

export interface FontWeightProps<T = {}> {
  fontWeight?: SystemProperty<FontWeightGetter<T> | CSS.Property.FontWeight, T>
}
export const fontWeight = style<FontWeightProps>({
  prop: 'fontWeight',
  themeGet: getFontWeight,
})

export interface FontStyleProps<T = {}> {
  fontStyle?: SystemProperty<CSS.Property.FontStyle, T>
}
export const fontStyle = style<FontStyleProps>({
  prop: 'fontStyle',
})

export interface TextAlignProps<T = {}> {
  textAlign?: SystemProperty<CSS.Property.TextAlign, T>
}
export const textAlign = style<TextAlignProps>({
  prop: 'textAlign',
})

export interface LetterSpacingProps<T = {}> {
  letterSpacing?: SystemProperty<CSS.Property.LetterSpacing, T>
}
export const letterSpacing = style<LetterSpacingProps>({
  prop: 'letterSpacing',
  themeGet: getLetterSpacing,
})

export interface ColorProps<T = {}> {
  color?: SystemProperty<ColorGetter<T> | CSS.Property.Color, T>
}
export const color = style<ColorProps>({
  prop: 'color',
  themeGet: getColor,
})

export interface TextTransformProps<T = {}> {
  textTransform?: SystemProperty<CSS.Property.TextTransform, T>
}
export const textTransform = style<TextTransformProps>({
  prop: 'textTransform',
})

export type TypographyProps<T = {}> = FontFamilyProps<T> &
  FontSizeProps<T> &
  FontStyleProps<T> &
  LineHeightProps<T> &
  FontWeightProps<T> &
  TextAlignProps<T> &
  LetterSpacingProps<T> &
  ColorProps<T> &
  TextTransformProps<T>
export const typography = compose<TypographyProps>(
  fontFamily,
  fontSize,
  fontStyle,
  lineHeight,
  fontWeight,
  textAlign,
  letterSpacing,
  color,
  textTransform,
)

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
  motionSafeFontFamily?: FontFamilyProp<T>
  motionReduceFontFamily?: FontFamilyProp<T>
  firstFontFamily?: FontFamilyProp<T>
  lastFontFamily?: FontFamilyProp<T>
  oddFontFamily?: FontFamilyProp<T>
  evenFontFamily?: FontFamilyProp<T>
  visitedFontFamily?: FontFamilyProp<T>
  checkedFontFamily?: FontFamilyProp<T>
  focusWithinFontFamily?: FontFamilyProp<T>
  hoverFontFamily?: FontFamilyProp<T>
  focusFontFamily?: FontFamilyProp<T>
  focusVisibleFontFamily?: FontFamilyProp<T>
  activeFontFamily?: FontFamilyProp<T>
  disabledFontFamily?: FontFamilyProp<T>
  placeholderFontFamily?: FontFamilyProp<T>
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
  motionSafeFontSize?: FontSizeProp<T>
  motionReduceFontSize?: FontSizeProp<T>
  firstFontSize?: FontSizeProp<T>
  lastFontSize?: FontSizeProp<T>
  oddFontSize?: FontSizeProp<T>
  evenFontSize?: FontSizeProp<T>
  visitedFontSize?: FontSizeProp<T>
  checkedFontSize?: FontSizeProp<T>
  focusWithinFontSize?: FontSizeProp<T>
  hoverFontSize?: FontSizeProp<T>
  focusFontSize?: FontSizeProp<T>
  focusVisibleFontSize?: FontSizeProp<T>
  activeFontSize?: FontSizeProp<T>
  disabledFontSize?: FontSizeProp<T>
  placeholderFontSize?: FontSizeProp<T>
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
  motionSafeLineHeight?: LineHeightProp<T>
  motionReduceLineHeight?: LineHeightProp<T>
  firstLineHeight?: LineHeightProp<T>
  lastLineHeight?: LineHeightProp<T>
  oddLineHeight?: LineHeightProp<T>
  evenLineHeight?: LineHeightProp<T>
  visitedLineHeight?: LineHeightProp<T>
  checkedLineHeight?: LineHeightProp<T>
  focusWithinLineHeight?: LineHeightProp<T>
  hoverLineHeight?: LineHeightProp<T>
  focusLineHeight?: LineHeightProp<T>
  focusVisibleLineHeight?: LineHeightProp<T>
  activeLineHeight?: LineHeightProp<T>
  disabledLineHeight?: LineHeightProp<T>
  placeholderLineHeight?: LineHeightProp<T>
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
  motionSafeFontWeight?: FontWeightProp<T>
  motionReduceFontWeight?: FontWeightProp<T>
  firstFontWeight?: FontWeightProp<T>
  lastFontWeight?: FontWeightProp<T>
  oddFontWeight?: FontWeightProp<T>
  evenFontWeight?: FontWeightProp<T>
  visitedFontWeight?: FontWeightProp<T>
  checkedFontWeight?: FontWeightProp<T>
  focusWithinFontWeight?: FontWeightProp<T>
  hoverFontWeight?: FontWeightProp<T>
  focusFontWeight?: FontWeightProp<T>
  focusVisibleFontWeight?: FontWeightProp<T>
  activeFontWeight?: FontWeightProp<T>
  disabledFontWeight?: FontWeightProp<T>
  placeholderFontWeight?: FontWeightProp<T>
}
export const fontWeight = style({
  prop: 'fontWeight',
  themeGet: getFontWeight,
})

type FontStyleProp<T extends ITheme> = SystemProp<CSS.Property.FontStyle, T>
export interface FontStyleProps<T extends ITheme = Theme> {
  fontStyle?: FontStyleProp<T>
  motionSafeFontStyle?: FontStyleProp<T>
  motionReduceFontStyle?: FontStyleProp<T>
  firstFontStyle?: FontStyleProp<T>
  lastFontStyle?: FontStyleProp<T>
  oddFontStyle?: FontStyleProp<T>
  evenFontStyle?: FontStyleProp<T>
  visitedFontStyle?: FontStyleProp<T>
  checkedFontStyle?: FontStyleProp<T>
  focusWithinFontStyle?: FontStyleProp<T>
  hoverFontStyle?: FontStyleProp<T>
  focusFontStyle?: FontStyleProp<T>
  focusVisibleFontStyle?: FontStyleProp<T>
  activeFontStyle?: FontStyleProp<T>
  disabledFontStyle?: FontStyleProp<T>
  placeholderFontStyle?: FontStyleProp<T>
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
  motionSafeLetterSpacing?: LetterSpacingProp<T>
  motionReduceLetterSpacing?: LetterSpacingProp<T>
  firstLetterSpacing?: LetterSpacingProp<T>
  lastLetterSpacing?: LetterSpacingProp<T>
  oddLetterSpacing?: LetterSpacingProp<T>
  evenLetterSpacing?: LetterSpacingProp<T>
  visitedLetterSpacing?: LetterSpacingProp<T>
  checkedLetterSpacing?: LetterSpacingProp<T>
  focusWithinLetterSpacing?: LetterSpacingProp<T>
  hoverLetterSpacing?: LetterSpacingProp<T>
  focusLetterSpacing?: LetterSpacingProp<T>
  focusVisibleLetterSpacing?: LetterSpacingProp<T>
  activeLetterSpacing?: LetterSpacingProp<T>
  disabledLetterSpacing?: LetterSpacingProp<T>
  placeholderLetterSpacing?: LetterSpacingProp<T>
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
  motionSafeColor?: ColorProp<T>
  motionReduceColor?: ColorProp<T>
  firstColor?: ColorProp<T>
  lastColor?: ColorProp<T>
  oddColor?: ColorProp<T>
  evenColor?: ColorProp<T>
  visitedColor?: ColorProp<T>
  checkedColor?: ColorProp<T>
  focusWithinColor?: ColorProp<T>
  hoverColor?: ColorProp<T>
  focusColor?: ColorProp<T>
  focusVisibleColor?: ColorProp<T>
  activeColor?: ColorProp<T>
  disabledColor?: ColorProp<T>
  placeholderColor?: ColorProp<T>
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
  motionSafeTextTransform?: TextTransformProp<T>
  motionReduceTextTransform?: TextTransformProp<T>
  firstTextTransform?: TextTransformProp<T>
  lastTextTransform?: TextTransformProp<T>
  oddTextTransform?: TextTransformProp<T>
  evenTextTransform?: TextTransformProp<T>
  visitedTextTransform?: TextTransformProp<T>
  checkedTextTransform?: TextTransformProp<T>
  focusWithinTextTransform?: TextTransformProp<T>
  hoverTextTransform?: TextTransformProp<T>
  focusTextTransform?: TextTransformProp<T>
  focusVisibleTextTransform?: TextTransformProp<T>
  activeTextTransform?: TextTransformProp<T>
  disabledTextTransform?: TextTransformProp<T>
  placeholderTextTransform?: TextTransformProp<T>
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
  motionSafeTextDecoration?: TextDecorationProp<T>
  motionReduceTextDecoration?: TextDecorationProp<T>
  firstTextDecoration?: TextDecorationProp<T>
  lastTextDecoration?: TextDecorationProp<T>
  oddTextDecoration?: TextDecorationProp<T>
  evenTextDecoration?: TextDecorationProp<T>
  visitedTextDecoration?: TextDecorationProp<T>
  checkedTextDecoration?: TextDecorationProp<T>
  focusWithinTextDecoration?: TextDecorationProp<T>
  hoverTextDecoration?: TextDecorationProp<T>
  focusTextDecoration?: TextDecorationProp<T>
  focusVisibleTextDecoration?: TextDecorationProp<T>
  activeTextDecoration?: TextDecorationProp<T>
  disabledTextDecoration?: TextDecorationProp<T>
  placeholderTextDecoration?: TextDecorationProp<T>
}
export const textDecoration = style({
  prop: 'textDecoration',
})

// @TODO add text decoration variants

// Align

type TextAlignProp<T extends ITheme> = SystemProp<CSS.Property.TextAlign, T>
export interface TextAlignProps<T extends ITheme = Theme> {
  textAlign?: TextAlignProp<T>
  motionSafeTextAlign?: TextAlignProp<T>
  motionReduceTextAlign?: TextAlignProp<T>
  firstTextAlign?: TextAlignProp<T>
  lastTextAlign?: TextAlignProp<T>
  oddTextAlign?: TextAlignProp<T>
  evenTextAlign?: TextAlignProp<T>
  visitedTextAlign?: TextAlignProp<T>
  checkedTextAlign?: TextAlignProp<T>
  focusWithinTextAlign?: TextAlignProp<T>
  hoverTextAlign?: TextAlignProp<T>
  focusTextAlign?: TextAlignProp<T>
  focusVisibleTextAlign?: TextAlignProp<T>
  activeTextAlign?: TextAlignProp<T>
  disabledTextAlign?: TextAlignProp<T>
  placeholderTextAlign?: TextAlignProp<T>
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
  motionSafeVerticalAlign?: VerticalAlignProp<T>
  motionReduceVerticalAlign?: VerticalAlignProp<T>
  firstVerticalAlign?: VerticalAlignProp<T>
  lastVerticalAlign?: VerticalAlignProp<T>
  oddVerticalAlign?: VerticalAlignProp<T>
  evenVerticalAlign?: VerticalAlignProp<T>
  visitedVerticalAlign?: VerticalAlignProp<T>
  checkedVerticalAlign?: VerticalAlignProp<T>
  focusWithinVerticalAlign?: VerticalAlignProp<T>
  hoverVerticalAlign?: VerticalAlignProp<T>
  focusVerticalAlign?: VerticalAlignProp<T>
  focusVisibleVerticalAlign?: VerticalAlignProp<T>
  activeVerticalAlign?: VerticalAlignProp<T>
  disabledVerticalAlign?: VerticalAlignProp<T>
  placeholderVerticalAlign?: VerticalAlignProp<T>
}
export const verticalAlign = style({
  prop: 'verticalAlign',
})

// WhiteSpace

type WhiteSpaceProp<T extends ITheme> = SystemProp<CSS.Property.WhiteSpace, T>
export interface WhiteSpaceProps<T extends ITheme = Theme> {
  whiteSpace?: WhiteSpaceProp<T>
  motionSafeWhiteSpace?: WhiteSpaceProp<T>
  motionReduceWhiteSpace?: WhiteSpaceProp<T>
  firstWhiteSpace?: WhiteSpaceProp<T>
  lastWhiteSpace?: WhiteSpaceProp<T>
  oddWhiteSpace?: WhiteSpaceProp<T>
  evenWhiteSpace?: WhiteSpaceProp<T>
  visitedWhiteSpace?: WhiteSpaceProp<T>
  checkedWhiteSpace?: WhiteSpaceProp<T>
  focusWithinWhiteSpace?: WhiteSpaceProp<T>
  hoverWhiteSpace?: WhiteSpaceProp<T>
  focusWhiteSpace?: WhiteSpaceProp<T>
  focusVisibleWhiteSpace?: WhiteSpaceProp<T>
  activeWhiteSpace?: WhiteSpaceProp<T>
  disabledWhiteSpace?: WhiteSpaceProp<T>
  placeholderWhiteSpace?: WhiteSpaceProp<T>
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
  motionSafeTextOverflow?: TextOverflowProp<T>
  motionReduceTextOverflow?: TextOverflowProp<T>
  firstTextOverflow?: TextOverflowProp<T>
  lastTextOverflow?: TextOverflowProp<T>
  oddTextOverflow?: TextOverflowProp<T>
  evenTextOverflow?: TextOverflowProp<T>
  visitedTextOverflow?: TextOverflowProp<T>
  checkedTextOverflow?: TextOverflowProp<T>
  focusWithinTextOverflow?: TextOverflowProp<T>
  hoverTextOverflow?: TextOverflowProp<T>
  focusTextOverflow?: TextOverflowProp<T>
  focusVisibleTextOverflow?: TextOverflowProp<T>
  activeTextOverflow?: TextOverflowProp<T>
  disabledTextOverflow?: TextOverflowProp<T>
  placeholderTextOverflow?: TextOverflowProp<T>
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
  motionSafeListStyleType?: ListStyleTypeProp<T>
  motionReduceListStyleType?: ListStyleTypeProp<T>
  firstListStyleType?: ListStyleTypeProp<T>
  lastListStyleType?: ListStyleTypeProp<T>
  oddListStyleType?: ListStyleTypeProp<T>
  evenListStyleType?: ListStyleTypeProp<T>
  visitedListStyleType?: ListStyleTypeProp<T>
  checkedListStyleType?: ListStyleTypeProp<T>
  focusWithinListStyleType?: ListStyleTypeProp<T>
  hoverListStyleType?: ListStyleTypeProp<T>
  focusListStyleType?: ListStyleTypeProp<T>
  focusVisibleListStyleType?: ListStyleTypeProp<T>
  activeListStyleType?: ListStyleTypeProp<T>
  disabledListStyleType?: ListStyleTypeProp<T>
  placeholderListStyleType?: ListStyleTypeProp<T>
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
  motionSafeListStylePosition?: ListStylePositionProp<T>
  motionReduceListStylePosition?: ListStylePositionProp<T>
  firstListStylePosition?: ListStylePositionProp<T>
  lastListStylePosition?: ListStylePositionProp<T>
  oddListStylePosition?: ListStylePositionProp<T>
  evenListStylePosition?: ListStylePositionProp<T>
  visitedListStylePosition?: ListStylePositionProp<T>
  checkedListStylePosition?: ListStylePositionProp<T>
  focusWithinListStylePosition?: ListStylePositionProp<T>
  hoverListStylePosition?: ListStylePositionProp<T>
  focusListStylePosition?: ListStylePositionProp<T>
  focusVisibleListStylePosition?: ListStylePositionProp<T>
  activeListStylePosition?: ListStylePositionProp<T>
  disabledListStylePosition?: ListStylePositionProp<T>
  placeholderListStylePosition?: ListStylePositionProp<T>
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

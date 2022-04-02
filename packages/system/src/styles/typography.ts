import * as CSS from 'csstype'
import { SystemProp, ThemeNamespaceValue, ITheme, Theme } from '../types'
import { style, compose, themeGetter } from '../style'
import { rpx } from '../unit'
import { getPx } from './units'
import { getColor, Color } from './colors'
import { space, SpaceProps } from './space'

// Getters

export type ThemeFont<T extends ITheme = Theme> = ThemeNamespaceValue<
  'fonts',
  T
>
export const getFont = themeGetter<ThemeFont>({ name: 'font', key: 'fonts' })

export type ThemeLineHeight<T extends ITheme = Theme> = ThemeNamespaceValue<
  'lineHeights',
  T
>
export const getLineHeight = themeGetter<ThemeLineHeight>({
  name: 'lineHeight',
  key: 'lineHeights',
  transform: (value: number | string, { props }) => {
    const rootFontSize = props?.theme?.settings?.rootFontSize ?? undefined
    return rpx(value, { rootFontSize })
  },
})

export type ThemeFontWeight<T extends ITheme = Theme> = ThemeNamespaceValue<
  'fontWeights',
  T
>
export const getFontWeight = themeGetter<ThemeFontWeight>({
  name: 'fontWeight',
  key: 'fontWeights',
})

export type ThemeLetterSpacing<T extends ITheme = Theme> = ThemeNamespaceValue<
  'letterSpacings',
  T
>
export const getLetterSpacing = themeGetter<ThemeLetterSpacing>({
  name: 'letterSpacing',
  key: 'letterSpacings',
  compose: getPx,
})

export type ThemeFontSize<T extends ITheme = Theme> = ThemeNamespaceValue<
  'fontSizes',
  T
>
export const getFontSize = themeGetter<ThemeFontSize>({
  name: 'fontSize',
  key: 'fontSizes',
  compose: getPx,
})

// Font properties

export interface FontFamilyProps<T extends ITheme = Theme> {
  fontFamily?: SystemProp<ThemeFont<T> | CSS.Property.FontFamily, T>
}
export const fontFamily = style<FontFamilyProps>({
  prop: 'fontFamily',
  themeGet: getFont,
})

export interface FontSizeProps<T extends ITheme = Theme> {
  fontSize?: SystemProp<ThemeFontSize<T> | CSS.Property.FontSize, T>
}
export const fontSize = style<FontSizeProps>({
  prop: 'fontSize',
  themeGet: getFontSize,
})

export interface LineHeightProps<T extends ITheme = Theme> {
  lineHeight?: SystemProp<ThemeLineHeight<T> | CSS.Property.LineHeight, T>
}
export const lineHeight = style<LineHeightProps>({
  prop: 'lineHeight',
  themeGet: getLineHeight,
})

export interface FontWeightProps<T extends ITheme = Theme> {
  fontWeight?: SystemProp<ThemeFontWeight<T> | CSS.Property.FontWeight, T>
}
export const fontWeight = style<FontWeightProps>({
  prop: 'fontWeight',
  themeGet: getFontWeight,
})

export interface FontStyleProps<T extends ITheme = Theme> {
  fontStyle?: SystemProp<CSS.Property.FontStyle, T>
}
export const fontStyle = style<FontStyleProps>({
  prop: 'fontStyle',
})

export interface LetterSpacingProps<T extends ITheme = Theme> {
  letterSpacing?: SystemProp<
    ThemeLetterSpacing<T> | CSS.Property.LetterSpacing,
    T
  >
}
export const letterSpacing = style<LetterSpacingProps>({
  prop: 'letterSpacing',
  themeGet: getLetterSpacing,
})

// Color

export interface ColorProps<T extends ITheme = Theme> {
  color?: SystemProp<Color<T>, T>
}
export const color = style<ColorProps>({
  prop: 'color',
  themeGet: getColor,
})

// Text Transform

export interface TextTransformProps<T extends ITheme = Theme> {
  textTransform?: SystemProp<CSS.Property.TextTransform, T>
}
export const textTransform = style<TextTransformProps>({
  prop: 'textTransform',
})

// Text Decoration

export interface TextDecorationProps<T extends ITheme = Theme> {
  textDecoration?: SystemProp<CSS.Property.TextDecoration, T>
}
export const textDecoration = style<TextDecorationProps>({
  prop: 'textDecoration',
})

// @TODO add text decoration variants

// Align

export interface TextAlignProps<T extends ITheme = Theme> {
  textAlign?: SystemProp<CSS.Property.TextAlign, T>
}
export const textAlign = style<TextAlignProps>({
  prop: 'textAlign',
})

export interface VerticalAlignProps<T extends ITheme = Theme> {
  verticalAlign?: SystemProp<CSS.Property.VerticalAlign, T>
}
export const verticalAlign = style<VerticalAlignProps>({
  prop: 'verticalAlign',
})

// WhiteSpace

export interface WhiteSpaceProps<T extends ITheme = Theme> {
  whiteSpace?: SystemProp<CSS.Property.WhiteSpace, T>
}
export const whiteSpace = style<WhiteSpaceProps>({
  prop: 'whiteSpace',
})

// Overflow

export interface TextOverflowProps<T extends ITheme = Theme> {
  textOverflow?: SystemProp<CSS.Property.TextOverflow, T>
}
export const textOverflow = style<TextOverflowProps>({
  prop: 'textOverflow',
})

// List

export interface ListStyleTypeProps<T extends ITheme = Theme> {
  listStyleType?: SystemProp<CSS.Property.ListStyleType, T>
}
export const listStyleType = style<ListStyleTypeProps>({
  prop: 'listStyleType',
})

export interface ListStylePositionProps<T extends ITheme = Theme> {
  listStylePosition?: SystemProp<CSS.Property.ListStylePosition, T>
}
export const listStylePosition = style<ListStylePositionProps>({
  prop: 'listStylePosition',
})

interface AllProps<T extends ITheme = Theme>
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
    ListStylePositionProps<T>,
    SpaceProps<T> {}
const all = compose<AllProps>(
  space,
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

export type ThemeText<T extends ITheme = Theme> = ThemeNamespaceValue<
  'texts',
  T
>
export interface TextProps<T extends ITheme = Theme> {
  text?: SystemProp<ThemeText<T>, T>
}
export const text = style<TextProps>({
  prop: 'text',
  key: 'texts',
  css:
    (value) =>
    ({ theme }: any) =>
      all({ ...value, theme }),
})

// @TODO add word-break
// @TODO add overflow-wrap

export interface TypographyProps<T extends ITheme = Theme>
  extends AllProps<T>,
    TextProps<T> {}
export const typography = compose<TypographyProps>(all, text)

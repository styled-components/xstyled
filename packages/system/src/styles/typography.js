import { style, compose, themeGetter } from '../style'
import { px } from '../unit'
import { getColor } from './basics'

export const getFont = themeGetter({ key: 'fonts' })

export const fontFamily = style({
  prop: 'fontFamily',
  themeGet: getFont,
})

export const getFontSize = themeGetter({
  key: 'fontSizes',
  defaultVariants: [0, 12, 14, 16, 20, 24, 32, 48, 64, 72],
  transform: px,
})

export const fontSize = style({
  prop: 'fontSize',
  themeGet: getFontSize,
})

export const getLineHeight = themeGetter({ key: 'lineHeights' })

export const lineHeight = style({
  prop: 'lineHeight',
  themeGet: getLineHeight,
})

export const getFontWeight = themeGetter({ key: 'fontWeights' })

export const fontWeight = style({
  prop: 'fontWeight',
  themeGet: getFontWeight,
})

export const textAlign = style({
  prop: 'textAlign',
})

export const getLetterSpacing = themeGetter({
  key: 'letterSpacings',
  transform: px,
})

export const letterSpacing = style({
  prop: 'letterSpacing',
  themeGet: getLetterSpacing,
})

export const color = style({
  prop: 'color',
  themeGet: getColor,
})

export const textTransform = style({
  prop: 'textTransform',
})

export const typography = compose(
  fontFamily,
  fontSize,
  lineHeight,
  fontWeight,
  textAlign,
  letterSpacing,
  color,
  textTransform,
)

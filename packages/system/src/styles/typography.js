import { style, compose, themeGetter } from '../style'
import { rpx } from '../unit'
import { getColor, getPx } from './basics'

// Getters

export const getFont = themeGetter({ name: 'font', key: 'fonts' })

export const getLineHeight = themeGetter({
  name: 'lineHeight',
  key: 'lineHeights',
  transform: rpx,
})

export const getFontWeight = themeGetter({
  name: 'fontWeight',
  key: 'fontWeights',
})

export const getLetterSpacing = themeGetter({
  name: 'letterSpacing',
  key: 'letterSpacings',
  compose: getPx,
})

// Styles

export const fontFamily = style({
  prop: 'fontFamily',
  themeGet: getFont,
})

export const getFontSize = themeGetter({
  name: 'fontSize',
  key: 'fontSizes',
  defaultVariants: [0, 12, 14, 16, 20, 24, 32, 48, 64, 72],
  compose: getPx,
})

export const fontSize = style({
  prop: 'fontSize',
  themeGet: getFontSize,
})

export const lineHeight = style({
  prop: 'lineHeight',
  themeGet: getLineHeight,
})

export const fontWeight = style({
  prop: 'fontWeight',
  themeGet: getFontWeight,
})

export const fontStyle = style({
  prop: 'fontStyle',
})

export const textAlign = style({
  prop: 'textAlign',
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
  fontStyle,
  lineHeight,
  fontWeight,
  textAlign,
  letterSpacing,
  color,
  textTransform,
)

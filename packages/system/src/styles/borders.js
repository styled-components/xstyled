import { num } from '@xstyled/util'
import { style, themeGetter, compose } from '../style'
import { px } from '../unit'
import { getColor, getRadius, getPx } from './basics'

// Getters

export const getBorder = themeGetter({
  name: 'border',
  key: 'borders',
  transform: n => (num(n) && n > 0 ? `${px(n)} solid` : n),
})

export const getBorderWidth = themeGetter({
  name: 'borderWidth',
  key: 'borderWidths',
  compose: getPx,
})

export const getBorderStyle = themeGetter({
  name: 'borderStyle',
  key: 'borderStyles',
})

export const getShadow = themeGetter({
  name: 'shadow',
  key: 'shadows',
})

// Style

export const border = style({
  prop: 'border',
  themeGet: getBorder,
})

export const borderTop = style({
  prop: 'borderTop',
  themeGet: getBorder,
})

export const borderTopColor = style({
  prop: 'borderTopColor',
  themeGet: getColor,
})

export const borderRight = style({
  prop: 'borderRight',
  themeGet: getBorder,
})

export const borderRightColor = style({
  prop: 'borderRightColor',
  themeGet: getColor,
})

export const borderBottom = style({
  prop: 'borderBottom',
  themeGet: getBorder,
})

export const borderBottomColor = style({
  prop: 'borderBottomColor',
  themeGet: getColor,
})

export const borderLeft = style({
  prop: 'borderLeft',
  themeGet: getBorder,
})

export const borderLeftColor = style({
  prop: 'borderLeftColor',
  themeGet: getColor,
})

export const borderColor = style({
  prop: 'borderColor',
  themeGet: getColor,
})

export const borderWidth = style({
  prop: 'borderWidth',
  themeGet: getBorderWidth,
})

export const borderStyle = style({
  prop: 'borderStyle',
  themeGet: getBorderStyle,
})

export const borderRadius = style({
  prop: 'borderRadius',
  themeGet: getRadius,
})

export const boxShadow = style({
  prop: 'boxShadow',
  themeGet: getShadow,
})

export const borders = compose(
  border,
  borderTop,
  borderTopColor,
  borderRight,
  borderRightColor,
  borderBottom,
  borderBottomColor,
  borderLeft,
  borderLeftColor,
  borderColor,
  borderWidth,
  borderStyle,
  borderRadius,
  boxShadow,
)

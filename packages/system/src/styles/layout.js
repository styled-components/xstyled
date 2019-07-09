import { style, themeGetter, compose } from '../style'
import { getPercent } from './basics'

// Getters

export const getSize = themeGetter({
  name: 'size',
  key: 'sizes',
  compose: getPercent,
})

// Styles

export const display = style({
  prop: 'display',
})

export const width = style({
  prop: 'width',
  themeGet: getSize,
})

export const height = style({
  prop: 'height',
  themeGet: getSize,
})

export const maxWidth = style({
  prop: 'maxWidth',
  themeGet: getSize,
})

export const maxHeight = style({
  prop: 'maxHeight',
  themeGet: getSize,
})

export const minWidth = style({
  prop: 'minWidth',
  themeGet: getSize,
})

export const minHeight = style({
  prop: 'minHeight',
  themeGet: getSize,
})

export const size = style({
  prop: 'size',
  cssProperty: ['width', 'height'],
  themeGet: getSize,
})

export const verticalAlign = style({
  prop: 'verticalAlign',
})

export const layout = compose(
  display,
  width,
  height,
  maxWidth,
  maxHeight,
  minWidth,
  minHeight,
  size,
  verticalAlign,
)

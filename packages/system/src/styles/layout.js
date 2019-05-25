import { style, themeGetter, compose } from '../style'
import { percent } from '../unit'

export const display = style({
  prop: 'display',
})

export const getWidth = themeGetter({
  transform: percent,
  key: 'widths',
})

export const width = style({
  prop: 'width',
  themeGet: getWidth,
})

export const getHeight = themeGetter({
  transform: percent,
  key: 'heights',
})

export const height = style({
  prop: 'height',
  themeGet: getHeight,
})

export const getMaxWidth = themeGetter({
  transform: percent,
  key: 'maxWidths',
})

export const maxWidth = style({
  prop: 'maxWidth',
  themeGet: getMaxWidth,
})

export const getMaxHeight = themeGetter({
  transform: percent,
  key: 'maxHeights',
})

export const maxHeight = style({
  prop: 'maxHeight',
  themeGet: getMaxHeight,
})

export const getMinWidth = themeGetter({
  transform: percent,
  key: 'minWidths',
})

export const minWidth = style({
  prop: 'minWidth',
  themeGet: getMinWidth,
})

export const getMinHeight = themeGetter({
  transform: percent,
  key: 'minHeights',
})

export const minHeight = style({
  prop: 'minHeight',
  themeGet: getMinHeight,
})

export const getSize = themeGetter({
  key: 'sizes',
  transform: percent,
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

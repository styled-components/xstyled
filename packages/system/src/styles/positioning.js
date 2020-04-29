import { style, themeGetter, compose } from '../style'
import { getPx } from './basics'

// Getters
export const getZIndex = themeGetter({ name: 'zIndex', key: 'zIndices' })

// Styles
export const position = style({ prop: 'position' })

export const zIndex = style({
  prop: 'zIndex',
  themeGet: getZIndex,
})

export const top = style({
  prop: 'top',
  themeGet: getPx,
})

export const right = style({
  prop: 'right',
  themeGet: getPx,
})

export const bottom = style({
  prop: 'bottom',
  themeGet: getPx,
})

export const left = style({
  prop: 'left',
  themeGet: getPx,
})

export const positioning = compose(position, zIndex, top, right, bottom, left)

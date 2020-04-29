import { style, themeGetter, compose } from '../style'
import { px, rpx, percent } from '../unit'

// Getters

export const getColor = themeGetter({ name: 'color', key: 'colors' })

export const getPx = themeGetter({
  name: 'px',
  transform: (value) => px(rpx(value)),
})

export const getPercent = themeGetter({
  name: 'percent',
  transform: percent,
  compose: getPx,
})

export const getRadius = themeGetter({
  name: 'radius',
  key: 'radii',
  compose: getPx,
})

export const getTransition = themeGetter({
  name: 'transition',
  key: 'transitions',
})

// Style

export const opacity = style({
  prop: 'opacity',
})

export const overflow = style({
  prop: 'overflow',
})

export const transition = style({ prop: 'transition', themeGet: getTransition })

export const basics = compose(opacity, overflow, transition)

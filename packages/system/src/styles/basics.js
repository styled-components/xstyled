import { style, themeGetter, compose } from '../style'
import { px, percent } from '../unit'

export const getColor = themeGetter({ key: 'colors' })

export const getPx = themeGetter({ transform: px })

export const getPercent = themeGetter({ transform: percent })

export const getRadius = themeGetter({
  key: 'radii',
  transform: px,
})

export const opacity = style({
  prop: 'opacity',
})

export const overflow = style({
  prop: 'overflow',
})

export const basics = compose(
  opacity,
  overflow,
)

import { style, themeGetter, compose } from '../style'
import { rpxPx, percent } from '../unit'

export const getColor = themeGetter({ key: 'colors' })

export const getPx = themeGetter({ transform: rpxPx })

export const getPercent = themeGetter({
  transform: percent,
})

export const getRadius = themeGetter({
  key: 'radii',
  transform: rpxPx,
})

export const opacity = style({
  prop: 'opacity',
})

export const overflow = style({
  prop: 'overflow',
})

export const getTransition = themeGetter({ key: 'transitions' })

export const transition = style({ prop: 'transition', themeGet: getTransition })

export const basics = compose(
  opacity,
  overflow,
  transition,
)

import { style, compose } from '../style'
import { getColor } from './basics'

export const background = style({
  prop: 'background',
})

export const backgroundColor = style({
  prop: 'backgroundColor',
  themeGet: getColor,
})

export const backgroundImage = style({
  prop: 'backgroundImage',
})

export const backgroundSize = style({
  prop: 'backgroundSize',
})

export const backgroundPosition = style({
  prop: 'backgroundPosition',
})

export const backgroundRepeat = style({
  prop: 'backgroundRepeat',
})

export const backgrounds = compose(
  background,
  backgroundColor,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
)

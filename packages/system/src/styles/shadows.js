import { style, themeGetter, compose } from '../style'

// Getters

export const getShadow = themeGetter({
  name: 'shadow',
  key: 'shadows',
})

// Style

export const boxShadow = style({
  prop: 'boxShadow',
  themeGet: getShadow,
})

export const textShadow = style({
  prop: 'textShadow',
  themeGet: getShadow,
})

export const shadows = compose(boxShadow, textShadow)

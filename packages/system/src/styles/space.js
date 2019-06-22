import { style, themeGetter, compose } from '../style'
import { is, string, negative } from '../util'
import { px as pxUnit } from '../unit'

function toNegative(value) {
  if (string(value)) return `-${value}`
  return value * -1
}

export const getSpace = themeGetter({
  key: 'space',
  defaultVariants: [0, 4, 8, 16, 24, 48, 96, 144, 192, 240],
  transform: (_, { rawValue, variants }) => {
    if (string(rawValue)) {
      const neg = rawValue.startsWith('-')
      const variantKey = neg ? rawValue.substr(1) : rawValue
      const variantValue = variants[variantKey]
      const value = is(variantValue) ? variantValue : rawValue
      return pxUnit(neg ? toNegative(value) : value)
    }
    const abs = Math.abs(rawValue)
    const neg = negative(rawValue)
    const value = is(variants[abs]) ? variants[abs] : abs
    return pxUnit(neg ? toNegative(value) : value)
  },
})

export const margin = style({
  prop: ['margin', 'm'],
  cssProperty: 'margin',
  themeGet: getSpace,
})

export const marginTop = style({
  prop: ['marginTop', 'mt'],
  cssProperty: 'marginTop',
  themeGet: getSpace,
})

export const marginRight = style({
  prop: ['marginRight', 'mr'],
  cssProperty: 'marginRight',
  themeGet: getSpace,
})

export const marginBottom = style({
  prop: ['marginBottom', 'mb'],
  cssProperty: 'marginBottom',
  themeGet: getSpace,
})

export const marginLeft = style({
  prop: ['marginLeft', 'ml'],
  cssProperty: 'marginLeft',
  themeGet: getSpace,
})

export const mx = style({
  prop: 'mx',
  cssProperty: ['marginRight', 'marginLeft'],
  themeGet: getSpace,
})

export const my = style({
  prop: 'my',
  cssProperty: ['marginTop', 'marginBottom'],
  themeGet: getSpace,
})

export const padding = style({
  prop: ['padding', 'p'],
  cssProperty: 'padding',
  themeGet: getSpace,
})

export const paddingTop = style({
  prop: ['paddingTop', 'pt'],
  cssProperty: 'paddingTop',
  themeGet: getSpace,
})

export const paddingRight = style({
  prop: ['paddingRight', 'pr'],
  cssProperty: 'paddingRight',
  themeGet: getSpace,
})

export const paddingBottom = style({
  prop: ['paddingBottom', 'pb'],
  cssProperty: 'paddingBottom',
  themeGet: getSpace,
})

export const paddingLeft = style({
  prop: ['paddingLeft', 'pl'],
  cssProperty: 'paddingLeft',
  themeGet: getSpace,
})

export const px = style({
  prop: 'px',
  cssProperty: ['paddingRight', 'paddingLeft'],
  themeGet: getSpace,
})

export const py = style({
  prop: 'py',
  cssProperty: ['paddingTop', 'paddingBottom'],
  themeGet: getSpace,
})

export const space = compose(
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  mx,
  my,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  px,
  py,
)

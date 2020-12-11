import * as CSS from 'csstype'
import { compose, themeGetter, style } from '../style'
import { SystemProperty } from '../types'
import { ExtractThemeProperty, VariantsType } from '../types'
import { getAngle } from './units'
import { getSpace } from './space'

export type TransformGetter<T = {}> = VariantsType<
  ExtractThemeProperty<T, 'transforms'>
>
export const getTransform = themeGetter({
  name: 'transform',
  key: 'transforms',
})

export interface TransformProps<T = {}> {
  transform?: SystemProperty<boolean, T>
}
export const transform = style<TransformProps>({
  prop: 'transform',
  themeGet: getTransform,
  cssProperty: (_, { value }) => {
    if (value === true) {
      return {
        '--x-translate-x': 0,
        '--x-translate-y': 0,
        '--x-rotate': 0,
        '--x-skew-x': 0,
        '--x-skew-y': 0,
        '--x-scale-x': '1',
        '--x-scale-y': '1',
        transform:
          'translate3d(var(--x-translate-x), var(--x-translate-y), 0) rotate(var(--x-rotate)) skewX(var(--x-skew-x)) skewY(var(--x-skew-y)) scaleX(var(--x-scale-x)) scaleY(var(--x-scale-y))',
      }
    }
    return { transform: value }
  },
})

export interface TransformOriginProps<T = {}> {
  transformOrigin?: SystemProperty<CSS.Property.TransformOrigin, T>
}
export const transformOrigin = style({
  prop: 'transformOrigin',
})

export interface TranslateXProps<T = {}> {
  translateX?: SystemProperty<number | string, T>
}
export const translateX = style({
  prop: 'translateX',
  cssProperty: '--x-translate-x',
  themeGet: getSpace,
})

export interface TranslateYProps<T = {}> {
  translateY?: SystemProperty<number | string, T>
}
export const translateY = style({
  prop: 'translateY',
  cssProperty: '--x-translate-y',
  themeGet: getSpace,
})

export interface RotateProps<T = {}> {
  rotate?: SystemProperty<number | string, T>
}
export const rotate = style({
  prop: 'rotate',
  cssProperty: '--x-rotate',
  themeGet: getAngle,
})

export interface SkewXProps<T = {}> {
  skewX?: SystemProperty<number | string, T>
}
export const skewX = style({
  prop: 'skewX',
  cssProperty: '--x-skew-x',
  themeGet: getAngle,
})

export interface SkewYProps<T = {}> {
  skewY?: SystemProperty<number | string, T>
}
export const skewY = style({
  prop: 'skewY',
  cssProperty: '--x-skew-y',
  themeGet: getAngle,
})

export interface ScaleProps<T = {}> {
  scale?: SystemProperty<number | string, T>
}
export const scale = style({
  prop: 'scale',
  cssProperty: ['--x-scale-x', '--x-scale-y'],
  transform: (v) => String(v),
})

export interface ScaleXProps<T = {}> {
  scaleX?: SystemProperty<number | string, T>
}
export const scaleX = style({
  prop: 'scaleX',
  cssProperty: '--x-scale-x',
  transform: (v) => String(v),
})

export interface ScaleYProps<T = {}> {
  scaleY?: SystemProperty<number | string, T>
}
export const scaleY = style({
  prop: 'scaleY',
  cssProperty: '--x-scale-y',
  transform: (v) => String(v),
})

export type TransformsProps<T = {}> = TransformProps<T> &
  TransformOriginProps<T> &
  TranslateXProps<T> &
  TranslateYProps<T> &
  RotateProps<T> &
  SkewXProps<T> &
  SkewYProps<T> &
  ScaleProps<T> &
  ScaleXProps<T> &
  ScaleYProps<T>
export const transforms = compose<TransformsProps>(
  transform,
  transformOrigin,
  translateX,
  translateY,
  rotate,
  skewX,
  skewY,
  scale,
  scaleX,
  scaleY,
)

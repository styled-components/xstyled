import * as CSS from 'csstype'
import { compose, themeGetter, style } from '../style'
import { SystemProp, VariantsType, ITheme, Theme } from '../types'
import { getAngle } from './units'
import { getSpace } from './space'

export type TransformGetter<T extends ITheme = Theme> = VariantsType<
  T['transforms']
>
export const getTransform = themeGetter<TransformGetter>({
  name: 'transform',
  key: 'transforms',
})

type TransformProp<T extends ITheme> = SystemProp<boolean, T>
export interface TransformProps<T extends ITheme = Theme> {
  transform?: TransformProp<T>
}
export const transform = style({
  prop: 'transform',
  themeGet: getTransform,
  cssProperty: (value) => {
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

type TransformOriginProp<T extends ITheme> = SystemProp<
  CSS.Property.TransformOrigin,
  T
>
export interface TransformOriginProps<T extends ITheme = Theme> {
  transformOrigin?: TransformOriginProp<T>
}
export const transformOrigin = style({
  prop: 'transformOrigin',
})

type TranslateXProp<T extends ITheme> = SystemProp<number | string, T>
export interface TranslateXProps<T extends ITheme = Theme> {
  translateX?: TranslateXProp<T>
}
export const translateX = style({
  prop: 'translateX',
  cssProperty: '--x-translate-x',
  themeGet: getSpace,
})

type TranslateYProp<T extends ITheme> = SystemProp<number | string, T>
export interface TranslateYProps<T extends ITheme = Theme> {
  translateY?: TranslateYProp<T>
}
export const translateY = style({
  prop: 'translateY',
  cssProperty: '--x-translate-y',
  themeGet: getSpace,
})

type RotateProp<T extends ITheme> = SystemProp<number | string, T>
export interface RotateProps<T extends ITheme = Theme> {
  rotate?: RotateProp<T>
}
export const rotate = style({
  prop: 'rotate',
  cssProperty: '--x-rotate',
  themeGet: getAngle,
})

type SkewXProp<T extends ITheme> = SystemProp<number | string, T>
export interface SkewXProps<T extends ITheme = Theme> {
  skewX?: SkewXProp<T>
}
export const skewX = style({
  prop: 'skewX',
  cssProperty: '--x-skew-x',
  themeGet: getAngle,
})

type SkewYProp<T extends ITheme> = SystemProp<number | string, T>
export interface SkewYProps<T extends ITheme = Theme> {
  skewY?: SkewYProp<T>
}
export const skewY = style({
  prop: 'skewY',
  cssProperty: '--x-skew-y',
  themeGet: getAngle,
})

type ScaleProp<T extends ITheme> = SystemProp<number | string, T>
export interface ScaleProps<T extends ITheme = Theme> {
  scale?: ScaleProp<T>
}
export const scale = style({
  prop: 'scale',
  cssProperty: ['--x-scale-x', '--x-scale-y'],
  transform: (v) => String(v),
})

type ScaleXProp<T extends ITheme> = SystemProp<number | string, T>
export interface ScaleXProps<T extends ITheme = Theme> {
  scaleX?: ScaleXProp<T>
}
export const scaleX = style({
  prop: 'scaleX',
  cssProperty: '--x-scale-x',
  transform: (v) => String(v),
})

type ScaleYProp<T extends ITheme> = SystemProp<number | string, T>
export interface ScaleYProps<T extends ITheme = Theme> {
  scaleY?: ScaleYProp<T>
}
export const scaleY = style({
  prop: 'scaleY',
  cssProperty: '--x-scale-y',
  transform: (v) => String(v),
})

export interface TransformsProps<T extends ITheme = Theme>
  extends TransformProps<T>,
    TransformOriginProps<T>,
    TranslateXProps<T>,
    TranslateYProps<T>,
    RotateProps<T>,
    SkewXProps<T>,
    SkewYProps<T>,
    ScaleProps<T>,
    ScaleXProps<T>,
    ScaleYProps<T> {}
export const transforms = compose(
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

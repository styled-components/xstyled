import * as CSS from 'csstype'
import { compose, themeGetter, style } from '../style'
import { SystemProp, ThemeNamespaceValue, ITheme, Theme } from '../types'
import { getAngle, Angle } from './units'
import { getSpace, ThemeSpace } from './space'

export type ThemeTransform<T extends ITheme = Theme> = ThemeNamespaceValue<
  'transforms',
  T
>
export const getTransform = themeGetter<ThemeTransform>({
  name: 'transform',
  key: 'transforms',
})

export interface TransformProps<T extends ITheme = Theme> {
  transform?: SystemProp<string, T>
}
export const transform = style<TransformProps>({
  prop: 'transform',
  themeGet: getTransform,
  css: (value) => {
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

export interface TransformOriginProps<T extends ITheme = Theme> {
  transformOrigin?: SystemProp<CSS.Property.TransformOrigin, T>
}
export const transformOrigin = style<TransformOriginProps>({
  prop: 'transformOrigin',
})

export interface TranslateXProps<T extends ITheme = Theme> {
  translateX?: SystemProp<ThemeSpace<T> | number | string, T>
}
export const translateX = style<TranslateXProps>({
  prop: 'translateX',
  themeGet: getSpace,
  css: '--x-translate-x',
})

export interface TranslateYProps<T extends ITheme = Theme> {
  translateY?: SystemProp<ThemeSpace<T> | number | string, T>
}
export const translateY = style<TranslateYProps>({
  prop: 'translateY',
  themeGet: getSpace,
  css: '--x-translate-y',
})

export interface RotateProps<T extends ITheme = Theme> {
  rotate?: SystemProp<Angle, T>
}
export const rotate = style({
  prop: 'rotate',
  themeGet: getAngle,
  css: '--x-rotate',
})

export interface SkewXProps<T extends ITheme = Theme> {
  skewX?: SystemProp<Angle, T>
}
export const skewX = style<SkewXProps>({
  prop: 'skewX',
  themeGet: getAngle,
  css: '--x-skew-x',
})

export interface SkewYProps<T extends ITheme = Theme> {
  skewY?: SystemProp<Angle, T>
}
export const skewY = style<SkewYProps>({
  prop: 'skewY',
  themeGet: getAngle,
  css: '--x-skew-y',
})

export interface ScaleProps<T extends ITheme = Theme> {
  scale?: SystemProp<number | string, T>
}
export const scale = style<ScaleProps>({
  prop: 'scale',
  transform: (v) => String(v),
  css: ['--x-scale-x', '--x-scale-y'],
})

export interface ScaleXProps<T extends ITheme = Theme> {
  scaleX?: SystemProp<number | string, T>
}
export const scaleX = style<ScaleXProps>({
  prop: 'scaleX',
  transform: (v) => String(v),
  css: '--x-scale-x',
})

export interface ScaleYProps<T extends ITheme = Theme> {
  scaleY?: SystemProp<number | string, T>
}
export const scaleY = style<ScaleYProps>({
  prop: 'scaleY',
  transform: (v) => String(v),
  css: '--x-scale-y',
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

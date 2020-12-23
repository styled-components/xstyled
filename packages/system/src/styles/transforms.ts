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
  motionSafeTransform?: TransformProp<T>
  motionReduceTransform?: TransformProp<T>
  firstTransform?: TransformProp<T>
  lastTransform?: TransformProp<T>
  oddTransform?: TransformProp<T>
  evenTransform?: TransformProp<T>
  visitedTransform?: TransformProp<T>
  checkedTransform?: TransformProp<T>
  focusWithinTransform?: TransformProp<T>
  hoverTransform?: TransformProp<T>
  focusTransform?: TransformProp<T>
  focusVisibleTransform?: TransformProp<T>
  activeTransform?: TransformProp<T>
  disabledTransform?: TransformProp<T>
  placeholderTransform?: TransformProp<T>
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
  motionSafeTransformOrigin?: TransformOriginProp<T>
  motionReduceTransformOrigin?: TransformOriginProp<T>
  firstTransformOrigin?: TransformOriginProp<T>
  lastTransformOrigin?: TransformOriginProp<T>
  oddTransformOrigin?: TransformOriginProp<T>
  evenTransformOrigin?: TransformOriginProp<T>
  visitedTransformOrigin?: TransformOriginProp<T>
  checkedTransformOrigin?: TransformOriginProp<T>
  focusWithinTransformOrigin?: TransformOriginProp<T>
  hoverTransformOrigin?: TransformOriginProp<T>
  focusTransformOrigin?: TransformOriginProp<T>
  focusVisibleTransformOrigin?: TransformOriginProp<T>
  activeTransformOrigin?: TransformOriginProp<T>
  disabledTransformOrigin?: TransformOriginProp<T>
  placeholderTransformOrigin?: TransformOriginProp<T>
}
export const transformOrigin = style({
  prop: 'transformOrigin',
})

type TranslateXProp<T extends ITheme> = SystemProp<number | string, T>
export interface TranslateXProps<T extends ITheme = Theme> {
  translateX?: TranslateXProp<T>
  motionSafeTranslateX?: TranslateXProp<T>
  motionReduceTranslateX?: TranslateXProp<T>
  firstTranslateX?: TranslateXProp<T>
  lastTranslateX?: TranslateXProp<T>
  oddTranslateX?: TranslateXProp<T>
  evenTranslateX?: TranslateXProp<T>
  visitedTranslateX?: TranslateXProp<T>
  checkedTranslateX?: TranslateXProp<T>
  focusWithinTranslateX?: TranslateXProp<T>
  hoverTranslateX?: TranslateXProp<T>
  focusTranslateX?: TranslateXProp<T>
  focusVisibleTranslateX?: TranslateXProp<T>
  activeTranslateX?: TranslateXProp<T>
  disabledTranslateX?: TranslateXProp<T>
  placeholderTranslateX?: TranslateXProp<T>
}
export const translateX = style({
  prop: 'translateX',
  cssProperty: '--x-translate-x',
  themeGet: getSpace,
})

type TranslateYProp<T extends ITheme> = SystemProp<number | string, T>
export interface TranslateYProps<T extends ITheme = Theme> {
  translateY?: TranslateYProp<T>
  motionSafeTranslateY?: TranslateYProp<T>
  motionReduceTranslateY?: TranslateYProp<T>
  firstTranslateY?: TranslateYProp<T>
  lastTranslateY?: TranslateYProp<T>
  oddTranslateY?: TranslateYProp<T>
  evenTranslateY?: TranslateYProp<T>
  visitedTranslateY?: TranslateYProp<T>
  checkedTranslateY?: TranslateYProp<T>
  focusWithinTranslateY?: TranslateYProp<T>
  hoverTranslateY?: TranslateYProp<T>
  focusTranslateY?: TranslateYProp<T>
  focusVisibleTranslateY?: TranslateYProp<T>
  activeTranslateY?: TranslateYProp<T>
  disabledTranslateY?: TranslateYProp<T>
  placeholderTranslateY?: TranslateYProp<T>
}
export const translateY = style({
  prop: 'translateY',
  cssProperty: '--x-translate-y',
  themeGet: getSpace,
})

type RotateProp<T extends ITheme> = SystemProp<number | string, T>
export interface RotateProps<T extends ITheme = Theme> {
  rotate?: RotateProp<T>
  motionSafeRotate?: RotateProp<T>
  motionReduceRotate?: RotateProp<T>
  firstRotate?: RotateProp<T>
  lastRotate?: RotateProp<T>
  oddRotate?: RotateProp<T>
  evenRotate?: RotateProp<T>
  visitedRotate?: RotateProp<T>
  checkedRotate?: RotateProp<T>
  focusWithinRotate?: RotateProp<T>
  hoverRotate?: RotateProp<T>
  focusRotate?: RotateProp<T>
  focusVisibleRotate?: RotateProp<T>
  activeRotate?: RotateProp<T>
  disabledRotate?: RotateProp<T>
  placeholderRotate?: RotateProp<T>
}
export const rotate = style({
  prop: 'rotate',
  cssProperty: '--x-rotate',
  themeGet: getAngle,
})

type SkewXProp<T extends ITheme> = SystemProp<number | string, T>
export interface SkewXProps<T extends ITheme = Theme> {
  skewX?: SkewXProp<T>
  motionSafeSkewX?: SkewXProp<T>
  motionReduceSkewX?: SkewXProp<T>
  firstSkewX?: SkewXProp<T>
  lastSkewX?: SkewXProp<T>
  oddSkewX?: SkewXProp<T>
  evenSkewX?: SkewXProp<T>
  visitedSkewX?: SkewXProp<T>
  checkedSkewX?: SkewXProp<T>
  focusWithinSkewX?: SkewXProp<T>
  hoverSkewX?: SkewXProp<T>
  focusSkewX?: SkewXProp<T>
  focusVisibleSkewX?: SkewXProp<T>
  activeSkewX?: SkewXProp<T>
  disabledSkewX?: SkewXProp<T>
  placeholderSkewX?: SkewXProp<T>
}
export const skewX = style({
  prop: 'skewX',
  cssProperty: '--x-skew-x',
  themeGet: getAngle,
})

type SkewYProp<T extends ITheme> = SystemProp<number | string, T>
export interface SkewYProps<T extends ITheme = Theme> {
  skewY?: SkewYProp<T>
  motionSafeSkewY?: SkewYProp<T>
  motionReduceSkewY?: SkewYProp<T>
  firstSkewY?: SkewYProp<T>
  lastSkewY?: SkewYProp<T>
  oddSkewY?: SkewYProp<T>
  evenSkewY?: SkewYProp<T>
  visitedSkewY?: SkewYProp<T>
  checkedSkewY?: SkewYProp<T>
  focusWithinSkewY?: SkewYProp<T>
  hoverSkewY?: SkewYProp<T>
  focusSkewY?: SkewYProp<T>
  focusVisibleSkewY?: SkewYProp<T>
  activeSkewY?: SkewYProp<T>
  disabledSkewY?: SkewYProp<T>
  placeholderSkewY?: SkewYProp<T>
}
export const skewY = style({
  prop: 'skewY',
  cssProperty: '--x-skew-y',
  themeGet: getAngle,
})

type ScaleProp<T extends ITheme> = SystemProp<number | string, T>
export interface ScaleProps<T extends ITheme = Theme> {
  scale?: ScaleProp<T>
  motionSafeScale?: ScaleProp<T>
  motionReduceScale?: ScaleProp<T>
  firstScale?: ScaleProp<T>
  lastScale?: ScaleProp<T>
  oddScale?: ScaleProp<T>
  evenScale?: ScaleProp<T>
  visitedScale?: ScaleProp<T>
  checkedScale?: ScaleProp<T>
  focusWithinScale?: ScaleProp<T>
  hoverScale?: ScaleProp<T>
  focusScale?: ScaleProp<T>
  focusVisibleScale?: ScaleProp<T>
  activeScale?: ScaleProp<T>
  disabledScale?: ScaleProp<T>
  placeholderScale?: ScaleProp<T>
}
export const scale = style({
  prop: 'scale',
  cssProperty: ['--x-scale-x', '--x-scale-y'],
  transform: (v) => String(v),
})

type ScaleXProp<T extends ITheme> = SystemProp<number | string, T>
export interface ScaleXProps<T extends ITheme = Theme> {
  scaleX?: ScaleXProp<T>
  motionSafeScaleX?: ScaleXProp<T>
  motionReduceScaleX?: ScaleXProp<T>
  firstScaleX?: ScaleXProp<T>
  lastScaleX?: ScaleXProp<T>
  oddScaleX?: ScaleXProp<T>
  evenScaleX?: ScaleXProp<T>
  visitedScaleX?: ScaleXProp<T>
  checkedScaleX?: ScaleXProp<T>
  focusWithinScaleX?: ScaleXProp<T>
  hoverScaleX?: ScaleXProp<T>
  focusScaleX?: ScaleXProp<T>
  focusVisibleScaleX?: ScaleXProp<T>
  activeScaleX?: ScaleXProp<T>
  disabledScaleX?: ScaleXProp<T>
  placeholderScaleX?: ScaleXProp<T>
}
export const scaleX = style({
  prop: 'scaleX',
  cssProperty: '--x-scale-x',
  transform: (v) => String(v),
})

type ScaleYProp<T extends ITheme> = SystemProp<number | string, T>
export interface ScaleYProps<T extends ITheme = Theme> {
  scaleY?: ScaleYProp<T>
  motionSafeScaleY?: ScaleYProp<T>
  motionReduceScaleY?: ScaleYProp<T>
  firstScaleY?: ScaleYProp<T>
  lastScaleY?: ScaleYProp<T>
  oddScaleY?: ScaleYProp<T>
  evenScaleY?: ScaleYProp<T>
  visitedScaleY?: ScaleYProp<T>
  checkedScaleY?: ScaleYProp<T>
  focusWithinScaleY?: ScaleYProp<T>
  hoverScaleY?: ScaleYProp<T>
  focusScaleY?: ScaleYProp<T>
  focusVisibleScaleY?: ScaleYProp<T>
  activeScaleY?: ScaleYProp<T>
  disabledScaleY?: ScaleYProp<T>
  placeholderScaleY?: ScaleYProp<T>
}
export const scaleY = style({
  prop: 'scaleY',
  cssProperty: '--x-scale-y',
  transform: (v) => String(v),
})

export type TransformsProps<T extends ITheme = Theme> = TransformProps<T> &
  TransformOriginProps<T> &
  TranslateXProps<T> &
  TranslateYProps<T> &
  RotateProps<T> &
  SkewXProps<T> &
  SkewYProps<T> &
  ScaleProps<T> &
  ScaleXProps<T> &
  ScaleYProps<T>
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

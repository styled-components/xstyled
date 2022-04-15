import * as CSS from 'csstype'
import { style, themeGetter, compose } from '../style'
import { getDuration, Duration } from './units'
import { getTimingFunction, ThemeTimingFunction } from './transitions'
import { ITheme, SystemProp, ThemeNamespaceValue, Theme } from '../types'

export type ThemeAnimation<T extends ITheme = Theme> = ThemeNamespaceValue<
  'animations',
  T
>

export const getAnimation = themeGetter<ThemeAnimation>({
  name: 'animation',
  key: 'animations',
})

export interface AnimationProps<T extends ITheme = Theme> {
  animation?: SystemProp<ThemeAnimation<T> | CSS.Property.Animation, T>
}

export const animation = style<AnimationProps>({
  prop: 'animation',
  themeGet: getAnimation,
})

export interface AnimationDurationProps<T extends ITheme = Theme> {
  animationDuration?: SystemProp<
    Duration<T> | CSS.Property.AnimationDuration,
    T
  >
}
export const animationDuration = style<AnimationDurationProps>({
  prop: 'animationDuration',
  themeGet: getDuration,
})

export interface AnimationTimingFunctionProps<T extends ITheme = Theme> {
  animationTimingFunction?: SystemProp<
    ThemeTimingFunction<T> | CSS.Property.AnimationTimingFunction,
    T
  >
}
export const animationTimingFunction = style<AnimationTimingFunctionProps>({
  prop: 'animationTimingFunction',
  themeGet: getTimingFunction,
})

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AnimationsProps<T extends ITheme = Theme>
  extends AnimationProps<T>,
    AnimationDurationProps<T>,
    AnimationTimingFunctionProps<T> {}
export const animations = compose<AnimationsProps>(
  animation,
  animationDuration,
  animationTimingFunction,
)

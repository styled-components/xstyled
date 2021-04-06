import * as CSS from 'csstype'
import { style, themeGetter, compose } from '../style'
import { getDuration, ThemeDuration } from './units'
import { SystemProp, ITheme, Theme, ThemeNamespaceValue } from '../types'

export type ThemeTransition<T extends ITheme = Theme> = ThemeNamespaceValue<
  'transitions',
  T
>
export const getTransition = themeGetter<ThemeTransition>({
  name: 'transition',
  key: 'transitions',
})

export type ThemeTransitionProperty<
  T extends ITheme = Theme
> = ThemeNamespaceValue<'transitionProperties', T>
export const getTransitionProperty = themeGetter<ThemeTransitionProperty>({
  name: 'transitionProperty',
  key: 'transitionProperties',
})

export type ThemeTimingFunction<T extends ITheme = Theme> = ThemeNamespaceValue<
  'timingFunctions',
  T
>
export const getTimingFunction = themeGetter<ThemeTimingFunction>({
  name: 'timingFunction',
  key: 'timingFunctions',
})

export interface TransitionProps<T extends ITheme = Theme> {
  transition?: SystemProp<ThemeTransition<T> | CSS.Property.Transition, T>
}
export const transition = style<TransitionProps>({
  prop: 'transition',
  themeGet: getTransition,
})

export interface TransitionPropertyProps<T extends ITheme = Theme> {
  transitionProperty?: SystemProp<
    ThemeTransitionProperty<T> | CSS.Property.TransitionProperty,
    T
  >
}
export const transitionProperty = style<TransitionPropertyProps>({
  prop: 'transitionProperty',
  themeGet: getTransitionProperty,
})

export interface TransitionDurationProps<T extends ITheme = Theme> {
  transitionDuration?: SystemProp<
    ThemeDuration<T> | CSS.Property.TransitionDuration,
    T
  >
}
export const transitionDuration = style<TransitionDurationProps>({
  prop: 'transitionDuration',
  themeGet: getDuration,
})

export interface TransitionTimingFunctionProps<T extends ITheme = Theme> {
  transitionTimingFunction?: SystemProp<
    ThemeTimingFunction<T> | CSS.Property.TransitionTimingFunction,
    T
  >
}
export const transitionTimingFunction = style<TransitionTimingFunctionProps>({
  prop: 'transitionTimingFunction',
  themeGet: getTimingFunction,
})

export interface TransitionDelayProps<T extends ITheme = Theme> {
  transitionDelay?: SystemProp<
    ThemeDuration<T> | CSS.Property.TransitionDelay,
    T
  >
}
export const transitionDelay = style<TransitionDelayProps>({
  prop: 'transitionDelay',
  themeGet: getDuration,
})

export interface TransitionsProps<T extends ITheme = Theme>
  extends TransitionProps<T>,
    TransitionPropertyProps<T>,
    TransitionDurationProps<T>,
    TransitionTimingFunctionProps<T>,
    TransitionDelayProps<T> {}
export const transitions = compose<TransitionsProps>(
  transition,
  transitionProperty,
  transitionDuration,
  transitionTimingFunction,
  transitionDelay,
)

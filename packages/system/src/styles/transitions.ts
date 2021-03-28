import * as CSS from 'csstype'
import { style, themeGetter, compose } from '../style'
import { getDuration } from './units'
import { SystemProp, ITheme, Theme, VariantsType } from '../types'

export type TransitionGetter<T extends ITheme = Theme> = VariantsType<
  T['transitions']
>
export const getTransition = themeGetter<TransitionGetter>({
  name: 'transition',
  key: 'transitions',
})

export type TransitionPropertyGetter<T extends ITheme = Theme> = VariantsType<
  T['transitionProperties']
>
export const getTransitionProperty = themeGetter<TransitionPropertyGetter>({
  name: 'transitionProperty',
  key: 'transitionProperties',
})

export type TimingFunctionGetter<T extends ITheme = Theme> = VariantsType<
  T['timingFunctions']
>
export const getTimingFunction = themeGetter<TimingFunctionGetter>({
  name: 'timingFunctions',
  key: 'timingFunctions',
})

type TransitionProp<T extends ITheme> = SystemProp<
  TransitionGetter<T> | CSS.Property.Transition,
  T
>
export interface TransitionProps<T extends ITheme = Theme> {
  transition?: TransitionProp<T>
}
export const transition = style({ prop: 'transition', themeGet: getTransition })

type TransitionPropertyProp<T extends ITheme> = SystemProp<
  TransitionPropertyGetter<T> | CSS.Property.TransitionProperty,
  T
>
export interface TransitionPropertyProps<T extends ITheme = Theme> {
  transitionProperty?: TransitionPropertyProp<T>
}
export const transitionProperty = style({
  prop: 'transitionProperty',
  themeGet: getTransitionProperty,
})

type TransitionDurationProp<T extends ITheme> = SystemProp<
  number | CSS.Property.TransitionDuration,
  T
>
export interface TransitionDurationProps<T extends ITheme = Theme> {
  transitionDuration?: TransitionDurationProp<T>
}
export const transitionDuration = style({
  prop: 'transitionDuration',
  themeGet: getDuration,
})

type TransitionTimingFunctionProp<T extends ITheme> = SystemProp<
  TimingFunctionGetter<T> | CSS.Property.TransitionTimingFunction,
  T
>
export interface TransitionTimingFunctionProps<T extends ITheme = Theme> {
  transitionTimingFunction?: TransitionTimingFunctionProp<T>
}
export const transitionTimingFunction = style({
  prop: 'transitionTimingFunction',
  themeGet: getTimingFunction,
})

type TransitionDelayProp<T extends ITheme> = SystemProp<
  number | CSS.Property.TransitionDelay,
  T
>
export interface TransitionDelayProps<T extends ITheme = Theme> {
  transitionDelay?: TransitionDelayProp<T>
}
export const transitionDelay = style({
  prop: 'transitionDelay',
  themeGet: getDuration,
})

export interface TransitionsProps<T extends ITheme = Theme>
  extends TransitionProps<T>,
    TransitionPropertyProps<T>,
    TransitionDurationProps<T>,
    TransitionTimingFunctionProps<T>,
    TransitionDelayProps<T> {}
export const transitions = compose(
  transition,
  transitionProperty,
  transitionDuration,
  transitionTimingFunction,
  transitionDelay,
)

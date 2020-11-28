import * as CSS from 'csstype'
import { style, themeGetter, compose } from '../style'
import { getDuration } from './units'
import { SystemProperty, VariantsType, ExtractThemeProperty } from '../types'

export type TransitionGetter<T = {}> = VariantsType<
  ExtractThemeProperty<T, 'transitions'>
>
export const getTransition = themeGetter({
  name: 'transition',
  key: 'transitions',
})

export type TransitionPropertyGetter<T = {}> = VariantsType<
  ExtractThemeProperty<T, 'transitionProperties'>
>
export const getTransitionProperty = themeGetter({
  name: 'transitionProperty',
  key: 'transitionProperties',
})

export type TimingFunctionGetter<T = {}> = VariantsType<
  ExtractThemeProperty<T, 'timingFunctions'>
>
export const getTimingFunction = themeGetter({
  name: 'timingFunctions',
  key: 'timingFunctions',
})

export interface TransitionProps<T = {}> {
  transition?: SystemProperty<TransitionGetter<T> | CSS.Property.Transition, T>
}
export const transition = style({ prop: 'transition', themeGet: getTransition })

export interface TransitionPropertyProps<T = {}> {
  transitionProperty?: SystemProperty<
    TransitionPropertyGetter<T> | CSS.Property.TransitionProperty,
    T
  >
}
export const transitionProperty = style({
  prop: 'transitionProperty',
  themeGet: getTransitionProperty,
})

export interface TransitionDurationProps<T = {}> {
  transitionDuration?: SystemProperty<CSS.Property.TransitionDuration, T>
}
export const transitionDuration = style({
  prop: 'transitionDuration',
  themeGet: getDuration,
})

export interface TransitionTimingFunctionProps<T = {}> {
  transitionTimingFunction?: SystemProperty<
    TimingFunctionGetter<T> | CSS.Property.TransitionTimingFunction,
    T
  >
}
export const transitionTimingFunction = style({
  prop: 'transitionTimingFunction',
  themeGet: getTimingFunction,
})

export interface TransitionDelayProps<T = {}> {
  transitionDelay?: SystemProperty<CSS.Property.TransitionDelay, T>
}
export const transitionDelay = style({
  prop: 'transitionDelay',
  themeGet: getDuration,
})

export type TransitionsProps<T = {}> = TransitionProps<T> &
  TransitionPropertyProps<T> &
  TransitionDurationProps<T> &
  TransitionTimingFunctionProps<T> &
  TransitionDelayProps<T>

export const transitions = compose<TransitionsProps>(
  transition,
  transitionProperty,
  transitionDuration,
  transitionTimingFunction,
  transitionDelay,
)

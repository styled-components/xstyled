import * as CSS from 'csstype'
import { style, themeGetter, compose } from '../style'
import { SystemProperty, VariantsType, ExtractThemeProperty } from '../types'

export type TransitionGetter<T = {}> = VariantsType<
  ExtractThemeProperty<T, 'transitions'>
>
export const getTransition = themeGetter({
  name: 'transition',
  key: 'transitions',
})

export interface TransitionProps<T = {}> {
  transition?: SystemProperty<TransitionGetter<T> | CSS.Property.Transition, T>
}
export const transition = style({ prop: 'transition', themeGet: getTransition })

export interface TransitionPropertyProps<T = {}> {
  transitionProperty?: SystemProperty<CSS.Property.TransitionProperty, T>
}
export const transitionProperty = style({ prop: 'transitionProperty' })

export interface TransitionDurationProps<T = {}> {
  transitionDuration?: SystemProperty<CSS.Property.TransitionDuration, T>
}
export const transitionDuration = style({ prop: 'transitionDuration' })

export interface TransitionTimingFunctionProps<T = {}> {
  transitionTimingFunction?: SystemProperty<
    CSS.Property.TransitionTimingFunction,
    T
  >
}
export const transitionTimingFunction = style({
  prop: 'transitionTimingFunction',
})

export type TransitionsProps<T = {}> = TransitionProps<T> &
  TransitionPropertyProps<T> &
  TransitionDurationProps<T> &
  TransitionTimingFunctionProps<T>

export const transitions = compose<TransitionsProps>(
  transition,
  transitionProperty,
  transitionDuration,
  transitionTimingFunction,
)

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
  motionSafeTransition?: TransitionProp<T>
  motionReduceTransition?: TransitionProp<T>
  firstTransition?: TransitionProp<T>
  lastTransition?: TransitionProp<T>
  oddTransition?: TransitionProp<T>
  evenTransition?: TransitionProp<T>
  visitedTransition?: TransitionProp<T>
  checkedTransition?: TransitionProp<T>
  focusWithinTransition?: TransitionProp<T>
  hoverTransition?: TransitionProp<T>
  focusTransition?: TransitionProp<T>
  focusVisibleTransition?: TransitionProp<T>
  activeTransition?: TransitionProp<T>
  disabledTransition?: TransitionProp<T>
  placeholderTransition?: TransitionProp<T>
}
export const transition = style({ prop: 'transition', themeGet: getTransition })

type TransitionPropertyProp<T extends ITheme> = SystemProp<
  TransitionPropertyGetter<T> | CSS.Property.TransitionProperty,
  T
>
export interface TransitionPropertyProps<T extends ITheme = Theme> {
  transitionProperty?: TransitionPropertyProp<T>
  motionSafeTransitionProperty?: TransitionPropertyProp<T>
  motionReduceTransitionProperty?: TransitionPropertyProp<T>
  firstTransitionProperty?: TransitionPropertyProp<T>
  lastTransitionProperty?: TransitionPropertyProp<T>
  oddTransitionProperty?: TransitionPropertyProp<T>
  evenTransitionProperty?: TransitionPropertyProp<T>
  visitedTransitionProperty?: TransitionPropertyProp<T>
  checkedTransitionProperty?: TransitionPropertyProp<T>
  focusWithinTransitionProperty?: TransitionPropertyProp<T>
  hoverTransitionProperty?: TransitionPropertyProp<T>
  focusTransitionProperty?: TransitionPropertyProp<T>
  focusVisibleTransitionProperty?: TransitionPropertyProp<T>
  activeTransitionProperty?: TransitionPropertyProp<T>
  disabledTransitionProperty?: TransitionPropertyProp<T>
  placeholderTransitionProperty?: TransitionPropertyProp<T>
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
  motionSafeTransitionDuration?: TransitionDurationProp<T>
  motionReduceTransitionDuration?: TransitionDurationProp<T>
  firstTransitionDuration?: TransitionDurationProp<T>
  lastTransitionDuration?: TransitionDurationProp<T>
  oddTransitionDuration?: TransitionDurationProp<T>
  evenTransitionDuration?: TransitionDurationProp<T>
  visitedTransitionDuration?: TransitionDurationProp<T>
  checkedTransitionDuration?: TransitionDurationProp<T>
  focusWithinTransitionDuration?: TransitionDurationProp<T>
  hoverTransitionDuration?: TransitionDurationProp<T>
  focusTransitionDuration?: TransitionDurationProp<T>
  focusVisibleTransitionDuration?: TransitionDurationProp<T>
  activeTransitionDuration?: TransitionDurationProp<T>
  disabledTransitionDuration?: TransitionDurationProp<T>
  placeholderTransitionDuration?: TransitionDurationProp<T>
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
  motionSafeTransitionTimingFunction?: TransitionTimingFunctionProp<T>
  motionReduceTransitionTimingFunction?: TransitionTimingFunctionProp<T>
  firstTransitionTimingFunction?: TransitionTimingFunctionProp<T>
  lastTransitionTimingFunction?: TransitionTimingFunctionProp<T>
  oddTransitionTimingFunction?: TransitionTimingFunctionProp<T>
  evenTransitionTimingFunction?: TransitionTimingFunctionProp<T>
  visitedTransitionTimingFunction?: TransitionTimingFunctionProp<T>
  checkedTransitionTimingFunction?: TransitionTimingFunctionProp<T>
  focusWithinTransitionTimingFunction?: TransitionTimingFunctionProp<T>
  hoverTransitionTimingFunction?: TransitionTimingFunctionProp<T>
  focusTransitionTimingFunction?: TransitionTimingFunctionProp<T>
  focusVisibleTransitionTimingFunction?: TransitionTimingFunctionProp<T>
  activeTransitionTimingFunction?: TransitionTimingFunctionProp<T>
  disabledTransitionTimingFunction?: TransitionTimingFunctionProp<T>
  placeholderTransitionTimingFunction?: TransitionTimingFunctionProp<T>
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
  motionSafeTransitionDelay?: TransitionDelayProp<T>
  motionReduceTransitionDelay?: TransitionDelayProp<T>
  firstTransitionDelay?: TransitionDelayProp<T>
  lastTransitionDelay?: TransitionDelayProp<T>
  oddTransitionDelay?: TransitionDelayProp<T>
  evenTransitionDelay?: TransitionDelayProp<T>
  visitedTransitionDelay?: TransitionDelayProp<T>
  checkedTransitionDelay?: TransitionDelayProp<T>
  focusWithinTransitionDelay?: TransitionDelayProp<T>
  hoverTransitionDelay?: TransitionDelayProp<T>
  focusTransitionDelay?: TransitionDelayProp<T>
  focusVisibleTransitionDelay?: TransitionDelayProp<T>
  activeTransitionDelay?: TransitionDelayProp<T>
  disabledTransitionDelay?: TransitionDelayProp<T>
  placeholderTransitionDelay?: TransitionDelayProp<T>
}
export const transitionDelay = style({
  prop: 'transitionDelay',
  themeGet: getDuration,
})

export type TransitionsProps<T extends ITheme = Theme> = TransitionProps<T> &
  TransitionPropertyProps<T> &
  TransitionDurationProps<T> &
  TransitionTimingFunctionProps<T> &
  TransitionDelayProps<T>

export const transitions = compose(
  transition,
  transitionProperty,
  transitionDuration,
  transitionTimingFunction,
  transitionDelay,
)

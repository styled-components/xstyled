import * as CSS from 'csstype'
import { style, themeGetter, compose } from '../style'
import { px, rpx, percent } from '../unit'
import { SystemProperty, VariantsType, ExtractThemeProperty } from '../types'

// Getters

export type ColorGetter<T = {}> = VariantsType<
  ExtractThemeProperty<T, 'colors'>
>
export const getColor = themeGetter({
  name: 'color',
  key: 'colors',
})

export const getPx = themeGetter({
  name: 'px',
  transform: (value: number | string) => px(rpx(value)),
})

export const getPercent = themeGetter({
  name: 'percent',
  transform: percent,
  compose: getPx,
})

export type RadiusGetter<T = {}> = VariantsType<
  ExtractThemeProperty<T, 'radii'>
>
export const getRadius = themeGetter({
  name: 'radius',
  key: 'radii',
  compose: getPx,
})

export type TransitionGetter<T = {}> = VariantsType<
  ExtractThemeProperty<T, 'transitions'>
>
export const getTransition = themeGetter({
  name: 'transition',
  key: 'transitions',
})

// Style

export interface OpacityProps<T = {}> {
  opacity?: SystemProperty<CSS.Property.Opacity, T>
}
export const opacity = style<OpacityProps>({
  prop: 'opacity',
})

export interface OverflowProps<T = {}> {
  overflow?: SystemProperty<CSS.Property.Overflow, T>
}
export const overflow = style<OverflowProps>({
  prop: 'overflow',
})

export interface TransitionProps<T = {}> {
  transition?: SystemProperty<TransitionGetter<T> | CSS.Property.Transition, T>
}
export const transition = style({ prop: 'transition', themeGet: getTransition })

export type BasicsProps<T = {}> = OpacityProps<T> &
  OverflowProps<T> &
  TransitionProps<T>
export const basics = compose<BasicsProps>(opacity, overflow, transition)

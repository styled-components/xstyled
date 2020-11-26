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
  transform: (value: number | string, { props }) => {
    const rootFontSize = props?.theme?.settings?.rootFontSize ?? undefined
    const num = Number(value)
    return px(rpx(Number.isNaN(num) ? value : num, { rootFontSize }))
  },
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
  shorthand: true,
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

export interface TransitionProps<T = {}> {
  transition?: SystemProperty<TransitionGetter<T> | CSS.Property.Transition, T>
}
export const transition = style({ prop: 'transition', themeGet: getTransition })

export type BasicsProps<T = {}> = OpacityProps<T> & TransitionProps<T>
export const basics = compose<BasicsProps>(opacity, transition)

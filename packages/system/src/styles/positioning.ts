import * as CSS from 'csstype'
import { style, themeGetter, compose } from '../style'
import { getPx } from './units'
import { SystemProperty, VariantsType, ExtractThemeProperty } from '../types'

// Getters
export type ZIndexGetter<T = {}> = VariantsType<
  ExtractThemeProperty<T, 'zIndices'>
>
export const getZIndex = themeGetter({
  name: 'zIndex',
  key: 'zIndices',
})

// Styles
export interface PositionProps<T = {}> {
  position?: SystemProperty<CSS.Property.Position, T>
}
export const position = style<PositionProps>({ prop: 'position' })

export interface ZIndexProps<T = {}> {
  zIndex?: SystemProperty<ZIndexGetter<T> | CSS.Property.ZIndex, T>
}
export const zIndex = style<ZIndexProps>({
  prop: 'zIndex',
  themeGet: getZIndex,
})

export interface TopProps<T = {}> {
  top?: SystemProperty<CSS.Property.Top, T>
}
export const top = style<TopProps>({
  prop: 'top',
  themeGet: getPx,
})

export interface RightProps<T = {}> {
  right?: SystemProperty<CSS.Property.Right, T>
}
export const right = style<RightProps>({
  prop: 'right',
  themeGet: getPx,
})

export interface BottomProps<T = {}> {
  bottom?: SystemProperty<CSS.Property.Bottom, T>
}
export const bottom = style<BottomProps>({
  prop: 'bottom',
  themeGet: getPx,
})

export interface LeftProps<T = {}> {
  left?: SystemProperty<CSS.Property.Left, T>
}
export const left = style<LeftProps>({
  prop: 'left',
  themeGet: getPx,
})

export type PositioningProps<T = {}> = PositionProps<T> &
  ZIndexProps<T> &
  TopProps<T> &
  RightProps<T> &
  BottomProps<T> &
  LeftProps<T>
export const positioning = compose<PositioningProps>(
  position,
  zIndex,
  top,
  right,
  bottom,
  left,
)

import * as CSS from 'csstype'
import { style, compose } from '../style'
import { SystemProperty } from '../types'

export interface DisplayProps<T = {}> {
  display?: SystemProperty<CSS.Property.Display, T>
}
export const display = style<DisplayProps>({
  prop: 'display',
})

export interface OverflowProps<T = {}> {
  overflow?: SystemProperty<CSS.Property.Overflow, T>
}
export const overflow = style<OverflowProps>({
  prop: 'overflow',
})

export interface OverflowXProps<T = {}> {
  overflowX?: SystemProperty<CSS.Property.OverflowX, T>
}
export const overflowX = style<OverflowXProps>({
  prop: 'overflowX',
})

export interface OverflowYProps<T = {}> {
  overflowY?: SystemProperty<CSS.Property.OverflowY, T>
}
export const overflowY = style<OverflowYProps>({
  prop: 'overflowY',
})

export type LayoutProps<T = {}> = DisplayProps<T> &
  OverflowProps<T> &
  OverflowXProps<T> &
  OverflowYProps<T>
export const layout = compose<LayoutProps>(
  display,
  overflow,
  overflowX,
  overflowY,
)

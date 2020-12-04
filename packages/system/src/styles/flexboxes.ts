import * as CSS from 'csstype'
import { style, compose } from '../style'
import { getPercent } from './units'
import { display, DisplayProps } from './layout'
import { SystemProperty } from '../types'

export interface AlignItemsProps<T = {}> {
  alignItems?: SystemProperty<CSS.Property.AlignItems, T>
}
export const alignItems = style<AlignItemsProps>({
  prop: 'alignItems',
})

export interface AlignContentProps<T = {}> {
  alignContent?: SystemProperty<CSS.Property.AlignContent, T>
}
export const alignContent = style<AlignContentProps>({
  prop: 'alignContent',
})

export interface JustifyContentProps<T = {}> {
  justifyContent?: SystemProperty<CSS.Property.JustifyContent, T>
}
export const justifyContent = style<JustifyContentProps>({
  prop: 'justifyContent',
})

export interface JustifyItemsProps<T = {}> {
  justifyItems?: SystemProperty<CSS.Property.JustifyItems, T>
}
export const justifyItems = style<JustifyItemsProps>({
  prop: 'justifyItems',
})

export interface FlexWrapProps<T = {}> {
  flexWrap?: SystemProperty<CSS.Property.FlexWrap, T>
}
export const flexWrap = style<FlexWrapProps>({
  prop: 'flexWrap',
})

export interface FlexGrowProps<T = {}> {
  flexGrow?: SystemProperty<CSS.Property.FlexGrow, T>
}
export const flexGrow = style<FlexGrowProps>({
  prop: 'flexGrow',
})

export interface FlexShrinkProps<T = {}> {
  flexShrink?: SystemProperty<CSS.Property.FlexShrink, T>
}
export const flexShrink = style<FlexShrinkProps>({
  prop: 'flexShrink',
})

export interface FlexBasisProps<T = {}> {
  flexBasis?: SystemProperty<CSS.Property.FlexBasis, T>
}
export const flexBasis = style<FlexBasisProps>({
  prop: 'flexBasis',
  themeGet: getPercent,
})

export interface FlexDirectionProps<T = {}> {
  flexDirection?: SystemProperty<CSS.Property.FlexDirection, T>
}
export const flexDirection = style<FlexDirectionProps>({
  prop: 'flexDirection',
})

export interface FlexProps<T = {}> {
  flex?: SystemProperty<CSS.Property.Flex, T>
}
export const flex = style<FlexProps>({
  prop: 'flex',
})

export interface JustifySelfProps<T = {}> {
  justifySelf?: SystemProperty<CSS.Property.JustifySelf, T>
}
export const justifySelf = style<JustifySelfProps>({
  prop: 'justifySelf',
})

export interface AlignSelfProps<T = {}> {
  alignSelf?: SystemProperty<CSS.Property.AlignSelf, T>
}
export const alignSelf = style<AlignSelfProps>({
  prop: 'alignSelf',
})

export interface OrderProps<T = {}> {
  order?: SystemProperty<CSS.Property.Order, T>
}
export const order = style<OrderProps>({
  prop: 'order',
})

export type FlexboxesProps<T = {}> = DisplayProps<T> &
  AlignItemsProps<T> &
  JustifyContentProps<T> &
  JustifyItemsProps<T> &
  FlexWrapProps<T> &
  FlexWrapProps<T> &
  FlexShrinkProps<T> &
  FlexGrowProps<T> &
  FlexDirectionProps<T> &
  FlexProps<T> &
  JustifySelfProps<T> &
  AlignSelfProps<T> &
  OrderProps<T>
export const flexboxes = compose<FlexboxesProps>(
  display,
  alignItems,
  alignContent,
  justifyContent,
  justifyItems,
  flexWrap,
  flexBasis,
  flexShrink,
  flexGrow,
  flexDirection,
  flex,
  justifySelf,
  alignSelf,
  order,
)

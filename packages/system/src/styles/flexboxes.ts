import * as CSS from 'csstype'
import { style, compose } from '../style'
import { getPercent } from './units'
import { display, DisplayProps } from './layout'
import { SystemProp, ITheme, Theme } from '../types'

export interface AlignItemsProps<T extends ITheme = Theme> {
  alignItems?: SystemProp<CSS.Property.AlignItems, T>
}
export const alignItems = style<AlignItemsProps>({
  prop: 'alignItems',
})

export interface AlignContentProps<T extends ITheme = Theme> {
  alignContent?: SystemProp<CSS.Property.AlignContent, T>
}
export const alignContent = style<AlignContentProps>({
  prop: 'alignContent',
})

export interface JustifyContentProps<T extends ITheme = Theme> {
  justifyContent?: SystemProp<CSS.Property.JustifyContent, T>
}
export const justifyContent = style<JustifyContentProps>({
  prop: 'justifyContent',
})

export interface JustifyItemsProps<T extends ITheme = Theme> {
  justifyItems?: SystemProp<CSS.Property.JustifyItems, T>
}
export const justifyItems = style<JustifyItemsProps>({
  prop: 'justifyItems',
})

export interface FlexWrapProps<T extends ITheme = Theme> {
  flexWrap?: SystemProp<CSS.Property.FlexWrap, T>
}
export const flexWrap = style<FlexWrapProps>({
  prop: 'flexWrap',
})

export interface FlexGrowProps<T extends ITheme = Theme> {
  flexGrow?: SystemProp<CSS.Property.FlexGrow, T>
}
export const flexGrow = style<FlexGrowProps>({
  prop: 'flexGrow',
})

export interface FlexShrinkProps<T extends ITheme = Theme> {
  flexShrink?: SystemProp<CSS.Property.FlexShrink, T>
}
export const flexShrink = style<FlexShrinkProps>({
  prop: 'flexShrink',
})

export interface FlexBasisProps<T extends ITheme = Theme> {
  flexBasis?: SystemProp<CSS.Property.FlexBasis | number, T>
}
export const flexBasis = style<FlexBasisProps>({
  prop: 'flexBasis',
  themeGet: getPercent,
})

export interface FlexDirectionProps<T extends ITheme = Theme> {
  flexDirection?: SystemProp<CSS.Property.FlexDirection, T>
}
export const flexDirection = style<FlexDirectionProps>({
  prop: 'flexDirection',
})

export interface FlexProps<T extends ITheme = Theme> {
  flex?: SystemProp<CSS.Property.Flex, T>
}
export const flex = style<FlexProps>({
  prop: 'flex',
})

export interface JustifySelfProps<T extends ITheme = Theme> {
  justifySelf?: SystemProp<CSS.Property.JustifySelf, T>
}
export const justifySelf = style<JustifySelfProps>({
  prop: 'justifySelf',
})

export interface AlignSelfProps<T extends ITheme = Theme> {
  alignSelf?: SystemProp<CSS.Property.AlignSelf, T>
}
export const alignSelf = style<AlignSelfProps>({
  prop: 'alignSelf',
})

export interface OrderProps<T extends ITheme = Theme> {
  order?: SystemProp<CSS.Property.Order, T>
}
export const order = style<OrderProps>({
  prop: 'order',
})

export interface FlexboxesProps<T extends ITheme = Theme>
  extends DisplayProps<T>,
    AlignItemsProps<T>,
    AlignContentProps<T>,
    JustifyContentProps<T>,
    JustifyItemsProps<T>,
    FlexWrapProps<T>,
    FlexBasisProps<T>,
    FlexShrinkProps<T>,
    FlexGrowProps<T>,
    FlexDirectionProps<T>,
    FlexProps<T>,
    JustifySelfProps<T>,
    AlignSelfProps<T>,
    OrderProps<T> {}
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

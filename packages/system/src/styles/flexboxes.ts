import * as CSS from 'csstype'
import { style, compose } from '../style'
import { getPercent } from './units'
import { display, DisplayProps } from './layout'
import { SystemProp, ITheme, Theme } from '../types'

type AlignItemsProp<T extends ITheme> = SystemProp<CSS.Property.AlignItems, T>
export interface AlignItemsProps<T extends ITheme = Theme> {
  alignItems?: AlignItemsProp<T>
}
export const alignItems = style({
  prop: 'alignItems',
})

type AlignContentProp<T extends ITheme> = SystemProp<
  CSS.Property.AlignContent,
  T
>
export interface AlignContentProps<T extends ITheme = Theme> {
  alignContent?: AlignContentProp<T>
}
export const alignContent = style({
  prop: 'alignContent',
})

type JustifyContentProp<T extends ITheme> = SystemProp<
  CSS.Property.JustifyContent,
  T
>
export interface JustifyContentProps<T extends ITheme = Theme> {
  justifyContent?: JustifyContentProp<T>
}
export const justifyContent = style({
  prop: 'justifyContent',
})

type JustifyItemsProp<T extends ITheme> = SystemProp<
  CSS.Property.JustifyItems,
  T
>
export interface JustifyItemsProps<T extends ITheme = Theme> {
  justifyItems?: JustifyItemsProp<T>
}
export const justifyItems = style({
  prop: 'justifyItems',
})

type FlexWrapProp<T extends ITheme> = SystemProp<CSS.Property.FlexWrap, T>
export interface FlexWrapProps<T extends ITheme = Theme> {
  flexWrap?: FlexWrapProp<T>
}
export const flexWrap = style({
  prop: 'flexWrap',
})

type FlexGrowProp<T extends ITheme> = SystemProp<CSS.Property.FlexGrow, T>
export interface FlexGrowProps<T extends ITheme = Theme> {
  flexGrow?: FlexGrowProp<T>
}
export const flexGrow = style({
  prop: 'flexGrow',
})

type FlexShrinkProp<T extends ITheme> = SystemProp<CSS.Property.FlexShrink, T>
export interface FlexShrinkProps<T extends ITheme = Theme> {
  flexShrink?: FlexShrinkProp<T>
}
export const flexShrink = style({
  prop: 'flexShrink',
})

type FlexBasisProp<T extends ITheme> = SystemProp<CSS.Property.FlexBasis, T>
export interface FlexBasisProps<T extends ITheme = Theme> {
  flexBasis?: FlexBasisProp<T>
}
export const flexBasis = style({
  prop: 'flexBasis',
  themeGet: getPercent,
})

type FlexDirectionProp<T extends ITheme> = SystemProp<
  CSS.Property.FlexDirection,
  T
>
export interface FlexDirectionProps<T extends ITheme = Theme> {
  flexDirection?: FlexDirectionProp<T>
}
export const flexDirection = style({
  prop: 'flexDirection',
})

type FlexProp<T extends ITheme> = SystemProp<CSS.Property.Flex, T>
export interface FlexProps<T extends ITheme = Theme> {
  flex?: FlexProp<T>
}
export const flex = style({
  prop: 'flex',
})

type JustifySelfProp<T extends ITheme> = SystemProp<CSS.Property.JustifySelf, T>
export interface JustifySelfProps<T extends ITheme = Theme> {
  justifySelf?: JustifySelfProp<T>
}
export const justifySelf = style({
  prop: 'justifySelf',
})

type AlignSelfProp<T extends ITheme> = SystemProp<CSS.Property.AlignSelf, T>
export interface AlignSelfProps<T extends ITheme = Theme> {
  alignSelf?: AlignSelfProp<T>
}
export const alignSelf = style({
  prop: 'alignSelf',
})

type OrderProp<T extends ITheme> = SystemProp<CSS.Property.Order, T>
export interface OrderProps<T extends ITheme = Theme> {
  order?: OrderProp<T>
}
export const order = style({
  prop: 'order',
})

export interface FlexboxesProps<T extends ITheme = Theme>
  extends DisplayProps<T>,
    AlignItemsProps<T>,
    AlignContentProps<T>,
    JustifyContentProps<T>,
    JustifyItemsProps<T>,
    FlexWrapProps<T>,
    FlexWrapProps<T>,
    FlexShrinkProps<T>,
    FlexGrowProps<T>,
    FlexDirectionProps<T>,
    FlexProps<T>,
    JustifySelfProps<T>,
    AlignSelfProps<T>,
    OrderProps<T> {}
export const flexboxes = compose(
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

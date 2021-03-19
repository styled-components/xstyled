import * as CSS from 'csstype'
import { style, compose } from '../style'
import { getPercent } from './units'
import { display, DisplayProps } from './layout'
import { SystemProp, ITheme, Theme } from '../types'

type AlignItemsProp<T extends ITheme> = SystemProp<CSS.Property.AlignItems, T>
export interface AlignItemsProps<T extends ITheme = Theme> {
  alignItems?: AlignItemsProp<T>
  motionSafeAlignItems?: AlignItemsProp<T>
  motionReduceAlignItems?: AlignItemsProp<T>
  firstAlignItems?: AlignItemsProp<T>
  lastAlignItems?: AlignItemsProp<T>
  oddAlignItems?: AlignItemsProp<T>
  evenAlignItems?: AlignItemsProp<T>
  visitedAlignItems?: AlignItemsProp<T>
  checkedAlignItems?: AlignItemsProp<T>
  focusWithinAlignItems?: AlignItemsProp<T>
  hoverAlignItems?: AlignItemsProp<T>
  focusAlignItems?: AlignItemsProp<T>
  focusVisibleAlignItems?: AlignItemsProp<T>
  activeAlignItems?: AlignItemsProp<T>
  disabledAlignItems?: AlignItemsProp<T>
  placeholderAlignItems?: AlignItemsProp<T>
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
  motionSafeAlignContent?: AlignContentProp<T>
  motionReduceAlignContent?: AlignContentProp<T>
  firstAlignContent?: AlignContentProp<T>
  lastAlignContent?: AlignContentProp<T>
  oddAlignContent?: AlignContentProp<T>
  evenAlignContent?: AlignContentProp<T>
  visitedAlignContent?: AlignContentProp<T>
  checkedAlignContent?: AlignContentProp<T>
  focusWithinAlignContent?: AlignContentProp<T>
  hoverAlignContent?: AlignContentProp<T>
  focusAlignContent?: AlignContentProp<T>
  focusVisibleAlignContent?: AlignContentProp<T>
  activeAlignContent?: AlignContentProp<T>
  disabledAlignContent?: AlignContentProp<T>
  placeholderAlignContent?: AlignContentProp<T>
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
  motionSafeJustifyContent?: JustifyContentProp<T>
  motionReduceJustifyContent?: JustifyContentProp<T>
  firstJustifyContent?: JustifyContentProp<T>
  lastJustifyContent?: JustifyContentProp<T>
  oddJustifyContent?: JustifyContentProp<T>
  evenJustifyContent?: JustifyContentProp<T>
  visitedJustifyContent?: JustifyContentProp<T>
  checkedJustifyContent?: JustifyContentProp<T>
  focusWithinJustifyContent?: JustifyContentProp<T>
  hoverJustifyContent?: JustifyContentProp<T>
  focusJustifyContent?: JustifyContentProp<T>
  focusVisibleJustifyContent?: JustifyContentProp<T>
  activeJustifyContent?: JustifyContentProp<T>
  disabledJustifyContent?: JustifyContentProp<T>
  placeholderJustifyContent?: JustifyContentProp<T>
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
  motionSafeJustifyItems?: JustifyItemsProp<T>
  motionReduceJustifyItems?: JustifyItemsProp<T>
  firstJustifyItems?: JustifyItemsProp<T>
  lastJustifyItems?: JustifyItemsProp<T>
  oddJustifyItems?: JustifyItemsProp<T>
  evenJustifyItems?: JustifyItemsProp<T>
  visitedJustifyItems?: JustifyItemsProp<T>
  checkedJustifyItems?: JustifyItemsProp<T>
  focusWithinJustifyItems?: JustifyItemsProp<T>
  hoverJustifyItems?: JustifyItemsProp<T>
  focusJustifyItems?: JustifyItemsProp<T>
  focusVisibleJustifyItems?: JustifyItemsProp<T>
  activeJustifyItems?: JustifyItemsProp<T>
  disabledJustifyItems?: JustifyItemsProp<T>
  placeholderJustifyItems?: JustifyItemsProp<T>
}
export const justifyItems = style({
  prop: 'justifyItems',
})

type FlexWrapProp<T extends ITheme> = SystemProp<CSS.Property.FlexWrap, T>
export interface FlexWrapProps<T extends ITheme = Theme> {
  flexWrap?: FlexWrapProp<T>
  motionSafeFlexWrap?: FlexWrapProp<T>
  motionReduceFlexWrap?: FlexWrapProp<T>
  firstFlexWrap?: FlexWrapProp<T>
  lastFlexWrap?: FlexWrapProp<T>
  oddFlexWrap?: FlexWrapProp<T>
  evenFlexWrap?: FlexWrapProp<T>
  visitedFlexWrap?: FlexWrapProp<T>
  checkedFlexWrap?: FlexWrapProp<T>
  focusWithinFlexWrap?: FlexWrapProp<T>
  hoverFlexWrap?: FlexWrapProp<T>
  focusFlexWrap?: FlexWrapProp<T>
  focusVisibleFlexWrap?: FlexWrapProp<T>
  activeFlexWrap?: FlexWrapProp<T>
  disabledFlexWrap?: FlexWrapProp<T>
  placeholderFlexWrap?: FlexWrapProp<T>
}
export const flexWrap = style({
  prop: 'flexWrap',
})

type FlexGrowProp<T extends ITheme> = SystemProp<CSS.Property.FlexGrow, T>
export interface FlexGrowProps<T extends ITheme = Theme> {
  flexGrow?: FlexGrowProp<T>
  motionSafeFlexGrow?: FlexGrowProp<T>
  motionReduceFlexGrow?: FlexGrowProp<T>
  firstFlexGrow?: FlexGrowProp<T>
  lastFlexGrow?: FlexGrowProp<T>
  oddFlexGrow?: FlexGrowProp<T>
  evenFlexGrow?: FlexGrowProp<T>
  visitedFlexGrow?: FlexGrowProp<T>
  checkedFlexGrow?: FlexGrowProp<T>
  focusWithinFlexGrow?: FlexGrowProp<T>
  hoverFlexGrow?: FlexGrowProp<T>
  focusFlexGrow?: FlexGrowProp<T>
  focusVisibleFlexGrow?: FlexGrowProp<T>
  activeFlexGrow?: FlexGrowProp<T>
  disabledFlexGrow?: FlexGrowProp<T>
  placeholderFlexGrow?: FlexGrowProp<T>
}
export const flexGrow = style({
  prop: 'flexGrow',
})

type FlexShrinkProp<T extends ITheme> = SystemProp<CSS.Property.FlexShrink, T>
export interface FlexShrinkProps<T extends ITheme = Theme> {
  flexShrink?: FlexShrinkProp<T>
  motionSafeFlexShrink?: FlexShrinkProp<T>
  motionReduceFlexShrink?: FlexShrinkProp<T>
  firstFlexShrink?: FlexShrinkProp<T>
  lastFlexShrink?: FlexShrinkProp<T>
  oddFlexShrink?: FlexShrinkProp<T>
  evenFlexShrink?: FlexShrinkProp<T>
  visitedFlexShrink?: FlexShrinkProp<T>
  checkedFlexShrink?: FlexShrinkProp<T>
  focusWithinFlexShrink?: FlexShrinkProp<T>
  hoverFlexShrink?: FlexShrinkProp<T>
  focusFlexShrink?: FlexShrinkProp<T>
  focusVisibleFlexShrink?: FlexShrinkProp<T>
  activeFlexShrink?: FlexShrinkProp<T>
  disabledFlexShrink?: FlexShrinkProp<T>
  placeholderFlexShrink?: FlexShrinkProp<T>
}
export const flexShrink = style({
  prop: 'flexShrink',
})

type FlexBasisProp<T extends ITheme> = SystemProp<CSS.Property.FlexBasis, T>
export interface FlexBasisProps<T extends ITheme = Theme> {
  flexBasis?: FlexBasisProp<T>
  motionSafeFlexBasis?: FlexBasisProp<T>
  motionReduceFlexBasis?: FlexBasisProp<T>
  firstFlexBasis?: FlexBasisProp<T>
  lastFlexBasis?: FlexBasisProp<T>
  oddFlexBasis?: FlexBasisProp<T>
  evenFlexBasis?: FlexBasisProp<T>
  visitedFlexBasis?: FlexBasisProp<T>
  checkedFlexBasis?: FlexBasisProp<T>
  focusWithinFlexBasis?: FlexBasisProp<T>
  hoverFlexBasis?: FlexBasisProp<T>
  focusFlexBasis?: FlexBasisProp<T>
  focusVisibleFlexBasis?: FlexBasisProp<T>
  activeFlexBasis?: FlexBasisProp<T>
  disabledFlexBasis?: FlexBasisProp<T>
  placeholderFlexBasis?: FlexBasisProp<T>
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
  motionSafeFlexDirection?: FlexDirectionProp<T>
  motionReduceFlexDirection?: FlexDirectionProp<T>
  firstFlexDirection?: FlexDirectionProp<T>
  lastFlexDirection?: FlexDirectionProp<T>
  oddFlexDirection?: FlexDirectionProp<T>
  evenFlexDirection?: FlexDirectionProp<T>
  visitedFlexDirection?: FlexDirectionProp<T>
  checkedFlexDirection?: FlexDirectionProp<T>
  focusWithinFlexDirection?: FlexDirectionProp<T>
  hoverFlexDirection?: FlexDirectionProp<T>
  focusFlexDirection?: FlexDirectionProp<T>
  focusVisibleFlexDirection?: FlexDirectionProp<T>
  activeFlexDirection?: FlexDirectionProp<T>
  disabledFlexDirection?: FlexDirectionProp<T>
  placeholderFlexDirection?: FlexDirectionProp<T>
}
export const flexDirection = style({
  prop: 'flexDirection',
})

type FlexProp<T extends ITheme> = SystemProp<CSS.Property.Flex, T>
export interface FlexProps<T extends ITheme = Theme> {
  flex?: FlexProp<T>
  motionSafeFlex?: FlexProp<T>
  motionReduceFlex?: FlexProp<T>
  firstFlex?: FlexProp<T>
  lastFlex?: FlexProp<T>
  oddFlex?: FlexProp<T>
  evenFlex?: FlexProp<T>
  visitedFlex?: FlexProp<T>
  checkedFlex?: FlexProp<T>
  focusWithinFlex?: FlexProp<T>
  hoverFlex?: FlexProp<T>
  focusFlex?: FlexProp<T>
  focusVisibleFlex?: FlexProp<T>
  activeFlex?: FlexProp<T>
  disabledFlex?: FlexProp<T>
  placeholderFlex?: FlexProp<T>
}
export const flex = style({
  prop: 'flex',
})

type JustifySelfProp<T extends ITheme> = SystemProp<CSS.Property.JustifySelf, T>
export interface JustifySelfProps<T extends ITheme = Theme> {
  justifySelf?: JustifySelfProp<T>
  motionSafeJustifySelf?: JustifySelfProp<T>
  motionReduceJustifySelf?: JustifySelfProp<T>
  firstJustifySelf?: JustifySelfProp<T>
  lastJustifySelf?: JustifySelfProp<T>
  oddJustifySelf?: JustifySelfProp<T>
  evenJustifySelf?: JustifySelfProp<T>
  visitedJustifySelf?: JustifySelfProp<T>
  checkedJustifySelf?: JustifySelfProp<T>
  focusWithinJustifySelf?: JustifySelfProp<T>
  hoverJustifySelf?: JustifySelfProp<T>
  focusJustifySelf?: JustifySelfProp<T>
  focusVisibleJustifySelf?: JustifySelfProp<T>
  activeJustifySelf?: JustifySelfProp<T>
  disabledJustifySelf?: JustifySelfProp<T>
  placeholderJustifySelf?: JustifySelfProp<T>
}
export const justifySelf = style({
  prop: 'justifySelf',
})

type AlignSelfProp<T extends ITheme> = SystemProp<CSS.Property.AlignSelf, T>
export interface AlignSelfProps<T extends ITheme = Theme> {
  alignSelf?: AlignSelfProp<T>
  motionSafeAlignSelf?: AlignSelfProp<T>
  motionReduceAlignSelf?: AlignSelfProp<T>
  firstAlignSelf?: AlignSelfProp<T>
  lastAlignSelf?: AlignSelfProp<T>
  oddAlignSelf?: AlignSelfProp<T>
  evenAlignSelf?: AlignSelfProp<T>
  visitedAlignSelf?: AlignSelfProp<T>
  checkedAlignSelf?: AlignSelfProp<T>
  focusWithinAlignSelf?: AlignSelfProp<T>
  hoverAlignSelf?: AlignSelfProp<T>
  focusAlignSelf?: AlignSelfProp<T>
  focusVisibleAlignSelf?: AlignSelfProp<T>
  activeAlignSelf?: AlignSelfProp<T>
  disabledAlignSelf?: AlignSelfProp<T>
  placeholderAlignSelf?: AlignSelfProp<T>
}
export const alignSelf = style({
  prop: 'alignSelf',
})

type OrderProp<T extends ITheme> = SystemProp<CSS.Property.Order, T>
export interface OrderProps<T extends ITheme = Theme> {
  order?: OrderProp<T>
  motionSafeOrder?: OrderProp<T>
  motionReduceOrder?: OrderProp<T>
  firstOrder?: OrderProp<T>
  lastOrder?: OrderProp<T>
  oddOrder?: OrderProp<T>
  evenOrder?: OrderProp<T>
  visitedOrder?: OrderProp<T>
  checkedOrder?: OrderProp<T>
  focusWithinOrder?: OrderProp<T>
  hoverOrder?: OrderProp<T>
  focusOrder?: OrderProp<T>
  focusVisibleOrder?: OrderProp<T>
  activeOrder?: OrderProp<T>
  disabledOrder?: OrderProp<T>
  placeholderOrder?: OrderProp<T>
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

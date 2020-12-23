import * as CSS from 'csstype'
import { style, themeGetter, compose } from '../style'
import { getPercent } from './units'
import { SystemProp, VariantsType, ITheme, Theme } from '../types'

// Getters

export type SizeGetter<T extends ITheme = Theme> = VariantsType<T['sizes']>
export const getSize = themeGetter({
  name: 'size',
  key: 'sizes',
  compose: getPercent,
})

// Styles

type WidthProp<T extends ITheme> = SystemProp<
  SizeGetter<T> | CSS.Property.Width,
  T
>
export interface WidthProps<T extends ITheme = Theme> {
  width?: WidthProp<T>
  motionSafeWidth?: WidthProp<T>
  motionReduceWidth?: WidthProp<T>
  firstWidth?: WidthProp<T>
  lastWidth?: WidthProp<T>
  oddWidth?: WidthProp<T>
  evenWidth?: WidthProp<T>
  visitedWidth?: WidthProp<T>
  checkedWidth?: WidthProp<T>
  focusWithinWidth?: WidthProp<T>
  hoverWidth?: WidthProp<T>
  focusWidth?: WidthProp<T>
  focusVisibleWidth?: WidthProp<T>
  activeWidth?: WidthProp<T>
  disabledWidth?: WidthProp<T>
  placeholderWidth?: WidthProp<T>
  w?: WidthProp<T>
  motionSafeW?: WidthProp<T>
  motionReduceW?: WidthProp<T>
  firstW?: WidthProp<T>
  lastW?: WidthProp<T>
  oddW?: WidthProp<T>
  evenW?: WidthProp<T>
  visitedW?: WidthProp<T>
  checkedW?: WidthProp<T>
  focusWithinW?: WidthProp<T>
  hoverW?: WidthProp<T>
  focusW?: WidthProp<T>
  focusVisibleW?: WidthProp<T>
  activeW?: WidthProp<T>
  disabledW?: WidthProp<T>
  placeholderW?: WidthProp<T>
}
export const width = style({
  prop: ['width', 'w'],
  cssProperty: 'width',
  themeGet: getSize,
})

type HeightProp<T extends ITheme> = SystemProp<
  SizeGetter<T> | CSS.Property.Height,
  T
>
export interface HeightProps<T extends ITheme = Theme> {
  height?: HeightProp<T>
  motionSafeHeight?: HeightProp<T>
  motionReduceHeight?: HeightProp<T>
  firstHeight?: HeightProp<T>
  lastHeight?: HeightProp<T>
  oddHeight?: HeightProp<T>
  evenHeight?: HeightProp<T>
  visitedHeight?: HeightProp<T>
  checkedHeight?: HeightProp<T>
  focusWithinHeight?: HeightProp<T>
  hoverHeight?: HeightProp<T>
  focusHeight?: HeightProp<T>
  focusVisibleHeight?: HeightProp<T>
  activeHeight?: HeightProp<T>
  disabledHeight?: HeightProp<T>
  placeholderHeight?: HeightProp<T>
  h?: HeightProp<T>
  motionSafeH?: HeightProp<T>
  motionReduceH?: HeightProp<T>
  firstH?: HeightProp<T>
  lastH?: HeightProp<T>
  oddH?: HeightProp<T>
  evenH?: HeightProp<T>
  visitedH?: HeightProp<T>
  checkedH?: HeightProp<T>
  focusWithinH?: HeightProp<T>
  hoverH?: HeightProp<T>
  focusH?: HeightProp<T>
  focusVisibleH?: HeightProp<T>
  activeH?: HeightProp<T>
  disabledH?: HeightProp<T>
  placeholderH?: HeightProp<T>
}
export const height = style({
  prop: ['height', 'h'],
  cssProperty: 'height',
  themeGet: getSize,
})

type MaxWidthProp<T extends ITheme> = SystemProp<
  SizeGetter<T> | CSS.Property.MaxWidth,
  T
>
export interface MaxWidthProps<T extends ITheme = Theme> {
  maxWidth?: MaxWidthProp<T>
  motionSafeMaxWidth?: MaxWidthProp<T>
  motionReduceMaxWidth?: MaxWidthProp<T>
  firstMaxWidth?: MaxWidthProp<T>
  lastMaxWidth?: MaxWidthProp<T>
  oddMaxWidth?: MaxWidthProp<T>
  evenMaxWidth?: MaxWidthProp<T>
  visitedMaxWidth?: MaxWidthProp<T>
  checkedMaxWidth?: MaxWidthProp<T>
  focusWithinMaxWidth?: MaxWidthProp<T>
  hoverMaxWidth?: MaxWidthProp<T>
  focusMaxWidth?: MaxWidthProp<T>
  focusVisibleMaxWidth?: MaxWidthProp<T>
  activeMaxWidth?: MaxWidthProp<T>
  disabledMaxWidth?: MaxWidthProp<T>
  placeholderMaxWidth?: MaxWidthProp<T>
}
export const maxWidth = style({
  prop: 'maxWidth',
  themeGet: getSize,
})

type MaxHeightProp<T extends ITheme> = SystemProp<
  SizeGetter<T> | CSS.Property.MaxHeight,
  T
>
export interface MaxHeightProps<T extends ITheme = Theme> {
  maxHeight?: MaxHeightProp<T>
  motionSafeMaxHeight?: MaxHeightProp<T>
  motionReduceMaxHeight?: MaxHeightProp<T>
  firstMaxHeight?: MaxHeightProp<T>
  lastMaxHeight?: MaxHeightProp<T>
  oddMaxHeight?: MaxHeightProp<T>
  evenMaxHeight?: MaxHeightProp<T>
  visitedMaxHeight?: MaxHeightProp<T>
  checkedMaxHeight?: MaxHeightProp<T>
  focusWithinMaxHeight?: MaxHeightProp<T>
  hoverMaxHeight?: MaxHeightProp<T>
  focusMaxHeight?: MaxHeightProp<T>
  focusVisibleMaxHeight?: MaxHeightProp<T>
  activeMaxHeight?: MaxHeightProp<T>
  disabledMaxHeight?: MaxHeightProp<T>
  placeholderMaxHeight?: MaxHeightProp<T>
}
export const maxHeight = style({
  prop: 'maxHeight',
  themeGet: getSize,
})

type MinWidthProp<T extends ITheme> = SystemProp<
  SizeGetter<T> | CSS.Property.MinWidth,
  T
>
export interface MinWidthProps<T extends ITheme = Theme> {
  minWidth?: MinWidthProp<T>
  motionSafeMinWidth?: MinWidthProp<T>
  motionReduceMinWidth?: MinWidthProp<T>
  firstMinWidth?: MinWidthProp<T>
  lastMinWidth?: MinWidthProp<T>
  oddMinWidth?: MinWidthProp<T>
  evenMinWidth?: MinWidthProp<T>
  visitedMinWidth?: MinWidthProp<T>
  checkedMinWidth?: MinWidthProp<T>
  focusWithinMinWidth?: MinWidthProp<T>
  hoverMinWidth?: MinWidthProp<T>
  focusMinWidth?: MinWidthProp<T>
  focusVisibleMinWidth?: MinWidthProp<T>
  activeMinWidth?: MinWidthProp<T>
  disabledMinWidth?: MinWidthProp<T>
  placeholderMinWidth?: MinWidthProp<T>
}
export const minWidth = style({
  prop: 'minWidth',
  themeGet: getSize,
})

type MinHeightProp<T extends ITheme> = SystemProp<
  SizeGetter<T> | CSS.Property.MinHeight,
  T
>
export interface MinHeightProps<T extends ITheme = Theme> {
  minHeight?: MinHeightProp<T>
  motionSafeMinHeight?: MinHeightProp<T>
  motionReduceMinHeight?: MinHeightProp<T>
  firstMinHeight?: MinHeightProp<T>
  lastMinHeight?: MinHeightProp<T>
  oddMinHeight?: MinHeightProp<T>
  evenMinHeight?: MinHeightProp<T>
  visitedMinHeight?: MinHeightProp<T>
  checkedMinHeight?: MinHeightProp<T>
  focusWithinMinHeight?: MinHeightProp<T>
  hoverMinHeight?: MinHeightProp<T>
  focusMinHeight?: MinHeightProp<T>
  focusVisibleMinHeight?: MinHeightProp<T>
  activeMinHeight?: MinHeightProp<T>
  disabledMinHeight?: MinHeightProp<T>
  placeholderMinHeight?: MinHeightProp<T>
}
export const minHeight = style({
  prop: 'minHeight',
  themeGet: getSize,
})

export type SizingProps<T extends ITheme = Theme> = WidthProps<T> &
  HeightProps<T> &
  MaxWidthProps<T> &
  MaxHeightProps<T> &
  MinWidthProps<T> &
  MinHeightProps<T>
export const sizing = compose(
  width,
  height,
  maxWidth,
  maxHeight,
  minWidth,
  minHeight,
)

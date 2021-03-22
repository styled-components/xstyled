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
  prop: 'w',
  cssProperty: 'width',
  themeGet: getSize,
})

type HeightProp<T extends ITheme> = SystemProp<
  SizeGetter<T> | CSS.Property.Height,
  T
>
export interface HeightProps<T extends ITheme = Theme> {
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
  prop: 'h',
  cssProperty: 'height',
  themeGet: getSize,
})

type MaxWidthProp<T extends ITheme> = SystemProp<
  SizeGetter<T> | CSS.Property.MaxWidth,
  T
>
export interface MaxWidthProps<T extends ITheme = Theme> {
  // maxWidth
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

  // maxW
  maxW?: MaxWidthProp<T>
  motionSafeMaxW?: MaxWidthProp<T>
  motionReduceMaxW?: MaxWidthProp<T>
  firstMaxW?: MaxWidthProp<T>
  lastMaxW?: MaxWidthProp<T>
  oddMaxW?: MaxWidthProp<T>
  evenMaxW?: MaxWidthProp<T>
  visitedMaxW?: MaxWidthProp<T>
  checkedMaxW?: MaxWidthProp<T>
  focusWithinMaxW?: MaxWidthProp<T>
  hoverMaxW?: MaxWidthProp<T>
  focusMaxW?: MaxWidthProp<T>
  focusVisibleMaxW?: MaxWidthProp<T>
  activeMaxW?: MaxWidthProp<T>
  disabledMaxW?: MaxWidthProp<T>
  placeholderMaxW?: MaxWidthProp<T>
}
export const maxWidth = style({
  prop: ['maxWidth', 'maxW'],
  themeGet: getSize,
})

type MaxHeightProp<T extends ITheme> = SystemProp<
  SizeGetter<T> | CSS.Property.MaxHeight,
  T
>
export interface MaxHeightProps<T extends ITheme = Theme> {
  // maxHeight
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

  // maxH
  maxH?: MaxWidthProp<T>
  motionSafeMaxH?: MaxWidthProp<T>
  motionReduceMaxH?: MaxWidthProp<T>
  firstMaxH?: MaxWidthProp<T>
  lastMaxH?: MaxWidthProp<T>
  oddMaxH?: MaxWidthProp<T>
  evenMaxH?: MaxWidthProp<T>
  visitedMaxH?: MaxWidthProp<T>
  checkedMaxH?: MaxWidthProp<T>
  focusWithinMaxH?: MaxWidthProp<T>
  hoverMaxH?: MaxWidthProp<T>
  focusMaxH?: MaxWidthProp<T>
  focusVisibleMaxH?: MaxWidthProp<T>
  activeMaxH?: MaxWidthProp<T>
  disabledMaxH?: MaxWidthProp<T>
  placeholderMaxH?: MaxWidthProp<T>
}
export const maxHeight = style({
  prop: ['maxHeight', 'maxH'],
  themeGet: getSize,
})

type MinWidthProp<T extends ITheme> = SystemProp<
  SizeGetter<T> | CSS.Property.MinWidth,
  T
>
export interface MinWidthProps<T extends ITheme = Theme> {
  // minWidth
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

  // minW
  minW?: MaxWidthProp<T>
  motionSafeMinW?: MaxWidthProp<T>
  motionReduceMinW?: MaxWidthProp<T>
  firstMinW?: MaxWidthProp<T>
  lastMinW?: MaxWidthProp<T>
  oddMinW?: MaxWidthProp<T>
  evenMinW?: MaxWidthProp<T>
  visitedMinW?: MaxWidthProp<T>
  checkedMinW?: MaxWidthProp<T>
  focusWithinMinW?: MaxWidthProp<T>
  hoverMinW?: MaxWidthProp<T>
  focusMinW?: MaxWidthProp<T>
  focusVisibleMinW?: MaxWidthProp<T>
  activeMinW?: MaxWidthProp<T>
  disabledMinW?: MaxWidthProp<T>
  placeholderMinW?: MaxWidthProp<T>
}
export const minWidth = style({
  prop: ['minWidth', 'minW'],
  themeGet: getSize,
})

type MinHeightProp<T extends ITheme> = SystemProp<
  SizeGetter<T> | CSS.Property.MinHeight,
  T
>
export interface MinHeightProps<T extends ITheme = Theme> {
  // minHeight
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

  // minH
  minH?: MaxWidthProp<T>
  motionSafeMinH?: MaxWidthProp<T>
  motionReduceMinH?: MaxWidthProp<T>
  firstMinH?: MaxWidthProp<T>
  lastMinH?: MaxWidthProp<T>
  oddMinH?: MaxWidthProp<T>
  evenMinH?: MaxWidthProp<T>
  visitedMinH?: MaxWidthProp<T>
  checkedMinH?: MaxWidthProp<T>
  focusWithinMinH?: MaxWidthProp<T>
  hoverMinH?: MaxWidthProp<T>
  focusMinH?: MaxWidthProp<T>
  focusVisibleMinH?: MaxWidthProp<T>
  activeMinH?: MaxWidthProp<T>
  disabledMinH?: MaxWidthProp<T>
  placeholderMinH?: MaxWidthProp<T>
}
export const minHeight = style({
  prop: ['minHeight', 'minH'],
  themeGet: getSize,
})

export interface SizingProps<T extends ITheme = Theme>
  extends WidthProps<T>,
    HeightProps<T>,
    MaxWidthProps<T>,
    MaxHeightProps<T>,
    MinWidthProps<T>,
    MinHeightProps<T> {}
export const sizing = compose(
  width,
  height,
  maxWidth,
  maxHeight,
  minWidth,
  minHeight,
)

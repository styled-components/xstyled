import * as CSS from 'csstype'
import { style, themeGetter, compose } from '../style'
import { getPx } from './units'
import { transformNegative } from '../unit'
import { ITheme, Theme, VariantsType, SystemProp } from '../types'

// Getters
export type SpaceGetter<T extends ITheme = Theme> = VariantsType<T['space']>
export const getSpace = themeGetter<SpaceGetter>({
  name: 'space',
  key: 'space',
  compose: getPx,
  transform: transformNegative,
})

// Styles

type MarginProp<T> = SystemProp<CSS.Property.Margin | SpaceGetter<T>, T>
export interface MarginProps<T = {}> {
  margin?: MarginProp<T>
  motionSafeMargin?: MarginProp<T>
  motionReduceMargin?: MarginProp<T>
  firstMargin?: MarginProp<T>
  lastMargin?: MarginProp<T>
  oddMargin?: MarginProp<T>
  evenMargin?: MarginProp<T>
  visitedMargin?: MarginProp<T>
  checkedMargin?: MarginProp<T>
  focusWithinMargin?: MarginProp<T>
  hoverMargin?: MarginProp<T>
  focusMargin?: MarginProp<T>
  focusVisibleMargin?: MarginProp<T>
  activeMargin?: MarginProp<T>
  disabledMargin?: MarginProp<T>
  placeholderMargin?: MarginProp<T>
  m?: MarginProp<T>
  motionSafeM?: MarginProp<T>
  motionReduceM?: MarginProp<T>
  firstM?: MarginProp<T>
  lastM?: MarginProp<T>
  oddM?: MarginProp<T>
  evenM?: MarginProp<T>
  visitedM?: MarginProp<T>
  checkedM?: MarginProp<T>
  focusWithinM?: MarginProp<T>
  hoverM?: MarginProp<T>
  focusM?: MarginProp<T>
  focusVisibleM?: MarginProp<T>
  activeM?: MarginProp<T>
  disabledM?: MarginProp<T>
  placeholderM?: MarginProp<T>
}
export const margin = style({
  prop: ['margin', 'm'],
  cssProperty: 'margin',
  themeGet: getSpace,
})

type MarginTopProp<T> = SystemProp<CSS.Property.MarginTop | SpaceGetter<T>, T>
export interface MarginTopProps<T = {}> {
  marginTop?: MarginTopProp<T>
  motionSafeMarginTop?: MarginTopProp<T>
  motionReduceMarginTop?: MarginTopProp<T>
  firstMarginTop?: MarginTopProp<T>
  lastMarginTop?: MarginTopProp<T>
  oddMarginTop?: MarginTopProp<T>
  evenMarginTop?: MarginTopProp<T>
  visitedMarginTop?: MarginTopProp<T>
  checkedMarginTop?: MarginTopProp<T>
  focusWithinMarginTop?: MarginTopProp<T>
  hoverMarginTop?: MarginTopProp<T>
  focusMarginTop?: MarginTopProp<T>
  focusVisibleMarginTop?: MarginTopProp<T>
  activeMarginTop?: MarginTopProp<T>
  disabledMarginTop?: MarginTopProp<T>
  placeholderMarginTop?: MarginTopProp<T>
  mt?: MarginTopProp<T>
  motionSafeMt?: MarginTopProp<T>
  motionReduceMt?: MarginTopProp<T>
  firstMt?: MarginTopProp<T>
  lastMt?: MarginTopProp<T>
  oddMt?: MarginTopProp<T>
  evenMt?: MarginTopProp<T>
  visitedMt?: MarginTopProp<T>
  checkedMt?: MarginTopProp<T>
  focusWithinMt?: MarginTopProp<T>
  hoverMt?: MarginTopProp<T>
  focusMt?: MarginTopProp<T>
  focusVisibleMt?: MarginTopProp<T>
  activeMt?: MarginTopProp<T>
  disabledMt?: MarginTopProp<T>
  placeholderMt?: MarginTopProp<T>
}
export const marginTop = style({
  prop: ['marginTop', 'mt'],
  cssProperty: 'marginTop',
  themeGet: getSpace,
})

type MarginRightProp<T> = SystemProp<
  CSS.Property.MarginRight | SpaceGetter<T>,
  T
>
export interface MarginRightProps<T = {}> {
  marginRight?: MarginRightProp<T>
  motionSafeMarginRight?: MarginRightProp<T>
  motionReduceMarginRight?: MarginRightProp<T>
  firstMarginRight?: MarginRightProp<T>
  lastMarginRight?: MarginRightProp<T>
  oddMarginRight?: MarginRightProp<T>
  evenMarginRight?: MarginRightProp<T>
  visitedMarginRight?: MarginRightProp<T>
  checkedMarginRight?: MarginRightProp<T>
  focusWithinMarginRight?: MarginRightProp<T>
  hoverMarginRight?: MarginRightProp<T>
  focusMarginRight?: MarginRightProp<T>
  focusVisibleMarginRight?: MarginRightProp<T>
  activeMarginRight?: MarginRightProp<T>
  disabledMarginRight?: MarginRightProp<T>
  placeholderMarginRight?: MarginRightProp<T>
  mr?: MarginRightProp<T>
  motionSafeMr?: MarginRightProp<T>
  motionReduceMr?: MarginRightProp<T>
  firstMr?: MarginRightProp<T>
  lastMr?: MarginRightProp<T>
  oddMr?: MarginRightProp<T>
  evenMr?: MarginRightProp<T>
  visitedMr?: MarginRightProp<T>
  checkedMr?: MarginRightProp<T>
  focusWithinMr?: MarginRightProp<T>
  hoverMr?: MarginRightProp<T>
  focusMr?: MarginRightProp<T>
  focusVisibleMr?: MarginRightProp<T>
  activeMr?: MarginRightProp<T>
  disabledMr?: MarginRightProp<T>
  placeholderMr?: MarginRightProp<T>
}
export const marginRight = style({
  prop: ['marginRight', 'mr'],
  cssProperty: 'marginRight',
  themeGet: getSpace,
})

type MarginBottomProp<T> = SystemProp<
  CSS.Property.MarginBottom | SpaceGetter<T>,
  T
>
export interface MarginBottomProps<T = {}> {
  marginBottom?: MarginBottomProp<T>
  motionSafeMarginBottom?: MarginBottomProp<T>
  motionReduceMarginBottom?: MarginBottomProp<T>
  firstMarginBottom?: MarginBottomProp<T>
  lastMarginBottom?: MarginBottomProp<T>
  oddMarginBottom?: MarginBottomProp<T>
  evenMarginBottom?: MarginBottomProp<T>
  visitedMarginBottom?: MarginBottomProp<T>
  checkedMarginBottom?: MarginBottomProp<T>
  focusWithinMarginBottom?: MarginBottomProp<T>
  hoverMarginBottom?: MarginBottomProp<T>
  focusMarginBottom?: MarginBottomProp<T>
  focusVisibleMarginBottom?: MarginBottomProp<T>
  activeMarginBottom?: MarginBottomProp<T>
  disabledMarginBottom?: MarginBottomProp<T>
  placeholderMarginBottom?: MarginBottomProp<T>
  mb?: MarginBottomProp<T>
  motionSafeMb?: MarginBottomProp<T>
  motionReduceMb?: MarginBottomProp<T>
  firstMb?: MarginBottomProp<T>
  lastMb?: MarginBottomProp<T>
  oddMb?: MarginBottomProp<T>
  evenMb?: MarginBottomProp<T>
  visitedMb?: MarginBottomProp<T>
  checkedMb?: MarginBottomProp<T>
  focusWithinMb?: MarginBottomProp<T>
  hoverMb?: MarginBottomProp<T>
  focusMb?: MarginBottomProp<T>
  focusVisibleMb?: MarginBottomProp<T>
  activeMb?: MarginBottomProp<T>
  disabledMb?: MarginBottomProp<T>
  placeholderMb?: MarginBottomProp<T>
}
export const marginBottom = style({
  prop: ['marginBottom', 'mb'],
  cssProperty: 'marginBottom',
  themeGet: getSpace,
})

type MarginLeftProp<T> = SystemProp<CSS.Property.MarginLeft | SpaceGetter<T>, T>
export interface MarginLeftProps<T = {}> {
  marginLeft?: MarginLeftProp<T>
  motionSafeMarginLeft?: MarginLeftProp<T>
  motionReduceMarginLeft?: MarginLeftProp<T>
  firstMarginLeft?: MarginLeftProp<T>
  lastMarginLeft?: MarginLeftProp<T>
  oddMarginLeft?: MarginLeftProp<T>
  evenMarginLeft?: MarginLeftProp<T>
  visitedMarginLeft?: MarginLeftProp<T>
  checkedMarginLeft?: MarginLeftProp<T>
  focusWithinMarginLeft?: MarginLeftProp<T>
  hoverMarginLeft?: MarginLeftProp<T>
  focusMarginLeft?: MarginLeftProp<T>
  focusVisibleMarginLeft?: MarginLeftProp<T>
  activeMarginLeft?: MarginLeftProp<T>
  disabledMarginLeft?: MarginLeftProp<T>
  placeholderMarginLeft?: MarginLeftProp<T>
  ml?: MarginLeftProp<T>
  motionSafeMl?: MarginLeftProp<T>
  motionReduceMl?: MarginLeftProp<T>
  firstMl?: MarginLeftProp<T>
  lastMl?: MarginLeftProp<T>
  oddMl?: MarginLeftProp<T>
  evenMl?: MarginLeftProp<T>
  visitedMl?: MarginLeftProp<T>
  checkedMl?: MarginLeftProp<T>
  focusWithinMl?: MarginLeftProp<T>
  hoverMl?: MarginLeftProp<T>
  focusMl?: MarginLeftProp<T>
  focusVisibleMl?: MarginLeftProp<T>
  activeMl?: MarginLeftProp<T>
  disabledMl?: MarginLeftProp<T>
  placeholderMl?: MarginLeftProp<T>
}
export const marginLeft = style({
  prop: ['marginLeft', 'ml'],
  cssProperty: 'marginLeft',
  themeGet: getSpace,
})

type MarginX<T> = SystemProp<
  (CSS.Property.MarginLeft & CSS.Property.MarginRight) | SpaceGetter<T>,
  T
>
export interface MarginXProps<T extends ITheme = Theme> {
  mx?: MarginX<T>
  motionSafeMx?: MarginX<T>
  motionReduceMx?: MarginX<T>
  firstMx?: MarginX<T>
  lastMx?: MarginX<T>
  oddMx?: MarginX<T>
  evenMx?: MarginX<T>
  visitedMx?: MarginX<T>
  checkedMx?: MarginX<T>
  focusWithinMx?: MarginX<T>
  hoverMx?: MarginX<T>
  focusMx?: MarginX<T>
  focusVisibleMx?: MarginX<T>
  activeMx?: MarginX<T>
  disabledMx?: MarginX<T>
  placeholderMx?: MarginX<T>
}
export const mx = style({
  prop: 'mx',
  cssProperty: ['marginRight', 'marginLeft'],
  themeGet: getSpace,
})

type MarginY<T> = SystemProp<
  (CSS.Property.MarginTop & CSS.Property.MarginBottom) | SpaceGetter<T>,
  T
>
export interface MarginYProps<T extends ITheme = Theme> {
  my?: MarginY<T>
  motionSafeMy?: MarginY<T>
  motionReduceMy?: MarginY<T>
  firstMy?: MarginY<T>
  lastMy?: MarginY<T>
  oddMy?: MarginY<T>
  evenMy?: MarginY<T>
  visitedMy?: MarginY<T>
  checkedMy?: MarginY<T>
  focusWithinMy?: MarginY<T>
  hoverMy?: MarginY<T>
  focusMy?: MarginY<T>
  focusVisibleMy?: MarginY<T>
  activeMy?: MarginY<T>
  disabledMy?: MarginY<T>
  placeholderMy?: MarginY<T>
}
export const my = style({
  prop: 'my',
  cssProperty: ['marginTop', 'marginBottom'],
  themeGet: getSpace,
})

// Padding

type PaddingProp<T> = SystemProp<CSS.Property.Padding | SpaceGetter<T>, T>
export interface PaddingProps<T = {}> {
  padding?: PaddingProp<T>
  motionSafePadding?: PaddingProp<T>
  motionReducePadding?: PaddingProp<T>
  firstPadding?: PaddingProp<T>
  lastPadding?: PaddingProp<T>
  oddPadding?: PaddingProp<T>
  evenPadding?: PaddingProp<T>
  visitedPadding?: PaddingProp<T>
  checkedPadding?: PaddingProp<T>
  focusWithinPadding?: PaddingProp<T>
  hoverPadding?: PaddingProp<T>
  focusPadding?: PaddingProp<T>
  focusVisiblePadding?: PaddingProp<T>
  activePadding?: PaddingProp<T>
  disabledPadding?: PaddingProp<T>
  placeholderPadding?: PaddingProp<T>
  p?: PaddingProp<T>
  motionSafeP?: PaddingProp<T>
  motionReduceP?: PaddingProp<T>
  firstP?: PaddingProp<T>
  lastP?: PaddingProp<T>
  oddP?: PaddingProp<T>
  evenP?: PaddingProp<T>
  visitedP?: PaddingProp<T>
  checkedP?: PaddingProp<T>
  focusWithinP?: PaddingProp<T>
  hoverP?: PaddingProp<T>
  focusP?: PaddingProp<T>
  focusVisibleP?: PaddingProp<T>
  activeP?: PaddingProp<T>
  disabledP?: PaddingProp<T>
  placeholderP?: PaddingProp<T>
}
export const padding = style({
  prop: ['padding', 'p'],
  cssProperty: 'padding',
  themeGet: getSpace,
})

type PaddingTopProp<T> = SystemProp<CSS.Property.PaddingTop | SpaceGetter<T>, T>
export interface PaddingTopProps<T = {}> {
  paddingTop?: PaddingTopProp<T>
  motionSafePaddingTop?: PaddingTopProp<T>
  motionReducePaddingTop?: PaddingTopProp<T>
  firstPaddingTop?: PaddingTopProp<T>
  lastPaddingTop?: PaddingTopProp<T>
  oddPaddingTop?: PaddingTopProp<T>
  evenPaddingTop?: PaddingTopProp<T>
  visitedPaddingTop?: PaddingTopProp<T>
  checkedPaddingTop?: PaddingTopProp<T>
  focusWithinPaddingTop?: PaddingTopProp<T>
  hoverPaddingTop?: PaddingTopProp<T>
  focusPaddingTop?: PaddingTopProp<T>
  focusVisiblePaddingTop?: PaddingTopProp<T>
  activePaddingTop?: PaddingTopProp<T>
  disabledPaddingTop?: PaddingTopProp<T>
  placeholderPaddingTop?: PaddingTopProp<T>
  pt?: PaddingTopProp<T>
  motionSafePt?: PaddingTopProp<T>
  motionReducePt?: PaddingTopProp<T>
  firstPt?: PaddingTopProp<T>
  lastPt?: PaddingTopProp<T>
  oddPt?: PaddingTopProp<T>
  evenPt?: PaddingTopProp<T>
  visitedPt?: PaddingTopProp<T>
  checkedPt?: PaddingTopProp<T>
  focusWithinPt?: PaddingTopProp<T>
  hoverPt?: PaddingTopProp<T>
  focusPt?: PaddingTopProp<T>
  focusVisiblePt?: PaddingTopProp<T>
  activePt?: PaddingTopProp<T>
  disabledPt?: PaddingTopProp<T>
  placeholderPt?: PaddingTopProp<T>
}
export const paddingTop = style({
  prop: ['paddingTop', 'pt'],
  cssProperty: 'paddingTop',
  themeGet: getSpace,
})

type PaddingRightProp<T> = SystemProp<
  CSS.Property.PaddingRight | SpaceGetter<T>,
  T
>
export interface PaddingRightProps<T = {}> {
  paddingRight?: PaddingRightProp<T>
  motionSafePaddingRight?: PaddingRightProp<T>
  motionReducePaddingRight?: PaddingRightProp<T>
  firstPaddingRight?: PaddingRightProp<T>
  lastPaddingRight?: PaddingRightProp<T>
  oddPaddingRight?: PaddingRightProp<T>
  evenPaddingRight?: PaddingRightProp<T>
  visitedPaddingRight?: PaddingRightProp<T>
  checkedPaddingRight?: PaddingRightProp<T>
  focusWithinPaddingRight?: PaddingRightProp<T>
  hoverPaddingRight?: PaddingRightProp<T>
  focusPaddingRight?: PaddingRightProp<T>
  focusVisiblePaddingRight?: PaddingRightProp<T>
  activePaddingRight?: PaddingRightProp<T>
  disabledPaddingRight?: PaddingRightProp<T>
  placeholderPaddingRight?: PaddingRightProp<T>
  pr?: PaddingRightProp<T>
  motionSafePr?: PaddingRightProp<T>
  motionReducePr?: PaddingRightProp<T>
  firstPr?: PaddingRightProp<T>
  lastPr?: PaddingRightProp<T>
  oddPr?: PaddingRightProp<T>
  evenPr?: PaddingRightProp<T>
  visitedPr?: PaddingRightProp<T>
  checkedPr?: PaddingRightProp<T>
  focusWithinPr?: PaddingRightProp<T>
  hoverPr?: PaddingRightProp<T>
  focusPr?: PaddingRightProp<T>
  focusVisiblePr?: PaddingRightProp<T>
  activePr?: PaddingRightProp<T>
  disabledPr?: PaddingRightProp<T>
  placeholderPr?: PaddingRightProp<T>
}
export const paddingRight = style({
  prop: ['paddingRight', 'pr'],
  cssProperty: 'paddingRight',
  themeGet: getSpace,
})

type PaddingBottomProp<T> = SystemProp<
  CSS.Property.PaddingBottom | SpaceGetter<T>,
  T
>
export interface PaddingBottomProps<T = {}> {
  paddingBottop?: PaddingBottomProp<T>
  motionSafePaddingBottop?: PaddingBottomProp<T>
  motionReducePaddingBottop?: PaddingBottomProp<T>
  firstPaddingBottop?: PaddingBottomProp<T>
  lastPaddingBottop?: PaddingBottomProp<T>
  oddPaddingBottop?: PaddingBottomProp<T>
  evenPaddingBottop?: PaddingBottomProp<T>
  visitedPaddingBottop?: PaddingBottomProp<T>
  checkedPaddingBottop?: PaddingBottomProp<T>
  focusWithinPaddingBottop?: PaddingBottomProp<T>
  hoverPaddingBottop?: PaddingBottomProp<T>
  focusPaddingBottop?: PaddingBottomProp<T>
  focusVisiblePaddingBottop?: PaddingBottomProp<T>
  activePaddingBottop?: PaddingBottomProp<T>
  disabledPaddingBottop?: PaddingBottomProp<T>
  placeholderPaddingBottop?: PaddingBottomProp<T>
  pb?: PaddingBottomProp<T>
  motionSafePb?: PaddingBottomProp<T>
  motionReducePb?: PaddingBottomProp<T>
  firstPb?: PaddingBottomProp<T>
  lastPb?: PaddingBottomProp<T>
  oddPb?: PaddingBottomProp<T>
  evenPb?: PaddingBottomProp<T>
  visitedPb?: PaddingBottomProp<T>
  checkedPb?: PaddingBottomProp<T>
  focusWithinPb?: PaddingBottomProp<T>
  hoverPb?: PaddingBottomProp<T>
  focusPb?: PaddingBottomProp<T>
  focusVisiblePb?: PaddingBottomProp<T>
  activePb?: PaddingBottomProp<T>
  disabledPb?: PaddingBottomProp<T>
  placeholderPb?: PaddingBottomProp<T>
}
export const paddingBottom = style({
  prop: ['paddingBottom', 'pb'],
  cssProperty: 'paddingBottom',
  themeGet: getSpace,
})

type PaddingLeftProp<T> = SystemProp<
  CSS.Property.PaddingLeft | SpaceGetter<T>,
  T
>
export interface PaddingLeftProps<T = {}> {
  paddingLeft?: PaddingLeftProp<T>
  motionSafePaddingLeft?: PaddingLeftProp<T>
  motionReducePaddingLeft?: PaddingLeftProp<T>
  firstPaddingLeft?: PaddingLeftProp<T>
  lastPaddingLeft?: PaddingLeftProp<T>
  oddPaddingLeft?: PaddingLeftProp<T>
  evenPaddingLeft?: PaddingLeftProp<T>
  visitedPaddingLeft?: PaddingLeftProp<T>
  checkedPaddingLeft?: PaddingLeftProp<T>
  focusWithinPaddingLeft?: PaddingLeftProp<T>
  hoverPaddingLeft?: PaddingLeftProp<T>
  focusPaddingLeft?: PaddingLeftProp<T>
  focusVisiblePaddingLeft?: PaddingLeftProp<T>
  activePaddingLeft?: PaddingLeftProp<T>
  disabledPaddingLeft?: PaddingLeftProp<T>
  placeholderPaddingLeft?: PaddingLeftProp<T>
  pl?: PaddingLeftProp<T>
  motionSafePl?: PaddingLeftProp<T>
  motionReducePl?: PaddingLeftProp<T>
  firstPl?: PaddingLeftProp<T>
  lastPl?: PaddingLeftProp<T>
  oddPl?: PaddingLeftProp<T>
  evenPl?: PaddingLeftProp<T>
  visitedPl?: PaddingLeftProp<T>
  checkedPl?: PaddingLeftProp<T>
  focusWithinPl?: PaddingLeftProp<T>
  hoverPl?: PaddingLeftProp<T>
  focusPl?: PaddingLeftProp<T>
  focusVisiblePl?: PaddingLeftProp<T>
  activePl?: PaddingLeftProp<T>
  disabledPl?: PaddingLeftProp<T>
  placeholderPl?: PaddingLeftProp<T>
}
export const paddingLeft = style({
  prop: ['paddingLeft', 'pl'],
  cssProperty: 'paddingLeft',
  themeGet: getSpace,
})

type PaddingX<T> = SystemProp<
  (CSS.Property.PaddingLeft & CSS.Property.PaddingRight) | SpaceGetter<T>,
  T
>
export interface PaddingXProps<T extends ITheme = Theme> {
  px?: PaddingX<T>
  motionSafePx?: PaddingX<T>
  motionReducePx?: PaddingX<T>
  firstPx?: PaddingX<T>
  lastPx?: PaddingX<T>
  oddPx?: PaddingX<T>
  evenPx?: PaddingX<T>
  visitedPx?: PaddingX<T>
  checkedPx?: PaddingX<T>
  focusWithinPx?: PaddingX<T>
  hoverPx?: PaddingX<T>
  focusPx?: PaddingX<T>
  focusVisiblePx?: PaddingX<T>
  activePx?: PaddingX<T>
  disabledPx?: PaddingX<T>
  placeholderPx?: PaddingX<T>
}
export const px = style({
  prop: 'px',
  cssProperty: ['paddingRight', 'paddingLeft'],
  themeGet: getSpace,
})

type PaddingY<T> = SystemProp<
  (CSS.Property.PaddingTop & CSS.Property.PaddingBottom) | SpaceGetter<T>,
  T
>
export interface PaddingYProps<T extends ITheme = Theme> {
  py?: PaddingY<T>
  motionSafePy?: PaddingY<T>
  motionReducePy?: PaddingY<T>
  firstPy?: PaddingY<T>
  lastPy?: PaddingY<T>
  oddPy?: PaddingY<T>
  evenPy?: PaddingY<T>
  visitedPy?: PaddingY<T>
  checkedPy?: PaddingY<T>
  focusWithinPy?: PaddingY<T>
  hoverPy?: PaddingY<T>
  focusPy?: PaddingY<T>
  focusVisiblePy?: PaddingY<T>
  activePy?: PaddingY<T>
  disabledPy?: PaddingY<T>
  placeholderPy?: PaddingY<T>
}
export const py = style({
  prop: 'py',
  cssProperty: ['paddingTop', 'paddingBottom'],
  themeGet: getSpace,
})

type SpaceYProp<T> = SystemProp<SpaceGetter<T>, T>
export interface SpaceYProps<T extends ITheme = Theme> {
  spaceY?: SpaceYProp<T>
  motionSafeSpaceY?: SpaceYProp<T>
  motionReduceSpaceY?: SpaceYProp<T>
  firstSpaceY?: SpaceYProp<T>
  lastSpaceY?: SpaceYProp<T>
  oddSpaceY?: SpaceYProp<T>
  evenSpaceY?: SpaceYProp<T>
  visitedSpaceY?: SpaceYProp<T>
  checkedSpaceY?: SpaceYProp<T>
  focusWithinSpaceY?: SpaceYProp<T>
  hoverSpaceY?: SpaceYProp<T>
  focusSpaceY?: SpaceYProp<T>
  focusVisibleSpaceY?: SpaceYProp<T>
  activeSpaceY?: SpaceYProp<T>
  disabledSpaceY?: SpaceYProp<T>
  placeholderSpaceY?: SpaceYProp<T>
}
export const spaceY = style({
  prop: 'spaceY',
  themeGet: getSpace,
  cssProperty: value => ({
    '& > :not([hidden]) ~ :not([hidden])': {
      '--x-space-y-reverse': 0,
      marginTop: `calc(${value} * calc(1 - var(--x-space-y-reverse)))`,
      marginBottom: `calc(${value} * var(--x-space-y-reverse))`,
    },
  }),
})

type SpaceXProp<T> = SystemProp<SpaceGetter<T>, T>
export interface SpaceXProps<T extends ITheme = Theme> {
  spaceX?: SpaceXProp<T>
  motionSafeSpaceX?: SpaceXProp<T>
  motionReduceSpaceX?: SpaceXProp<T>
  firstSpaceX?: SpaceXProp<T>
  lastSpaceX?: SpaceXProp<T>
  oddSpaceX?: SpaceXProp<T>
  evenSpaceX?: SpaceXProp<T>
  visitedSpaceX?: SpaceXProp<T>
  checkedSpaceX?: SpaceXProp<T>
  focusWithinSpaceX?: SpaceXProp<T>
  hoverSpaceX?: SpaceXProp<T>
  focusSpaceX?: SpaceXProp<T>
  focusVisibleSpaceX?: SpaceXProp<T>
  activeSpaceX?: SpaceXProp<T>
  disabledSpaceX?: SpaceXProp<T>
  placeholderSpaceX?: SpaceXProp<T>
}
export const spaceX = style({
  prop: 'spaceX',
  themeGet: getSpace,
  cssProperty: value => ({
    '& > :not([hidden]) ~ :not([hidden])': {
      '--x-space-x-reverse': 0,
      marginRight: `calc(${value} * var(--x-space-x-reverse))`,
      marginLeft: `calc(${value} * calc(1 - var(--x-space-x-reverse)))`,
    },
  }),
})

type SpaceXReverseProp<T> = SystemProp<boolean, T>
export interface SpaceXReverseProps<T extends ITheme = Theme> {
  spaceXReverse?: SpaceXReverseProp<T>
  motionSafeSpaceXReverse?: SpaceXReverseProp<T>
  motionReduceSpaceXReverse?: SpaceXReverseProp<T>
  firstSpaceXReverse?: SpaceXReverseProp<T>
  lastSpaceXReverse?: SpaceXReverseProp<T>
  oddSpaceXReverse?: SpaceXReverseProp<T>
  evenSpaceXReverse?: SpaceXReverseProp<T>
  visitedSpaceXReverse?: SpaceXReverseProp<T>
  checkedSpaceXReverse?: SpaceXReverseProp<T>
  focusWithinSpaceXReverse?: SpaceXReverseProp<T>
  hoverSpaceXReverse?: SpaceXReverseProp<T>
  focusSpaceXReverse?: SpaceXReverseProp<T>
  focusVisibleSpaceXReverse?: SpaceXReverseProp<T>
  activeSpaceXReverse?: SpaceXReverseProp<T>
  disabledSpaceXReverse?: SpaceXReverseProp<T>
  placeholderSpaceXReverse?: SpaceXReverseProp<T>
}
export const spaceXReverse = style({
  prop: 'spaceXReverse',
  cssProperty: () => ({
    '& > :not([hidden]) ~ :not([hidden])': {
      '--x-space-x-reverse': '1',
    },
  }),
})

type SpaceYReverseProp<T> = SystemProp<boolean, T>
export interface SpaceYReverseProps<T extends ITheme = Theme> {
  spaceYReverse?: SpaceYReverseProp<T>
  motionSafeSpaceYReverse?: SpaceYReverseProp<T>
  motionReduceSpaceYReverse?: SpaceYReverseProp<T>
  firstSpaceYReverse?: SpaceYReverseProp<T>
  lastSpaceYReverse?: SpaceYReverseProp<T>
  oddSpaceYReverse?: SpaceYReverseProp<T>
  evenSpaceYReverse?: SpaceYReverseProp<T>
  visitedSpaceYReverse?: SpaceYReverseProp<T>
  checkedSpaceYReverse?: SpaceYReverseProp<T>
  focusWithinSpaceYReverse?: SpaceYReverseProp<T>
  hoverSpaceYReverse?: SpaceYReverseProp<T>
  focusSpaceYReverse?: SpaceYReverseProp<T>
  focusVisibleSpaceYReverse?: SpaceYReverseProp<T>
  activeSpaceYReverse?: SpaceYReverseProp<T>
  disabledSpaceYReverse?: SpaceYReverseProp<T>
  placeholderSpaceYReverse?: SpaceYReverseProp<T>
}
export const spaceYReverse = style({
  prop: 'spaceYReverse',
  cssProperty: () => ({
    '& > :not([hidden]) ~ :not([hidden])': {
      '--x-space-y-reverse': '1',
    },
  }),
})

export type SpaceProps<T extends ITheme = Theme> = MarginProps<T> &
  MarginTopProps<T> &
  MarginRightProps<T> &
  MarginBottomProps<T> &
  MarginLeftProps<T> &
  MarginXProps<T> &
  MarginYProps<T> &
  PaddingProps<T> &
  PaddingTopProps<T> &
  PaddingRightProps<T> &
  PaddingBottomProps<T> &
  PaddingLeftProps<T> &
  PaddingXProps<T> &
  PaddingYProps<T> &
  SpaceXProps<T> &
  SpaceYProps<T> &
  SpaceXReverseProps<T> &
  SpaceYReverseProps<T>
export const space = compose(
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  mx,
  my,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  px,
  py,
  spaceX,
  spaceY,
  spaceXReverse,
  spaceYReverse,
)

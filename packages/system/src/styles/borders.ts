import * as CSS from 'csstype'
import { num } from '@xstyled/util'
import { style, themeGetter, compose } from '../style'
import { px } from '../unit'
import { getColor, ColorGetter } from './colors'
import { getPx } from './units'
import { SystemProp, ITheme, Theme, VariantsType } from '../types'

// Getters
export type BorderGetter<T extends ITheme = Theme> = VariantsType<T['borders']>
export const getBorder = themeGetter<BorderGetter>({
  name: 'border',
  key: 'borders',
  transform: (n: number | string) => (num(n) && n > 0 ? `${px(n)} solid` : n),
})

export type BorderWidthGetter<T extends ITheme = Theme> = VariantsType<
  T['borderWidths']
>
export const getBorderWidth = themeGetter<BorderWidthGetter>({
  name: 'borderWidth',
  key: 'borderWidths',
  compose: getPx,
  shorthand: true,
})

export type BorderColorGetter<T extends ITheme = Theme> = ColorGetter<T>
export const getBorderColor = themeGetter<BorderColorGetter>({
  name: 'borderColor',
  compose: getColor,
  shorthand: true,
})

export type BorderStyleGetter<T extends ITheme = Theme> = VariantsType<
  T['borderStyles']
>
export const getBorderStyle = themeGetter<BorderStyleGetter>({
  name: 'borderStyle',
  key: 'borderStyles',
})

// Border

type BorderProp<T> = SystemProp<BorderGetter<T> | CSS.Property.Border, T>
export interface BorderProps<T extends ITheme = Theme> {
  border?: BorderProp<T>
  motionSafeBorder?: BorderProp<T>
  motionReduceBorder?: BorderProp<T>
  firstBorder?: BorderProp<T>
  lastBorder?: BorderProp<T>
  oddBorder?: BorderProp<T>
  evenBorder?: BorderProp<T>
  visitedBorder?: BorderProp<T>
  checkedBorder?: BorderProp<T>
  focusWithinBorder?: BorderProp<T>
  hoverBorder?: BorderProp<T>
  focusBorder?: BorderProp<T>
  focusVisibleBorder?: BorderProp<T>
  activeBorder?: BorderProp<T>
  disabledBorder?: BorderProp<T>
  placeholderBorder?: BorderProp<T>
}
export const border = style({
  prop: 'border',
  themeGet: getBorder,
})

type BorderColorProp<T> = SystemProp<
  ColorGetter<T> | CSS.Property.BorderColor,
  T
>
export interface BorderColorProps<T extends ITheme = Theme> {
  borderColor?: BorderColorProp<T>
  motionSafeBorderColor?: BorderColorProp<T>
  motionReduceBorderColor?: BorderColorProp<T>
  firstBorderColor?: BorderColorProp<T>
  lastBorderColor?: BorderColorProp<T>
  oddBorderColor?: BorderColorProp<T>
  evenBorderColor?: BorderColorProp<T>
  visitedBorderColor?: BorderColorProp<T>
  checkedBorderColor?: BorderColorProp<T>
  focusWithinBorderColor?: BorderColorProp<T>
  hoverBorderColor?: BorderColorProp<T>
  focusBorderColor?: BorderColorProp<T>
  focusVisibleBorderColor?: BorderColorProp<T>
  activeBorderColor?: BorderColorProp<T>
  disabledBorderColor?: BorderColorProp<T>
  placeholderBorderColor?: BorderColorProp<T>
}
export const borderColor = style({
  prop: 'borderColor',
  themeGet: getBorderColor,
})

type BorderWidthProp<T> = SystemProp<
  BorderWidthGetter<T> | CSS.Property.BorderWidth,
  T
>
export interface BorderWidthProps<T extends ITheme = Theme> {
  borderWidth?: BorderWidthProp<T>
  motionSafeBorderWidth?: BorderWidthProp<T>
  motionReduceBorderWidth?: BorderWidthProp<T>
  firstBorderWidth?: BorderWidthProp<T>
  lastBorderWidth?: BorderWidthProp<T>
  oddBorderWidth?: BorderWidthProp<T>
  evenBorderWidth?: BorderWidthProp<T>
  visitedBorderWidth?: BorderWidthProp<T>
  checkedBorderWidth?: BorderWidthProp<T>
  focusWithinBorderWidth?: BorderWidthProp<T>
  hoverBorderWidth?: BorderWidthProp<T>
  focusBorderWidth?: BorderWidthProp<T>
  focusVisibleBorderWidth?: BorderWidthProp<T>
  activeBorderWidth?: BorderWidthProp<T>
  disabledBorderWidth?: BorderWidthProp<T>
  placeholderBorderWidth?: BorderWidthProp<T>
}
export const borderWidth = style({
  prop: 'borderWidth',
  themeGet: getBorderWidth,
})

type BorderStyleProp<T> = SystemProp<
  BorderStyleGetter<T> | CSS.Property.BorderStyle,
  T
>
export interface BorderStyleProps<T extends ITheme = Theme> {
  borderStyle?: BorderStyleProp<T>
  motionSafeBorderStyle?: BorderStyleProp<T>
  motionReduceBorderStyle?: BorderStyleProp<T>
  firstBorderStyle?: BorderStyleProp<T>
  lastBorderStyle?: BorderStyleProp<T>
  oddBorderStyle?: BorderStyleProp<T>
  evenBorderStyle?: BorderStyleProp<T>
  visitedBorderStyle?: BorderStyleProp<T>
  checkedBorderStyle?: BorderStyleProp<T>
  focusWithinBorderStyle?: BorderStyleProp<T>
  hoverBorderStyle?: BorderStyleProp<T>
  focusBorderStyle?: BorderStyleProp<T>
  focusVisibleBorderStyle?: BorderStyleProp<T>
  activeBorderStyle?: BorderStyleProp<T>
  disabledBorderStyle?: BorderStyleProp<T>
  placeholderBorderStyle?: BorderStyleProp<T>
}
export const borderStyle = style({
  prop: 'borderStyle',
  themeGet: getBorderStyle,
})

// Outline

type OutlineProp<T> = SystemProp<BorderGetter<T> | CSS.Property.Outline, T>
export interface OutlineProps<T extends ITheme = Theme> {
  outline?: OutlineProp<T>
  motionSafeOutline?: OutlineProp<T>
  motionReduceOutline?: OutlineProp<T>
  firstOutline?: OutlineProp<T>
  lastOutline?: OutlineProp<T>
  oddOutline?: OutlineProp<T>
  evenOutline?: OutlineProp<T>
  visitedOutline?: OutlineProp<T>
  checkedOutline?: OutlineProp<T>
  focusWithinOutline?: OutlineProp<T>
  hoverOutline?: OutlineProp<T>
  focusOutline?: OutlineProp<T>
  focusVisibleOutline?: OutlineProp<T>
  activeOutline?: OutlineProp<T>
  disabledOutline?: OutlineProp<T>
  placeholderOutline?: OutlineProp<T>
}
export const outline = style({
  prop: 'outline',
  themeGet: getBorder,
})

type OutlineColorProp<T> = SystemProp<
  ColorGetter<T> | CSS.Property.OutlineColor,
  T
>
export interface OutlineColorProps<T extends ITheme = Theme> {
  outlineColor?: OutlineColorProp<T>
  motionSafeOutlineColor?: OutlineColorProp<T>
  motionReduceOutlineColor?: OutlineColorProp<T>
  firstOutlineColor?: OutlineColorProp<T>
  lastOutlineColor?: OutlineColorProp<T>
  oddOutlineColor?: OutlineColorProp<T>
  evenOutlineColor?: OutlineColorProp<T>
  visitedOutlineColor?: OutlineColorProp<T>
  checkedOutlineColor?: OutlineColorProp<T>
  focusWithinOutlineColor?: OutlineColorProp<T>
  hoverOutlineColor?: OutlineColorProp<T>
  focusOutlineColor?: OutlineColorProp<T>
  focusVisibleOutlineColor?: OutlineColorProp<T>
  activeOutlineColor?: OutlineColorProp<T>
  disabledOutlineColor?: OutlineColorProp<T>
  placeholderOutlineColor?: OutlineColorProp<T>
}
export const outlineColor = style({
  prop: 'outlineColor',
  themeGet: getColor,
})

type OutlineWidthProp<T> = SystemProp<
  BorderWidthGetter<T> | CSS.Property.OutlineWidth,
  T
>
export interface OutlineWidthProps<T extends ITheme = Theme> {
  outlineWidth?: OutlineWidthProp<T>
  motionSafeOutlineWidth?: OutlineWidthProp<T>
  motionReduceOutlineWidth?: OutlineWidthProp<T>
  firstOutlineWidth?: OutlineWidthProp<T>
  lastOutlineWidth?: OutlineWidthProp<T>
  oddOutlineWidth?: OutlineWidthProp<T>
  evenOutlineWidth?: OutlineWidthProp<T>
  visitedOutlineWidth?: OutlineWidthProp<T>
  checkedOutlineWidth?: OutlineWidthProp<T>
  focusWithinOutlineWidth?: OutlineWidthProp<T>
  hoverOutlineWidth?: OutlineWidthProp<T>
  focusOutlineWidth?: OutlineWidthProp<T>
  focusVisibleOutlineWidth?: OutlineWidthProp<T>
  activeOutlineWidth?: OutlineWidthProp<T>
  disabledOutlineWidth?: OutlineWidthProp<T>
  placeholderOutlineWidth?: OutlineWidthProp<T>
}
export const outlineWidth = style({
  prop: 'outlineWidth',
  themeGet: getBorderWidth,
})

type OutlineStyleProp<T> = SystemProp<
  BorderStyleGetter<T> | CSS.Property.OutlineStyle,
  T
>
export interface OutlineStyleProps<T extends ITheme = Theme> {
  outlineStyle?: OutlineStyleProp<T>
  motionSafeOutlineStyle?: OutlineStyleProp<T>
  motionReduceOutlineStyle?: OutlineStyleProp<T>
  firstOutlineStyle?: OutlineStyleProp<T>
  lastOutlineStyle?: OutlineStyleProp<T>
  oddOutlineStyle?: OutlineStyleProp<T>
  evenOutlineStyle?: OutlineStyleProp<T>
  visitedOutlineStyle?: OutlineStyleProp<T>
  checkedOutlineStyle?: OutlineStyleProp<T>
  focusWithinOutlineStyle?: OutlineStyleProp<T>
  hoverOutlineStyle?: OutlineStyleProp<T>
  focusOutlineStyle?: OutlineStyleProp<T>
  focusVisibleOutlineStyle?: OutlineStyleProp<T>
  activeOutlineStyle?: OutlineStyleProp<T>
  disabledOutlineStyle?: OutlineStyleProp<T>
  placeholderOutlineStyle?: OutlineStyleProp<T>
}
export const outlineStyle = style({
  prop: 'outlineStyle',
  themeGet: getBorderStyle,
})

// Radius

export type RadiusGetter<T extends ITheme = Theme> = VariantsType<T['radii']>
export const getRadius = themeGetter({
  name: 'radius',
  key: 'radii',
  compose: getPx,
  shorthand: true,
})

type BorderRadiusProp<T> = SystemProp<
  RadiusGetter<T> | CSS.Property.BorderRadius,
  T
>
export interface BorderRadiusProps<T extends ITheme = Theme> {
  borderRadius?: BorderRadiusProp<T>
  motionSafeBorderRadius?: BorderRadiusProp<T>
  motionReduceBorderRadius?: BorderRadiusProp<T>
  firstBorderRadius?: BorderRadiusProp<T>
  lastBorderRadius?: BorderRadiusProp<T>
  oddBorderRadius?: BorderRadiusProp<T>
  evenBorderRadius?: BorderRadiusProp<T>
  visitedBorderRadius?: BorderRadiusProp<T>
  checkedBorderRadius?: BorderRadiusProp<T>
  focusWithinBorderRadius?: BorderRadiusProp<T>
  hoverBorderRadius?: BorderRadiusProp<T>
  focusBorderRadius?: BorderRadiusProp<T>
  focusVisibleBorderRadius?: BorderRadiusProp<T>
  activeBorderRadius?: BorderRadiusProp<T>
  disabledBorderRadius?: BorderRadiusProp<T>
  placeholderBorderRadius?: BorderRadiusProp<T>
}
export const borderRadius = style({
  prop: 'borderRadius',
  themeGet: getRadius,
})

// Divide

const divideSelector = `& > :not([hidden]) ~ :not([hidden])`

type DivideYProp<T> = SystemProp<BorderWidthGetter<T>, T>
export interface DivideYProps<T extends ITheme = Theme> {
  divideY?: DivideYProp<T>
  motionSafeDivideY?: DivideYProp<T>
  motionReduceDivideY?: DivideYProp<T>
  firstDivideY?: DivideYProp<T>
  lastDivideY?: DivideYProp<T>
  oddDivideY?: DivideYProp<T>
  evenDivideY?: DivideYProp<T>
  visitedDivideY?: DivideYProp<T>
  checkedDivideY?: DivideYProp<T>
  focusWithinDivideY?: DivideYProp<T>
  hoverDivideY?: DivideYProp<T>
  focusDivideY?: DivideYProp<T>
  focusVisibleDivideY?: DivideYProp<T>
  activeDivideY?: DivideYProp<T>
  disabledDivideY?: DivideYProp<T>
  placeholderDivideY?: DivideYProp<T>
}
export const divideY = style({
  prop: 'divideY',
  themeGet: getBorderWidth,
  cssProperty: (value) => {
    const v = value === true ? 1 : value
    return {
      [divideSelector]: {
        '--x-divide-y-reverse': 0,
        borderTopWidth: `calc(${v} * calc(1 - var(--x-divide-y-reverse)))`,
        borderBottomWidth: `calc(${v} * var(--x-divide-y-reverse))`,
      },
    }
  },
})

type DivideXProp<T> = SystemProp<BorderWidthGetter<T>, T>
export interface DivideXProps<T extends ITheme = Theme> {
  divideX?: DivideXProp<T>
  motionSafeDivideX?: DivideXProp<T>
  motionReduceDivideX?: DivideXProp<T>
  firstDivideX?: DivideXProp<T>
  lastDivideX?: DivideXProp<T>
  oddDivideX?: DivideXProp<T>
  evenDivideX?: DivideXProp<T>
  visitedDivideX?: DivideXProp<T>
  checkedDivideX?: DivideXProp<T>
  focusWithinDivideX?: DivideXProp<T>
  hoverDivideX?: DivideXProp<T>
  focusDivideX?: DivideXProp<T>
  focusVisibleDivideX?: DivideXProp<T>
  activeDivideX?: DivideXProp<T>
  disabledDivideX?: DivideXProp<T>
  placeholderDivideX?: DivideXProp<T>
}
export const divideX = style({
  prop: 'divideX',
  themeGet: getBorderWidth,
  cssProperty: (value) => {
    const v = value === true ? 1 : value
    return {
      [divideSelector]: {
        '--x-divide-x-reverse': 0,
        borderRightWidth: `calc(${v} * var(--x-divide-x-reverse))`,
        borderLeftWidth: `calc(${v} * calc(1 - var(--x-divide-x-reverse)))`,
      },
    }
  },
})

type DivideXReverseProp<T> = SystemProp<boolean, T>
export interface DivideXReverseProps<T extends ITheme = Theme> {
  divideXReverse?: DivideXReverseProp<T>
  motionSafeDivideXReverse?: DivideXReverseProp<T>
  motionReduceDivideXReverse?: DivideXReverseProp<T>
  firstDivideXReverse?: DivideXReverseProp<T>
  lastDivideXReverse?: DivideXReverseProp<T>
  oddDivideXReverse?: DivideXReverseProp<T>
  evenDivideXReverse?: DivideXReverseProp<T>
  visitedDivideXReverse?: DivideXReverseProp<T>
  checkedDivideXReverse?: DivideXReverseProp<T>
  focusWithinDivideXReverse?: DivideXReverseProp<T>
  hoverDivideXReverse?: DivideXReverseProp<T>
  focusDivideXReverse?: DivideXReverseProp<T>
  focusVisibleDivideXReverse?: DivideXReverseProp<T>
  activeDivideXReverse?: DivideXReverseProp<T>
  disabledDivideXReverse?: DivideXReverseProp<T>
  placeholderDivideXReverse?: DivideXReverseProp<T>
}
export const divideXReverse = style({
  prop: 'divideXReverse',
  cssProperty: () => ({
    [divideSelector]: {
      '--x-divide-x-reverse': '1',
    },
  }),
})

type DivideYReverseProp<T> = SystemProp<boolean, T>
export interface DivideYReverseProps<T extends ITheme = Theme> {
  divideYReverse?: DivideYReverseProp<T>
  motionSafeDivideYReverse?: DivideYReverseProp<T>
  motionReduceDivideYReverse?: DivideYReverseProp<T>
  firstDivideYReverse?: DivideYReverseProp<T>
  lastDivideYReverse?: DivideYReverseProp<T>
  oddDivideYReverse?: DivideYReverseProp<T>
  evenDivideYReverse?: DivideYReverseProp<T>
  visitedDivideYReverse?: DivideYReverseProp<T>
  checkedDivideYReverse?: DivideYReverseProp<T>
  focusWithinDivideYReverse?: DivideYReverseProp<T>
  hoverDivideYReverse?: DivideYReverseProp<T>
  focusDivideYReverse?: DivideYReverseProp<T>
  focusVisibleDivideYReverse?: DivideYReverseProp<T>
  activeDivideYReverse?: DivideYReverseProp<T>
  disabledDivideYReverse?: DivideYReverseProp<T>
  placeholderDivideYReverse?: DivideYReverseProp<T>
}
export const divideYReverse = style({
  prop: 'divideYReverse',
  cssProperty: () => ({
    [divideSelector]: {
      '--x-divide-y-reverse': '1',
    },
  }),
})

type DivideColorProp<T> = SystemProp<
  ColorGetter<T> | CSS.Property.BorderColor,
  T
>
export interface DivideColorProps<T extends ITheme = Theme> {
  divideColor?: DivideColorProp<T>
  motionSafeDivideColor?: DivideColorProp<T>
  motionReduceDivideColor?: DivideColorProp<T>
  firstDivideColor?: DivideColorProp<T>
  lastDivideColor?: DivideColorProp<T>
  oddDivideColor?: DivideColorProp<T>
  evenDivideColor?: DivideColorProp<T>
  visitedDivideColor?: DivideColorProp<T>
  checkedDivideColor?: DivideColorProp<T>
  focusWithinDivideColor?: DivideColorProp<T>
  hoverDivideColor?: DivideColorProp<T>
  focusDivideColor?: DivideColorProp<T>
  focusVisibleDivideColor?: DivideColorProp<T>
  activeDivideColor?: DivideColorProp<T>
  disabledDivideColor?: DivideColorProp<T>
  placeholderDivideColor?: DivideColorProp<T>
}
export const divideColor = style({
  prop: 'divideColor',
  themeGet: getBorderColor,
  cssProperty: (value) => ({
    [divideSelector]: {
      borderColor: value,
    },
  }),
})

type DivideStyleProp<T> = SystemProp<
  BorderStyleGetter<T> | CSS.Property.BorderStyle,
  T
>
export interface DivideStyleProps<T extends ITheme = Theme> {
  divideStyle?: DivideStyleProp<T>
  motionSafeDivideStyle?: DivideStyleProp<T>
  motionReduceDivideStyle?: DivideStyleProp<T>
  firstDivideStyle?: DivideStyleProp<T>
  lastDivideStyle?: DivideStyleProp<T>
  oddDivideStyle?: DivideStyleProp<T>
  evenDivideStyle?: DivideStyleProp<T>
  visitedDivideStyle?: DivideStyleProp<T>
  checkedDivideStyle?: DivideStyleProp<T>
  focusWithinDivideStyle?: DivideStyleProp<T>
  hoverDivideStyle?: DivideStyleProp<T>
  focusDivideStyle?: DivideStyleProp<T>
  focusVisibleDivideStyle?: DivideStyleProp<T>
  activeDivideStyle?: DivideStyleProp<T>
  disabledDivideStyle?: DivideStyleProp<T>
  placeholderDivideStyle?: DivideStyleProp<T>
}
export const divideStyle = style({
  prop: 'divideStyle',
  themeGet: getBorderStyle,
  cssProperty: (value) => ({
    [divideSelector]: {
      borderStyle: value,
    },
  }),
})

export type RingWidthGetter<T extends ITheme = Theme> = VariantsType<
  T['ringWidths']
>
export const getRingWidth = themeGetter({
  name: 'ringWidth',
  key: 'ringWidths',
  compose: getPx,
})

type RingProp<T> = SystemProp<RingWidthGetter<T>, T>
export interface RingProps<T extends ITheme = Theme> {
  ring?: RingProp<T>
  motionSafeRing?: RingProp<T>
  motionReduceRing?: RingProp<T>
  firstRing?: RingProp<T>
  lastRing?: RingProp<T>
  oddRing?: RingProp<T>
  evenRing?: RingProp<T>
  visitedRing?: RingProp<T>
  checkedRing?: RingProp<T>
  focusWithinRing?: RingProp<T>
  hoverRing?: RingProp<T>
  focusRing?: RingProp<T>
  focusVisibleRing?: RingProp<T>
  activeRing?: RingProp<T>
  disabledRing?: RingProp<T>
  placeholderRing?: RingProp<T>
}
export const ring = style({
  prop: 'ring',
  themeGet: getRingWidth,
  cssProperty: (value) => ({
    '--x-ring-shadow': `var(--x-ring-inset, /*!*/ /*!*/) 0 0 0 ${value} var(--x-ring-color)`,
    boxShadow: 'var(--x-ring-shadow, 0 0 #0000), var(--x-shadow, 0 0 #0000)',
  }),
})

type RingInsetProp<T> = SystemProp<boolean, T>
export interface RingInsetProps<T extends ITheme = Theme> {
  ringInset?: RingInsetProp<T>
  motionSafeRingInset?: RingInsetProp<T>
  motionReduceRingInset?: RingInsetProp<T>
  firstRingInset?: RingInsetProp<T>
  lastRingInset?: RingInsetProp<T>
  oddRingInset?: RingInsetProp<T>
  evenRingInset?: RingInsetProp<T>
  visitedRingInset?: RingInsetProp<T>
  checkedRingInset?: RingInsetProp<T>
  focusWithinRingInset?: RingInsetProp<T>
  hoverRingInset?: RingInsetProp<T>
  focusRingInset?: RingInsetProp<T>
  focusVisibleRingInset?: RingInsetProp<T>
  activeRingInset?: RingInsetProp<T>
  disabledRingInset?: RingInsetProp<T>
  placeholderRingInset?: RingInsetProp<T>
}
export const ringInset = style({
  prop: 'ringInset',
  cssProperty: () => ({ '--x-ring-inset': 'inset' }),
})

type RingColorProp<T> = SystemProp<ColorGetter<T>, T>
export interface RingColorProps<T extends ITheme = Theme> {
  ringColor?: RingColorProp<T>
  motionSafeRingColor?: RingColorProp<T>
  motionReduceRingColor?: RingColorProp<T>
  firstRingColor?: RingColorProp<T>
  lastRingColor?: RingColorProp<T>
  oddRingColor?: RingColorProp<T>
  evenRingColor?: RingColorProp<T>
  visitedRingColor?: RingColorProp<T>
  checkedRingColor?: RingColorProp<T>
  focusWithinRingColor?: RingColorProp<T>
  hoverRingColor?: RingColorProp<T>
  focusRingColor?: RingColorProp<T>
  focusVisibleRingColor?: RingColorProp<T>
  activeRingColor?: RingColorProp<T>
  disabledRingColor?: RingColorProp<T>
  placeholderRingColor?: RingColorProp<T>
}
export const ringColor = style({
  prop: 'ringColor',
  themeGet: getColor,
  cssProperty: (value) => ({ '--x-ring-color': value }),
})

export type BordersProps<T> = BorderProps<T> &
  BorderColorProps<T> &
  BorderWidthProps<T> &
  BorderStyleProps<T> &
  BorderRadiusProps<T> &
  OutlineProps<T> &
  OutlineColorProps<T> &
  OutlineWidthProps<T> &
  OutlineStyleProps<T> &
  DivideXProps<T> &
  DivideYProps<T> &
  DivideXReverseProps<T> &
  DivideYReverseProps<T> &
  DivideColorProps<T> &
  DivideStyleProps<T> &
  RingProps<T> &
  RingInsetProps<T> &
  RingColorProps<T>

export const borders = compose(
  border,
  borderColor,
  borderWidth,
  borderStyle,
  borderRadius,
  outline,
  outlineColor,
  outlineWidth,
  outlineStyle,
  divideX,
  divideY,
  divideXReverse,
  divideYReverse,
  divideColor,
  divideStyle,
  ring,
  ringInset,
  ringColor,
)

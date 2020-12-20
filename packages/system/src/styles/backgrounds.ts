import * as CSS from 'csstype'
import { style, compose } from '../style'
import { getColor, ColorGetter } from './colors'
import { SystemProp, ITheme, Theme } from '../types'

const gradientBackgrounds: { [key: string]: string } = {
  'gradient-to-t': 'linear-gradient(to top, var(--x-gradient-stops))',
  'gradient-to-tr': 'linear-gradient(to top right, var(--x-gradient-stops))',
  'gradient-to-r': 'linear-gradient(to right, var(--x-gradient-stops))',
  'gradient-to-br': 'linear-gradient(to bottom right, var(--x-gradient-stops))',
  'gradient-to-b': 'linear-gradient(to bottom, var(--x-gradient-stops))',
  'gradient-to-bl': 'linear-gradient(to bottom left, var(--x-gradient-stops))',
  'gradient-to-l': 'linear-gradient(to left, var(--x-gradient-stops))',
  'gradient-to-tl': 'linear-gradient(to top left, var(--x-gradient-stops))',
}

type BackgroundProp<T> = SystemProp<CSS.Property.Background, T>
export interface BackgroundProps<T extends ITheme = Theme> {
  background?: BackgroundProp<T>
  motionSafeBackground?: BackgroundProp<T>
  motionReduceBackground?: BackgroundProp<T>
  firstBackground?: BackgroundProp<T>
  lastBackground?: BackgroundProp<T>
  oddBackground?: BackgroundProp<T>
  evenBackground?: BackgroundProp<T>
  visitedBackground?: BackgroundProp<T>
  checkedBackground?: BackgroundProp<T>
  focusWithinBackground?: BackgroundProp<T>
  hoverBackground?: BackgroundProp<T>
  focusBackground?: BackgroundProp<T>
  focusVisibleBackground?: BackgroundProp<T>
  activeBackground?: BackgroundProp<T>
  disabledBackground?: BackgroundProp<T>
  placeholderBackground?: BackgroundProp<T>
}
export const background = style({
  prop: 'background',
  cssProperty: value => ({
    background: gradientBackgrounds[value] || value,
  }),
})

type BackgroundColorProp<T> = SystemProp<
  ColorGetter<T> | CSS.Property.BackgroundColor,
  T
>
export interface BackgroundColorProps<T extends ITheme = Theme> {
  // backgroundColor
  backgroundColor?: BackgroundColorProp<T>
  motionSafeBackgroundColor?: BackgroundColorProp<T>
  motionReduceBackgroundColor?: BackgroundColorProp<T>
  firstBackgroundColor?: BackgroundColorProp<T>
  lastBackgroundColor?: BackgroundColorProp<T>
  oddBackgroundColor?: BackgroundColorProp<T>
  evenBackgroundColor?: BackgroundColorProp<T>
  visitedBackgroundColor?: BackgroundColorProp<T>
  checkedBackgroundColor?: BackgroundColorProp<T>
  focusWithinBackgroundColor?: BackgroundColorProp<T>
  hoverBackgroundColor?: BackgroundColorProp<T>
  focusBackgroundColor?: BackgroundColorProp<T>
  focusVisibleBackgroundColor?: BackgroundColorProp<T>
  activeBackgroundColor?: BackgroundColorProp<T>
  disabledBackgroundColor?: BackgroundColorProp<T>
  placeholderBackgroundColor?: BackgroundColorProp<T>

  // bg
  bg?: BackgroundColorProp<T>
  motionSafeBg?: BackgroundColorProp<T>
  motionReduceBg?: BackgroundColorProp<T>
  firstBg?: BackgroundColorProp<T>
  lastBg?: BackgroundColorProp<T>
  oddBg?: BackgroundColorProp<T>
  evenBg?: BackgroundColorProp<T>
  visitedBg?: BackgroundColorProp<T>
  checkedBg?: BackgroundColorProp<T>
  focusWithinBg?: BackgroundColorProp<T>
  hoverBg?: BackgroundColorProp<T>
  focusBg?: BackgroundColorProp<T>
  focusVisibleBg?: BackgroundColorProp<T>
  activeBg?: BackgroundColorProp<T>
  disabledBg?: BackgroundColorProp<T>
  placeholderBg?: BackgroundColorProp<T>
}
export const backgroundColor = style({
  prop: ['backgroundColor', 'bg'],
  cssProperty: 'backgroundColor',
  themeGet: getColor,
})

type BackgroundImageProp<T> = SystemProp<CSS.Property.BackgroundImage, T>
export interface BackgroundImageProps<T extends ITheme = Theme> {
  backgroundImage?: BackgroundImageProp<T>
  motionSafeBackgroundImage?: BackgroundImageProp<T>
  motionReduceBackgroundImage?: BackgroundImageProp<T>
  firstBackgroundImage?: BackgroundImageProp<T>
  lastBackgroundImage?: BackgroundImageProp<T>
  oddBackgroundImage?: BackgroundImageProp<T>
  evenBackgroundImage?: BackgroundImageProp<T>
  visitedBackgroundImage?: BackgroundImageProp<T>
  checkedBackgroundImage?: BackgroundImageProp<T>
  focusWithinBackgroundImage?: BackgroundImageProp<T>
  hoverBackgroundImage?: BackgroundImageProp<T>
  focusBackgroundImage?: BackgroundImageProp<T>
  focusVisibleBackgroundImage?: BackgroundImageProp<T>
  activeBackgroundImage?: BackgroundImageProp<T>
  disabledBackgroundImage?: BackgroundImageProp<T>
  placeholderBackgroundImage?: BackgroundImageProp<T>
}
export const backgroundImage = style({
  prop: 'backgroundImage',
  cssProperty: value => ({
    backgroundImage: gradientBackgrounds[value] || value,
  }),
})

type BackgroundSizeProp<T> = SystemProp<CSS.Property.BackgroundSize, T>
export interface BackgroundSizeProps<T extends ITheme = Theme> {
  backgroundSize?: BackgroundSizeProp<T>
  motionSafeBackgroundSize?: BackgroundSizeProp<T>
  motionReduceBackgroundSize?: BackgroundSizeProp<T>
  firstBackgroundSize?: BackgroundSizeProp<T>
  lastBackgroundSize?: BackgroundSizeProp<T>
  oddBackgroundSize?: BackgroundSizeProp<T>
  evenBackgroundSize?: BackgroundSizeProp<T>
  visitedBackgroundSize?: BackgroundSizeProp<T>
  checkedBackgroundSize?: BackgroundSizeProp<T>
  focusWithinBackgroundSize?: BackgroundSizeProp<T>
  hoverBackgroundSize?: BackgroundSizeProp<T>
  focusBackgroundSize?: BackgroundSizeProp<T>
  focusVisibleBackgroundSize?: BackgroundSizeProp<T>
  activeBackgroundSize?: BackgroundSizeProp<T>
  disabledBackgroundSize?: BackgroundSizeProp<T>
  placeholderBackgroundSize?: BackgroundSizeProp<T>
}
export const backgroundSize = style({
  prop: 'backgroundSize',
})

type BackgroundPositionProp<T> = SystemProp<CSS.Property.BackgroundPosition, T>
export interface BackgroundPositionProps<T extends ITheme = Theme> {
  backgroundPosition?: BackgroundPositionProp<T>
  motionSafeBackgroundPosition?: BackgroundPositionProp<T>
  motionReduceBackgroundPosition?: BackgroundPositionProp<T>
  firstBackgroundPosition?: BackgroundPositionProp<T>
  lastBackgroundPosition?: BackgroundPositionProp<T>
  oddBackgroundPosition?: BackgroundPositionProp<T>
  evenBackgroundPosition?: BackgroundPositionProp<T>
  visitedBackgroundPosition?: BackgroundPositionProp<T>
  checkedBackgroundPosition?: BackgroundPositionProp<T>
  focusWithinBackgroundPosition?: BackgroundPositionProp<T>
  hoverBackgroundPosition?: BackgroundPositionProp<T>
  focusBackgroundPosition?: BackgroundPositionProp<T>
  focusVisibleBackgroundPosition?: BackgroundPositionProp<T>
  activeBackgroundPosition?: BackgroundPositionProp<T>
  disabledBackgroundPosition?: BackgroundPositionProp<T>
  placeholderBackgroundPosition?: BackgroundPositionProp<T>
}
export const backgroundPosition = style({
  prop: 'backgroundPosition',
})

type BackgroundRepeatProp<T> = SystemProp<CSS.Property.BackgroundRepeat, T>
export interface BackgroundRepeatProps<T extends ITheme = Theme> {
  backgroundRepeat?: BackgroundRepeatProp<T>
  motionSafeBackgroundRepeat?: BackgroundRepeatProp<T>
  motionReduceBackgroundRepeat?: BackgroundRepeatProp<T>
  firstBackgroundRepeat?: BackgroundRepeatProp<T>
  lastBackgroundRepeat?: BackgroundRepeatProp<T>
  oddBackgroundRepeat?: BackgroundRepeatProp<T>
  evenBackgroundRepeat?: BackgroundRepeatProp<T>
  visitedBackgroundRepeat?: BackgroundRepeatProp<T>
  checkedBackgroundRepeat?: BackgroundRepeatProp<T>
  focusWithinBackgroundRepeat?: BackgroundRepeatProp<T>
  hoverBackgroundRepeat?: BackgroundRepeatProp<T>
  focusBackgroundRepeat?: BackgroundRepeatProp<T>
  focusVisibleBackgroundRepeat?: BackgroundRepeatProp<T>
  activeBackgroundRepeat?: BackgroundRepeatProp<T>
  disabledBackgroundRepeat?: BackgroundRepeatProp<T>
  placeholderBackgroundRepeat?: BackgroundRepeatProp<T>
}
export const backgroundRepeat = style({
  prop: 'backgroundRepeat',
})

type BackgroundAttachmentProp<T> = SystemProp<
  CSS.Property.BackgroundAttachment,
  T
>
export interface BackgroundAttachmentProps<T extends ITheme = Theme> {
  backgroundAttachment?: BackgroundAttachmentProp<T>
  motionSafeBackgroundAttachment?: BackgroundAttachmentProp<T>
  motionReduceBackgroundAttachment?: BackgroundAttachmentProp<T>
  firstBackgroundAttachment?: BackgroundAttachmentProp<T>
  lastBackgroundAttachment?: BackgroundAttachmentProp<T>
  oddBackgroundAttachment?: BackgroundAttachmentProp<T>
  evenBackgroundAttachment?: BackgroundAttachmentProp<T>
  visitedBackgroundAttachment?: BackgroundAttachmentProp<T>
  checkedBackgroundAttachment?: BackgroundAttachmentProp<T>
  focusWithinBackgroundAttachment?: BackgroundAttachmentProp<T>
  hoverBackgroundAttachment?: BackgroundAttachmentProp<T>
  focusBackgroundAttachment?: BackgroundAttachmentProp<T>
  focusVisibleBackgroundAttachment?: BackgroundAttachmentProp<T>
  activeBackgroundAttachment?: BackgroundAttachmentProp<T>
  disabledBackgroundAttachment?: BackgroundAttachmentProp<T>
  placeholderBackgroundAttachment?: BackgroundAttachmentProp<T>
}
export const backgroundAttachment = style({
  prop: 'backgroundAttachment',
})

type BackgroundClipProp<T> = SystemProp<CSS.Property.BackgroundClip, T>
export interface BackgroundClipProps<T extends ITheme = Theme> {
  backgroundClip?: BackgroundClipProp<T>
  motionSafeBackgroundClip?: BackgroundClipProp<T>
  motionReduceBackgroundClip?: BackgroundClipProp<T>
  firstBackgroundClip?: BackgroundClipProp<T>
  lastBackgroundClip?: BackgroundClipProp<T>
  oddBackgroundClip?: BackgroundClipProp<T>
  evenBackgroundClip?: BackgroundClipProp<T>
  visitedBackgroundClip?: BackgroundClipProp<T>
  checkedBackgroundClip?: BackgroundClipProp<T>
  focusWithinBackgroundClip?: BackgroundClipProp<T>
  hoverBackgroundClip?: BackgroundClipProp<T>
  focusBackgroundClip?: BackgroundClipProp<T>
  focusVisibleBackgroundClip?: BackgroundClipProp<T>
  activeBackgroundClip?: BackgroundClipProp<T>
  disabledBackgroundClip?: BackgroundClipProp<T>
  placeholderBackgroundClip?: BackgroundClipProp<T>
}
export const backgroundClip = style({
  prop: 'backgroundClip',
  cssProperty: ['backgroundClip', '-webkitBackgroundClip'],
})

type GradientFromProp<T> = SystemProp<ColorGetter<T>, T>
export interface GradientFromProps<T extends ITheme = Theme> {
  gradientFrom?: GradientFromProp<T>
  motionSafeGradientFrom?: GradientFromProp<T>
  motionReduceGradientFrom?: GradientFromProp<T>
  firstGradientFrom?: GradientFromProp<T>
  lastGradientFrom?: GradientFromProp<T>
  oddGradientFrom?: GradientFromProp<T>
  evenGradientFrom?: GradientFromProp<T>
  visitedGradientFrom?: GradientFromProp<T>
  checkedGradientFrom?: GradientFromProp<T>
  focusWithinGradientFrom?: GradientFromProp<T>
  hoverGradientFrom?: GradientFromProp<T>
  focusGradientFrom?: GradientFromProp<T>
  focusVisibleGradientFrom?: GradientFromProp<T>
  activeGradientFrom?: GradientFromProp<T>
  disabledGradientFrom?: GradientFromProp<T>
  placeholderGradientFrom?: GradientFromProp<T>
}
export const gradientFrom = style({
  prop: 'gradientFrom',
  themeGet: getColor,
  cssProperty: value => {
    return {
      '--x-gradient-from': value,
      '--x-gradient-stops':
        'var(--x-gradient-from), var(--x-gradient-to, transparent)',
    }
  },
})

type GradientViaProp<T> = SystemProp<ColorGetter<T>, T>
export interface GradientViaProps<T extends ITheme = Theme> {
  gradientVia?: GradientViaProp<T>
  motionSafeGradientVia?: GradientViaProp<T>
  motionReduceGradientVia?: GradientViaProp<T>
  firstGradientVia?: GradientViaProp<T>
  lastGradientVia?: GradientViaProp<T>
  oddGradientVia?: GradientViaProp<T>
  evenGradientVia?: GradientViaProp<T>
  visitedGradientVia?: GradientViaProp<T>
  checkedGradientVia?: GradientViaProp<T>
  focusWithinGradientVia?: GradientViaProp<T>
  hoverGradientVia?: GradientViaProp<T>
  focusGradientVia?: GradientViaProp<T>
  focusVisibleGradientVia?: GradientViaProp<T>
  activeGradientVia?: GradientViaProp<T>
  disabledGradientVia?: GradientViaProp<T>
  placeholderGradientVia?: GradientViaProp<T>
}
export const gradientVia = style({
  prop: 'gradientVia',
  themeGet: getColor,
  cssProperty: value => ({
    '--x-gradient-stops': `var(--x-gradient-from), ${value}, var(--x-gradient-to, transparent)`,
  }),
})

type GradientToProp<T> = SystemProp<ColorGetter<T>, T>
export interface GradientToProps<T extends ITheme = Theme> {
  gradientTo?: GradientToProp<T>
  motionSafeGradientTo?: GradientToProp<T>
  motionReduceGradientTo?: GradientToProp<T>
  firstGradientTo?: GradientToProp<T>
  lastGradientTo?: GradientToProp<T>
  oddGradientTo?: GradientToProp<T>
  evenGradientTo?: GradientToProp<T>
  visitedGradientTo?: GradientToProp<T>
  checkedGradientTo?: GradientToProp<T>
  focusWithinGradientTo?: GradientToProp<T>
  hoverGradientTo?: GradientToProp<T>
  focusGradientTo?: GradientToProp<T>
  focusVisibleGradientTo?: GradientToProp<T>
  activeGradientTo?: GradientToProp<T>
  disabledGradientTo?: GradientToProp<T>
  placeholderGradientTo?: GradientToProp<T>
}
export const gradientTo = style({
  prop: 'gradientTo',
  themeGet: getColor,
  cssProperty: '--x-gradient-to',
})

export type BackgroundsProps<T extends ITheme = Theme> = BackgroundProps<T> &
  BackgroundColorProps<T> &
  BackgroundImageProps<T> &
  BackgroundSizeProps<T> &
  BackgroundPositionProps<T> &
  BackgroundRepeatProps<T> &
  BackgroundAttachmentProps<T> &
  BackgroundClipProps<T> &
  GradientFromProps<T> &
  GradientViaProps<T> &
  GradientToProps<T>
export const backgrounds = compose(
  background,
  backgroundColor,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  backgroundAttachment,
  backgroundClip,
  gradientFrom,
  gradientVia,
  gradientTo,
)

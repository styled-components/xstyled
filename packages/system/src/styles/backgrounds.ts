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

type BackgroundProp<T extends ITheme> = SystemProp<CSS.Property.Background, T>
export interface BackgroundProps<T extends ITheme = Theme> {
  background?: BackgroundProp<T>
}
export const background = style({
  prop: 'background',
  cssProperty: (value) => ({
    background: gradientBackgrounds[value] || value,
  }),
})

type BackgroundColorProp<T extends ITheme> = SystemProp<
  ColorGetter<T> | CSS.Property.BackgroundColor,
  T
>
export interface BackgroundColorProps<T extends ITheme = Theme> {
  backgroundColor?: BackgroundColorProp<T>
  bg?: BackgroundColorProp<T>
}
export const backgroundColor = style({
  prop: ['backgroundColor', 'bg'],
  cssProperty: 'backgroundColor',
  themeGet: getColor,
})

type BackgroundImageProp<T extends ITheme> = SystemProp<
  CSS.Property.BackgroundImage,
  T
>
export interface BackgroundImageProps<T extends ITheme = Theme> {
  backgroundImage?: BackgroundImageProp<T>
}
export const backgroundImage = style({
  prop: 'backgroundImage',
  cssProperty: (value) => ({
    backgroundImage: gradientBackgrounds[value] || value,
  }),
})

type BackgroundSizeProp<T extends ITheme> = SystemProp<
  CSS.Property.BackgroundSize,
  T
>
export interface BackgroundSizeProps<T extends ITheme = Theme> {
  backgroundSize?: BackgroundSizeProp<T>
}
export const backgroundSize = style({
  prop: 'backgroundSize',
})

type BackgroundPositionProp<T extends ITheme> = SystemProp<
  CSS.Property.BackgroundPosition,
  T
>
export interface BackgroundPositionProps<T extends ITheme = Theme> {
  backgroundPosition?: BackgroundPositionProp<T>
}
export const backgroundPosition = style({
  prop: 'backgroundPosition',
})

type BackgroundRepeatProp<T extends ITheme> = SystemProp<
  CSS.Property.BackgroundRepeat,
  T
>
export interface BackgroundRepeatProps<T extends ITheme = Theme> {
  backgroundRepeat?: BackgroundRepeatProp<T>
}
export const backgroundRepeat = style({
  prop: 'backgroundRepeat',
})

type BackgroundAttachmentProp<T extends ITheme> = SystemProp<
  CSS.Property.BackgroundAttachment,
  T
>
export interface BackgroundAttachmentProps<T extends ITheme = Theme> {
  backgroundAttachment?: BackgroundAttachmentProp<T>
}
export const backgroundAttachment = style({
  prop: 'backgroundAttachment',
})

type BackgroundClipProp<T extends ITheme> = SystemProp<
  CSS.Property.BackgroundClip,
  T
>
export interface BackgroundClipProps<T extends ITheme = Theme> {
  backgroundClip?: BackgroundClipProp<T>
}
export const backgroundClip = style({
  prop: 'backgroundClip',
  cssProperty: ['backgroundClip', '-webkitBackgroundClip'],
})

type GradientFromProp<T extends ITheme> = SystemProp<ColorGetter<T>, T>
export interface GradientFromProps<T extends ITheme = Theme> {
  gradientFrom?: GradientFromProp<T>
}
export const gradientFrom = style({
  prop: 'gradientFrom',
  themeGet: getColor,
  cssProperty: (value) => {
    return {
      '--x-gradient-from': value,
      '--x-gradient-stops':
        'var(--x-gradient-from), var(--x-gradient-to, transparent)',
    }
  },
})

type GradientViaProp<T extends ITheme> = SystemProp<ColorGetter<T>, T>
export interface GradientViaProps<T extends ITheme = Theme> {
  gradientVia?: GradientViaProp<T>
}
export const gradientVia = style({
  prop: 'gradientVia',
  themeGet: getColor,
  cssProperty: (value) => ({
    '--x-gradient-stops': `var(--x-gradient-from), ${value}, var(--x-gradient-to, transparent)`,
  }),
})

type GradientToProp<T extends ITheme> = SystemProp<ColorGetter<T>, T>
export interface GradientToProps<T extends ITheme = Theme> {
  gradientTo?: GradientToProp<T>
}
export const gradientTo = style({
  prop: 'gradientTo',
  themeGet: getColor,
  cssProperty: '--x-gradient-to',
})

export interface BackgroundsProps<T extends ITheme = Theme>
  extends BackgroundProps<T>,
    BackgroundColorProps<T>,
    BackgroundImageProps<T>,
    BackgroundSizeProps<T>,
    BackgroundPositionProps<T>,
    BackgroundRepeatProps<T>,
    BackgroundAttachmentProps<T>,
    BackgroundClipProps<T>,
    GradientFromProps<T>,
    GradientViaProps<T>,
    GradientToProps<T> {}
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

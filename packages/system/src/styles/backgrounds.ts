import * as CSS from 'csstype'
import { style, compose } from '../style'
import { getColor, ColorGetter } from './colors'
import { SystemProperty } from '../types'

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

export interface BackgroundProps<T = {}> {
  background?: SystemProperty<CSS.Property.Background, T>
}
export const background = style<BackgroundProps>({
  prop: 'background',
  cssProperty: (_, { value }) => ({
    background: gradientBackgrounds[value] || value,
  }),
})

type BackgroundColor<T = {}> = ColorGetter<T> | CSS.Property.BackgroundColor
export interface BackgroundColorProps<T = {}> {
  backgroundColor?: SystemProperty<BackgroundColor, T>
  bg?: SystemProperty<BackgroundColor, T>
}
export const backgroundColor = style<BackgroundColorProps>({
  prop: ['backgroundColor', 'bg'],
  cssProperty: 'backgroundColor',
  themeGet: getColor,
})

export interface BackgroundImageProps<T = {}> {
  backgroundImage?: SystemProperty<CSS.Property.BackgroundImage, T>
}
export const backgroundImage = style<BackgroundImageProps>({
  prop: 'backgroundImage',
  cssProperty: (_, { value }) => ({
    backgroundImage: gradientBackgrounds[value] || value,
  }),
})

export interface BackgroundSizeProps<T = {}> {
  backgroundSize?: SystemProperty<CSS.Property.BackgroundSize, T>
}
export const backgroundSize = style<BackgroundSizeProps>({
  prop: 'backgroundSize',
})

export interface BackgroundPositionProps<T = {}> {
  backgroundPosition?: SystemProperty<CSS.Property.BackgroundPosition, T>
}
export const backgroundPosition = style<BackgroundPositionProps>({
  prop: 'backgroundPosition',
})

export interface BackgroundRepeatProps<T = {}> {
  backgroundRepeat?: SystemProperty<CSS.Property.BackgroundRepeat, T>
}
export const backgroundRepeat = style<BackgroundRepeatProps>({
  prop: 'backgroundRepeat',
})

export interface BackgroundAttachmentProps<T = {}> {
  backgroundAttachment?: SystemProperty<CSS.Property.BackgroundAttachment, T>
}
export const backgroundAttachment = style<BackgroundAttachmentProps>({
  prop: 'backgroundAttachment',
})

export interface BackgroundClipProps<T = {}> {
  backgroundClip?: SystemProperty<CSS.Property.BackgroundClip, T>
}
export const backgroundClip = style<BackgroundClipProps>({
  prop: 'backgroundClip',
  cssProperty: ['backgroundClip', '-webkitBackgroundClip'],
})

export interface GradientFromProps<T = {}> {
  gradientFrom?: SystemProperty<ColorGetter, T>
}
export const gradientFrom = style<GradientFromProps>({
  prop: 'gradientFrom',
  themeGet: getColor,
  cssProperty: (_, { value }) => {
    return {
      '--x-gradient-from': value,
      '--x-gradient-stops':
        'var(--x-gradient-from), var(--x-gradient-to, transparent)',
    }
  },
})

export interface GradientViaProps<T = {}> {
  gradientVia?: SystemProperty<ColorGetter, T>
}
export const gradientVia = style<GradientViaProps>({
  prop: 'gradientVia',
  themeGet: getColor,
  cssProperty: (_, { value }) => ({
    '--x-gradient-stops': `var(--x-gradient-from), ${value}, var(--x-gradient-to, transparent)`,
  }),
})

export interface GradientToProps<T = {}> {
  gradientTo?: SystemProperty<ColorGetter, T>
}
export const gradientTo = style<GradientToProps>({
  prop: 'gradientTo',
  themeGet: getColor,
  cssProperty: '--x-gradient-to',
})

export type BackgroundsProps<T = {}> = BackgroundProps<T> &
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
export const backgrounds = compose<BackgroundsProps>(
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

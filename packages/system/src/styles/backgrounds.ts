import * as CSS from 'csstype'
import { style, compose } from '../style'
import { getColor, ThemeColor, Color } from './colors'
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

export interface BackgroundProps<T extends ITheme = Theme> {
  background?: SystemProp<CSS.Property.Background, T>
}
export const background = style<BackgroundProps>({
  prop: 'background',
  css: (value) => ({
    background: gradientBackgrounds[value] || value,
  }),
})

type BackgroundColorProp<T extends ITheme> = SystemProp<
  ThemeColor<T> | CSS.Property.BackgroundColor,
  T
>
export interface BackgroundColorProps<T extends ITheme = Theme> {
  backgroundColor?: BackgroundColorProp<T>
  bg?: BackgroundColorProp<T>
}
export const backgroundColor = style<BackgroundColorProps>({
  prop: ['backgroundColor', 'bg'],
  css: 'backgroundColor',
  themeGet: getColor,
})

export interface BackgroundImageProps<T extends ITheme = Theme> {
  backgroundImage?: SystemProp<CSS.Property.BackgroundImage, T>
}
export const backgroundImage = style<BackgroundImageProps>({
  prop: 'backgroundImage',
  css: (value) => ({
    backgroundImage: gradientBackgrounds[value] || value,
  }),
})

export interface BackgroundSizeProps<T extends ITheme = Theme> {
  backgroundSize?: SystemProp<CSS.Property.BackgroundSize, T>
}
export const backgroundSize = style<BackgroundSizeProps>({
  prop: 'backgroundSize',
})

export interface BackgroundPositionProps<T extends ITheme = Theme> {
  backgroundPosition?: SystemProp<CSS.Property.BackgroundPosition, T>
}
export const backgroundPosition = style<BackgroundPositionProps>({
  prop: 'backgroundPosition',
})

export interface BackgroundRepeatProps<T extends ITheme = Theme> {
  backgroundRepeat?: SystemProp<CSS.Property.BackgroundRepeat, T>
}
export const backgroundRepeat = style<BackgroundRepeatProps>({
  prop: 'backgroundRepeat',
})

export interface BackgroundAttachmentProps<T extends ITheme = Theme> {
  backgroundAttachment?: SystemProp<CSS.Property.BackgroundAttachment, T>
}
export const backgroundAttachment = style<BackgroundAttachmentProps>({
  prop: 'backgroundAttachment',
})

export interface BackgroundClipProps<T extends ITheme = Theme> {
  backgroundClip?: SystemProp<CSS.Property.BackgroundClip, T>
}
export const backgroundClip = style<BackgroundClipProps>({
  prop: 'backgroundClip',
  css: ['backgroundClip', '-webkitBackgroundClip'],
})

export interface GradientFromProps<T extends ITheme = Theme> {
  gradientFrom?: SystemProp<Color<T>, T>
}
export const gradientFrom = style<GradientFromProps>({
  prop: 'gradientFrom',
  themeGet: getColor,
  css: (value) => {
    return {
      '--x-gradient-from': value,
      '--x-gradient-stops':
        'var(--x-gradient-from), var(--x-gradient-to, transparent)',
    }
  },
})

export interface GradientViaProps<T extends ITheme = Theme> {
  gradientVia?: SystemProp<Color<T>, T>
}
export const gradientVia = style<GradientViaProps>({
  prop: 'gradientVia',
  themeGet: getColor,
  css: (value) => ({
    '--x-gradient-stops': `var(--x-gradient-from), ${value}, var(--x-gradient-to, transparent)`,
  }),
})

export interface GradientToProps<T extends ITheme = Theme> {
  gradientTo?: SystemProp<Color<T>, T>
}
export const gradientTo = style<GradientToProps>({
  prop: 'gradientTo',
  themeGet: getColor,
  css: '--x-gradient-to',
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

import * as CSS from 'csstype'
import { style, themeGetter, compose } from '../style'
import { ITheme, SystemProp, ThemeNamespaceValue, Theme } from '../types'

export type ThemeAnimation<T extends ITheme = Theme> = ThemeNamespaceValue<
  'animations',
  T
>

export const getAnimation = themeGetter<ThemeAnimation>({
  name: 'animation',
  key: 'animations',
})

export interface AnimationProps<T extends ITheme = Theme> {
  animation?: SystemProp<ThemeAnimation<T> | CSS.Property.Animation, T>
}

export const animation = style<AnimationProps>({
  prop: 'animation',
  themeGet: getAnimation,
})

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AnimationsProps<T extends ITheme = Theme>
  extends AnimationProps<T> {}
export const animations = compose<AnimationsProps>(animation)

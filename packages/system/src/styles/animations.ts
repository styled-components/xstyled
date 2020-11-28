import * as CSS from 'csstype'
import { style, themeGetter, compose } from '../style'
import { SystemProperty, VariantsType, ExtractThemeProperty } from '../types'

export type AnimationGetter<T = {}> = VariantsType<
  ExtractThemeProperty<T, 'animations'>
>
export const getAnimation = themeGetter({
  name: 'animation',
  key: 'animations',
})

export interface AnimationProps<T = {}> {
  animation?: SystemProperty<AnimationGetter<T> | CSS.Property.Animation, T>
}
export const animation = style({ prop: 'animation', themeGet: getAnimation })

export type AnimationsProps<T = {}> = AnimationProps<T>

export const animations = compose<AnimationsProps>(animation)

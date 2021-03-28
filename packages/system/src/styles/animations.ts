import * as CSS from 'csstype'
import { style, themeGetter, compose } from '../style'
import { SystemProp, ITheme, VariantsType, Theme } from '../types'

export type AnimationGetter<T extends ITheme = Theme> = VariantsType<
  T['animations']
>

export const getAnimation = themeGetter<AnimationGetter>({
  name: 'animation',
  key: 'animations',
})

type AnimationProp<T extends ITheme> = SystemProp<
  AnimationGetter<T> | CSS.Property.Animation,
  T
>
export interface AnimationProps<T extends ITheme = Theme> {
  animation?: AnimationProp<T>
}

export const animation = style({
  prop: 'animation',
  themeGet: getAnimation,
})

export { AnimationProps as AnimationsProps }
export const animations = compose(animation)

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

type AnimationProp<T> = SystemProp<
  AnimationGetter<T> | CSS.Property.Animation,
  T
>
export interface AnimationProps<T extends ITheme = Theme> {
  animation?: AnimationProp<T>
  motionSafeAnimation?: AnimationProp<T>
  motionReduceAnimation?: AnimationProp<T>
  firstAnimation?: AnimationProp<T>
  lastAnimation?: AnimationProp<T>
  oddAnimation?: AnimationProp<T>
  evenAnimation?: AnimationProp<T>
  visitedAnimation?: AnimationProp<T>
  checkedAnimation?: AnimationProp<T>
  focusWithinAnimation?: AnimationProp<T>
  hoverAnimation?: AnimationProp<T>
  focusAnimation?: AnimationProp<T>
  focusVisibleAnimation?: AnimationProp<T>
  activeAnimation?: AnimationProp<T>
  disabledAnimation?: AnimationProp<T>
  placeholderAnimation?: AnimationProp<T>
}

export const animation = style({
  prop: 'animation',
  themeGet: getAnimation,
})

export type AnimationsProps<T extends ITheme = Theme> = AnimationProps<T>
export const animations = compose(animation)

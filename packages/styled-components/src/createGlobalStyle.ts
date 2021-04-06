import {
  createGlobalStyle as scCreateGlobalStyle,
  GlobalStyleComponent,
  DefaultTheme,
  CSSObject,
  ThemedStyledProps,
  Interpolation,
  InterpolationFunction,
} from 'styled-components'
import { css } from './css'

export const createGlobalStyle = <P extends object = {}>(
  first:
    | TemplateStringsArray
    | CSSObject
    | InterpolationFunction<ThemedStyledProps<P, DefaultTheme>>,
  ...interpolations: Array<Interpolation<ThemedStyledProps<P, DefaultTheme>>>
): GlobalStyleComponent<P, DefaultTheme> => {
  // @ts-ignore
  return scCreateGlobalStyle<P>([css(first, ...interpolations)])
}

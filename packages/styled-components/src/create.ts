import { StyleGenerator } from '@xstyled/system'
import {
  XCreateGlobalStyle,
  createCreateGlobalStyle,
} from './createCreateGlobalStyle'
import { XCSSFunction, createCssFunction } from './createCssFunction'
import { XStyled, createStyled } from './createStyled'
import { X, createX } from './createX'

export interface XStyledSet<TGen extends StyleGenerator> {
  css: XCSSFunction
  x: X<TGen>
  styled: XStyled<TGen>
  createGlobalStyle: XCreateGlobalStyle
}

export const createCss = <TGen extends StyleGenerator>(
  generator: TGen,
): XStyledSet<TGen> => {
  return {
    css: createCssFunction<TGen>(generator),
    x: createX<TGen>(generator),
    styled: createStyled<TGen>(generator),
    createGlobalStyle: createCreateGlobalStyle<TGen>(generator),
  }
}

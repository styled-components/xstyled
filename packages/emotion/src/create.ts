import { StyleGenerator } from '@xstyled/system'
import { createCssFunction, XCSSFunction } from './createCssFunction'
import { createX, X } from './createX'
import { createStyled, XStyled } from './createStyled'
import {
  createCreateGlobalStyle,
  XCreateGlobalStyle,
} from './createCreateGlobalStyle'
import { createCx, Cx } from './createCx'
import { createJsx, XJsx } from './createJsx'

export interface XStyledSet<TGen extends StyleGenerator> {
  css: XCSSFunction
  x: X<TGen>
  styled: XStyled<TGen>
  createGlobalStyle: XCreateGlobalStyle
  cx: Cx
  jsx: XJsx
}

export const createCss = <TGen extends StyleGenerator>(
  generator: TGen,
): XStyledSet<TGen> => {
  return {
    css: createCssFunction(generator),
    x: createX(generator),
    styled: createStyled(generator),
    createGlobalStyle: createCreateGlobalStyle(generator),
    cx: createCx(generator),
    jsx: createJsx(generator),
  }
}

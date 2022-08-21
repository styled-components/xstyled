import { StyleGenerator } from '@xstyled/system'
import { createCssFunction, XCSSFunction } from './createCssFunction'
import { createX, X } from './createX'
import { createStyled, XStyled } from './createStyled'

interface XStyledSet<TGen extends StyleGenerator> {
  css: XCSSFunction
  x: X<TGen>
  styled: XStyled<TGen>
}

export const createCss = <TGen extends StyleGenerator>(
  generator: TGen,
): XStyledSet<TGen> => {
  return {
    css: createCssFunction(generator),
    x: createX(generator),
    styled: createStyled(generator),
  }
}

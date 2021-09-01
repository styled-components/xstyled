import { StyleGenerator } from '@xstyled/system'
import { createCssFunction, XCSSFunction } from './createCssFunction'
import { createStyled, XStyled } from './createStyled'

interface XStyledSet<TGen extends StyleGenerator> {
  css: XCSSFunction
  styled: XStyled<TGen>
}

export const createCss = <TGen extends StyleGenerator>(
  generator: TGen,
): XStyledSet<TGen> => {
  return {
    css: createCssFunction(generator),
    styled: createStyled(generator),
  }
}

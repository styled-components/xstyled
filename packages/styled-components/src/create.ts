import { StyleGenerator } from '@xstyled/system'
import { createCssFunction, XCSSFunction } from './createCssFunction'
import { css as scCss } from 'styled-components'
import { scStyled } from './scStyled'
import { createX, X } from './createX'
import {
  createStyled,
  defineStyledInterface,
  defineXStyledInterface,
  XStyled,
} from './createStyled'
import {
  createCreateGlobalStyle,
  XCreateGlobalStyle,
} from './createCreateGlobalStyle'

export interface XStyledSet<TGen extends StyleGenerator> {
  css: XCSSFunction
  x: X<TGen>
  styled: XStyled<TGen>
  createGlobalStyle: XCreateGlobalStyle
}

export const createCss = <TGen extends StyleGenerator>(
  generator: TGen,
): XStyledSet<TGen> => {
  const css = createCssFunction(scCss, generator)

  return {
    css,
    x: defineXStyledInterface(createX(scStyled, css, generator)),
    styled: defineStyledInterface(createStyled(scStyled, css, generator)),
    createGlobalStyle: createCreateGlobalStyle(generator),
  }
}

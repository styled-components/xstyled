import { StyleGenerator } from '@xstyled/system'
import { css as scCss } from 'styled-components/native'
import * as RN from 'react-native'
import { createCssFunction, XCSSFunction } from '../createCssFunction'
import { scStyledNative } from './scStyled'
import { createX } from '../createX'
import { createStyled, StyledFunctions } from '../createStyled'
import { X, XStyledNative } from './types'

interface XStyledSet<TGen extends StyleGenerator> {
  css: XCSSFunction
  x: X<TGen>
  styled: XStyledNative<TGen>
}

const defineStyledInterface = <XObj>({
  scStyled,
  styled,
  xstyled,
}: StyledFunctions<XObj>): XObj => {
  Object.keys(scStyled).forEach((tag) => {
    Object.defineProperty(styled, tag, {
      enumerable: true,
      configurable: false,
      get() {
        //@ts-ignore
        return styled(RN[tag])
      },
    })

    Object.defineProperty(styled, `${tag}Box`, {
      enumerable: true,
      configurable: false,
      get() {
        //@ts-ignore
        return xstyled(RN[tag])
      },
    })
  })

  return styled as XObj
}

const defineStyledXInterface = <XObj>({
  scStyled,
  styled,
  xstyled,
}: StyledFunctions<XObj>): XObj => {
  Object.keys(scStyled).forEach((tag) => {
    Object.defineProperty(styled, tag, {
      enumerable: true,
      configurable: false,
      get() {
        //@ts-ignore
        return xstyled(RN[tag])``
      },
    })
  })

  return styled as XObj
}

export const createCss = <TGen extends StyleGenerator>(
  generator: TGen,
): XStyledSet<TGen> => {
  const css = createCssFunction(scCss, generator)

  return {
    css,
    x: defineStyledXInterface(createX(scStyledNative, css, generator)),
    styled: defineStyledInterface(createStyled(scStyledNative, css, generator)),
  }
}

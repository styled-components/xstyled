/* eslint-disable no-continue, no-loop-func, no-cond-assign */
import {
  StyledComponent,
  DefaultTheme,
  StyledInterface,
} from 'styled-components'
import { ReactNativeStyledInterface } from 'styled-components/native'
import { StyleGenerator, StyleGeneratorProps, Theme } from '@xstyled/system'
import { createBaseStyled, StyledFunctions } from './createStyled'
import { XCSSFunction } from './createCssFunction'

type JSXElementKeys = keyof JSX.IntrinsicElements

type SafeIntrinsicElement<T extends keyof JSX.IntrinsicElements> = (
  props: Omit<JSX.IntrinsicElements[T], 'color'>,
) => React.ReactElement<any, T>

export type X<TGen extends StyleGenerator> = {
  [Key in JSXElementKeys]: StyledComponent<
    SafeIntrinsicElement<Key>,
    DefaultTheme,
    StyleGeneratorProps<TGen>,
    'color'
  >
}

export const createX = <
  StyledFunction extends StyledInterface | ReactNativeStyledInterface<Theme>,
  XStyledInterface,
  TGen extends StyleGenerator,
>(
  scStyled: StyledFunction,
  cssFunction: XCSSFunction,
  generator: TGen,
): StyledFunctions<XStyledInterface> => {
  const xstyled = createBaseStyled<XStyledInterface, TGen>(
    scStyled,
    cssFunction,
    generator,
  )

  const styled = {} as XStyledInterface

  return { scStyled, styled, xstyled }
}

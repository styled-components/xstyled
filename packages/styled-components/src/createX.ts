/* eslint-disable no-continue, no-loop-func, no-cond-assign */
import {
  StyledComponent,
  DefaultTheme,
  StyledInterface,
} from 'styled-components'
import { ReactNativeStyledInterface } from 'styled-components/native'
import { StyleGenerator, StyleGeneratorProps, Theme } from '@xstyled/system'
import { createBaseStyled, StyledFunctions } from './createStyled'
import { createCssFunction } from './createCssFunction'

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
  StyledCssFunction extends ReturnType<typeof createCssFunction>,
  XObj,
  TGen extends StyleGenerator,
>(
  scStyled: StyledFunction,
  cssFunction: StyledCssFunction,
  generator: TGen,
): StyledFunctions<XObj> => {
  const xstyled = createBaseStyled<XObj, TGen>(scStyled, cssFunction, generator)

  const x = {} as XObj

  return { scStyled, styled: x, xstyled }
}

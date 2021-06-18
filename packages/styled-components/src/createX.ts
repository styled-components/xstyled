/* eslint-disable no-continue, no-loop-func, no-cond-assign */
import scStyled, { StyledComponent, DefaultTheme } from 'styled-components'
import { StyleGenerator, StyleGeneratorProps } from '@xstyled/system'
import { createBaseStyled } from './createStyled'
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

export const createX = <TGen extends StyleGenerator>(
  generator: TGen,
): X<TGen> => {
  const xstyled = createBaseStyled(createCssFunction(generator), generator)
  const x = {} as X<TGen>
  Object.keys(scStyled).forEach((tag) => {
    // @ts-ignore
    x[tag] = xstyled(tag)``
  })
  return x
}

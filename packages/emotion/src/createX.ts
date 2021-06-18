import * as React from 'react'
import { Theme } from '@emotion/react'
import emStyled, { StyledComponent } from '@emotion/styled'
import { StyleGenerator, StyleGeneratorProps } from '@xstyled/system'
import { createBaseStyled } from './createStyled'
import { createCssFunction } from './createCssFunction'

type JSXElementKeys = keyof JSX.IntrinsicElements

export type X<TGen extends StyleGenerator> = {
  [Key in JSXElementKeys]: StyledComponent<
    StyleGeneratorProps<TGen> & { as?: React.ElementType; theme?: Theme },
    Omit<JSX.IntrinsicElements[Key], 'color'>
  >
}

export const createX = <TGen extends StyleGenerator>(
  generator: TGen,
): X<TGen> => {
  const styled = createBaseStyled(createCssFunction(generator), generator)
  const x = {} as X<TGen>
  Object.keys(emStyled).forEach((tag) => {
    // @ts-ignore
    x[tag] = styled(tag)``
  })
  return x
}

/* eslint-disable no-continue, no-loop-func, no-cond-assign */
import styled, { IStyledComponent } from 'styled-components'

import type { ExecutionProps } from 'styled-components/dist/types'
import { StyleGenerator, StyleGeneratorProps } from '@xstyled/system'
import { createBaseStyled } from './createStyled'
import { createCssFunction } from './createCssFunction'

type JSXElementKeys = keyof JSX.IntrinsicElements

export type X<TGen extends StyleGenerator> = {
  [Key in JSXElementKeys]: IStyledComponent<
    'web',
    Omit<ExecutionProps & StyleGeneratorProps<TGen>, 'color'>
  >
}

export const createX = <TGen extends StyleGenerator>(
  generator: TGen,
): X<TGen> => {
  const xstyled = createBaseStyled(createCssFunction(generator), generator)
  const x = {} as X<TGen>
  Object.keys(styled).forEach((tag) => {
    // @ts-ignore
    x[tag] = xstyled(tag)``
  })
  return x
}

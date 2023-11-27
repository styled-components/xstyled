/* eslint-disable no-continue, no-loop-func, no-cond-assign */
import styled, { SupportedHTMLElements } from 'styled-components'

import type {
  ExecutionProps,
  IStyledComponent,
} from 'styled-components/dist/types'

import type { Styled } from 'styled-components/dist/constructors/constructWithOptions'

import { StyleGenerator, StyleGeneratorProps } from '@xstyled/system'
import { createBaseStyled } from './createStyled'
import { createCssFunction } from './createCssFunction'

type JSXElementKeys = keyof typeof styled

type ExtractTagProps<T extends SupportedHTMLElements> =
  (typeof styled)[T] extends Styled<'web', T, infer P, any> ? P : {}

export type X<TGen extends StyleGenerator> = {
  [Key in JSXElementKeys]: IStyledComponent<
    'web',
    ExecutionProps & StyleGeneratorProps<TGen> & ExtractTagProps<Key>
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

/* eslint-disable no-continue, no-loop-func, no-cond-assign */
import { StyleGenerator, StyleGeneratorProps } from '@xstyled/system'
import {
  FastOmit,
  SupportedHTMLElements,
  IStyledComponent,
} from 'styled-components'
import { createCssFunction } from './createCssFunction'
import { createBaseStyled } from './createStyled'
import { scStyled } from './scStyled'

export type X<TGen extends StyleGenerator> = {
  [Key in SupportedHTMLElements]: IStyledComponent<
    'web',
    FastOmit<JSX.IntrinsicElements[Key], keyof StyleGeneratorProps<TGen>> &
      StyleGeneratorProps<TGen>
  >
}

export const createX = <TGen extends StyleGenerator>(
  generator: TGen,
): X<TGen> => {
  const xstyled = createBaseStyled<TGen>(
    createCssFunction<TGen>(generator),
    generator,
  )
  const x = {} as X<TGen>
  Object.keys(scStyled).forEach((tag) => {
    // @ts-expect-error
    x[tag] = xstyled(tag)({})
  })
  return x
}

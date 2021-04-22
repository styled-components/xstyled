/* eslint-disable no-continue, no-loop-func, no-cond-assign */
import * as React from 'react'
import { Theme } from '@emotion/react'
import emStyled, { StyledComponent } from '@emotion/styled'
import { compose, StyleGenerator } from '@xstyled/system'
import { createShouldForwardProp } from './createShouldForwardProp'
import { styledWithGenerator } from './styled'

type JSXElementKeys = keyof JSX.IntrinsicElements

type JSXElements<TProps> = {
  [Key in JSXElementKeys]: StyledComponent<
    TProps & { as?: React.ElementType; theme?: Theme },
    JSX.IntrinsicElements[Key]
  >
}

type CreateX = <TProps extends object>(generator: StyleGenerator) => X<TProps>

export interface X<TProps extends object> extends JSXElements<TProps> {
  extend: CreateX
}

export const createX: CreateX = <TProps extends object>(
  generator: StyleGenerator,
) => {
  // @ts-ignore
  const x: X<TProps> = {
    extend: (...generators) => createX(compose(generator, ...generators)),
  }

  const shouldForwardProp = createShouldForwardProp(generator)

  Object.keys(emStyled).forEach((tag) => {
    // @ts-ignore
    x[tag] = styledWithGenerator(tag, { shouldForwardProp }, generator)``
  })

  return x
}

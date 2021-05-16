/* eslint-disable @typescript-eslint/ban-types */
import * as React from 'react'
import { Theme } from '@emotion/react'
import emStyled, { StyledComponent } from '@emotion/styled'
import { compose, StyleGenerator } from '@xstyled/system'
import { createBaseStyled } from './createStyled'

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
  const styled = createBaseStyled(generator)
  const x: X<TProps> = {
    extend: (...generators) => createX(compose(generator, ...generators)),
  } as X<TProps>
  Object.keys(emStyled).forEach((tag) => {
    // @ts-ignore
    x[tag] = styled(tag)``
  })
  return x
}

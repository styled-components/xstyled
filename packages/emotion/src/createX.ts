/* eslint-disable no-continue, no-loop-func, no-cond-assign */
import * as React from 'react'
import { Theme } from '@emotion/react'
import styled, { StyledComponent } from '@emotion/styled'
import { compose, StyleGenerator } from '@xstyled/system'

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

const tags = Object.keys(styled) as JSXElementKeys[]

export const createX: CreateX = <TProps extends object>(
  generator: StyleGenerator,
) => {
  // @ts-ignore
  const x: X<TProps> = {
    extend: (...generators) => createX(compose(generator, ...generators)),
  }

  tags.forEach((tag) => {
    // @ts-ignore
    x[tag] = styled(tag, {
      shouldForwardProp: (prop: string) =>
        prop !== 'as' && !generator.meta.props.includes(prop) && !prop.startsWith('$'),
      // @ts-ignore
    })<TProps>(() => [`&&{`, generator, `}`])
  })

  return x
}

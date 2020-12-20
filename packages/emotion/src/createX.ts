/* eslint-disable no-continue, no-loop-func, no-cond-assign */
import { Theme } from '@emotion/react'
import styled, { StyledComponent } from '@emotion/styled'
import { compose, StyleGenerator } from '@xstyled/system'

type JSXElementKeys = keyof JSX.IntrinsicElements

const tags = Object.keys(styled)

export const createX = <TProps extends object>(generator: StyleGenerator) => {
  type X<TProps extends object> = {
    extend<TExtendProps extends object>(
      ...generators: StyleGenerator[]
    ): X<TExtendProps & TProps>
  } & {
    [Key in JSXElementKeys]: StyledComponent<
      TProps & { as?: React.ElementType; theme?: Theme },
      JSX.IntrinsicElements[Key]
    >
  }

  // @ts-ignore
  const x: X<TProps> = {
    extend: (...generators) => createX(compose(generator, ...generators)),
  }

  tags.forEach(tag => {
    // @ts-ignore
    x[tag] = styled(tag, {
      shouldForwardProp: (prop: string) =>
        prop !== 'as' && !generator.meta.props.includes(prop),
    })<TProps>(() => [`&&{`, generator, `}`])
  })

  return x
}

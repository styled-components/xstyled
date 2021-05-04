/* eslint-disable no-continue, no-loop-func, no-cond-assign */
import scStyled, { StyledComponent, DefaultTheme } from 'styled-components'
import { compose, StyleGenerator } from '@xstyled/system'
import { createShouldForwardProp } from './createShouldForwardProp'
import { styled } from './styled'

type JSXElementKeys = keyof JSX.IntrinsicElements

type SafeIntrinsicComponent<T extends keyof JSX.IntrinsicElements> = (
  props: Omit<JSX.IntrinsicElements[T], 'color'>,
) => React.ReactElement<any, T>

export const createX = <TProps extends object>(generator: StyleGenerator) => {
  type X<TProps extends object> = {
    extend<TExtendProps extends object>(
      ...generators: StyleGenerator[]
    ): X<TExtendProps>
  } & {
    [Key in JSXElementKeys]: StyledComponent<
      SafeIntrinsicComponent<Key>,
      DefaultTheme,
      TProps,
      'color'
    >
  }

  // @ts-ignore
  const x: X<TProps> = {
    extend: (...generators) => createX(compose(generator, ...generators)),
  }

  const shouldForwardProp = createShouldForwardProp(generator)

  Object.keys(scStyled).forEach((tag) => {
    // @ts-ignore
    x[tag] = styled(tag).withGenerator(generator).withConfig({
      // @ts-ignore
      shouldForwardProp,
    })``
  })

  return x
}

/* eslint-disable no-continue, no-loop-func, no-cond-assign */
import styled, { StyledComponent, DefaultTheme } from 'styled-components'
import { compose, StyleGenerator } from '@xstyled/system'

type JSXElementKeys = keyof JSX.IntrinsicElements

const tags = Object.keys(styled)

export const createX = <TProps extends object>(generator: StyleGenerator) => {
  type X<TProps extends object> = {
    extend<TExtendProps extends object>(
      ...generators: StyleGenerator[]
    ): X<TExtendProps>
  } & {
    [Key in JSXElementKeys]: StyledComponent<Key, DefaultTheme, TProps, never>
  }

  // @ts-ignore
  const x: X<TProps> = {
    extend: (...generators) => createX(compose(generator, ...generators)),
  }

  tags.forEach((tag) => {
    // @ts-ignore
    x[tag] = styled(tag).withConfig({
      shouldForwardProp: (prop, defaultValidatorFn) => {
        if (typeof prop === 'string' && generator.meta.props.includes(prop))
          return false
        return defaultValidatorFn(prop)
      },
    })<TProps>(() => [`&&{`, generator, `}`])
  })

  return x
}

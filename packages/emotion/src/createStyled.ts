/* eslint-disable no-continue, no-loop-func, no-cond-assign */
import emStyled, { CreateStyled, CreateStyledComponent } from '@emotion/styled'
import { Theme } from '@emotion/react'
import { compose, StyleGenerator, SystemProps } from '@xstyled/system'
import { BoxElements } from '@xstyled/core'
import { createShouldForwardProp } from './createShouldForwardProp'
import { css } from './css'

function flattenArgs(arg: any, props: any): any {
  if (typeof arg === 'function') return flattenArgs(arg(props), props)
  if (Array.isArray(arg)) return arg.map((arg) => flattenArgs(arg, props))
  return arg
}

function getCreateStyle(baseCreateStyle: any, ...generators: StyleGenerator[]) {
  const createStyle = generators.length
    ? (strings: any, ...args: any) => {
        if (Array.isArray(strings)) {
          // The tagged template literal should receive an equal number of
          // additional separators.
          strings = strings.concat(generators.map(() => '\n'))
        }
        args = args.concat(generators)
        return baseCreateStyle((props: any) =>
          css(strings, ...flattenArgs(args, props))(props),
        )
      }
    : (strings: any, ...args: any) =>
        baseCreateStyle((props: any) =>
          css(strings, ...flattenArgs(args, props))(props),
        )
  return createStyle
}

type BoxStyledTags = {
  [Tag in keyof BoxElements]: CreateStyledComponent<
    SystemProps<Theme> & { as?: React.ElementType; theme?: Theme },
    JSX.IntrinsicElements[BoxElements[Tag]]
  >
}

interface CreateXStyled extends CreateStyled, BoxStyledTags {}

export const createStyled = (generator: StyleGenerator) => {
  // Handle generator option to apply a generator after styles. This follows
  // emotion's approach of configuring the styled creator using an options
  // object. For styled-components, we accomplish the same with .withGenerator()
  // following that lib's API.
  // @ts-ignore
  const styled: CreateXStyled = (
    component: any,
    options: any,
  ) => getCreateStyle(emStyled(component, options), generator)

  styled.extend = (...generators: StyleGenerator[]) =>
    createStyled(compose(generator, ...generators))

  const shouldForwardProp = createShouldForwardProp(generator)

  // @ts-ignore
  styled.box = styled('div', { generator, shouldForwardProp })

  Object.keys(emStyled).forEach((key) => {
    // @ts-ignore
    styled[key] = styled(key)
    // @ts-ignore
    styled[`${key}Box`] = styled(key, { generator, shouldForwardProp })
  })

  return styled
}

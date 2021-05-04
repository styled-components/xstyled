/* eslint-disable no-continue, no-loop-func, no-cond-assign */
import * as React from 'react'
import emStyled, { CreateStyledComponent, CreateStyled } from '@emotion/styled'
import { Theme } from '@emotion/react'
import { StyleGenerator, SystemProps, system } from '@xstyled/system'
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

// @ts-ignore
export const styled: CreateXStyled = (component: any, options: any) =>
  getCreateStyle(emStyled(component, options))

// exported for x.* but not for xstyled API
// @ts-ignore
export const styledWithGenerator: CreateXStyled = (
  component: any,
  options: any,
  generator: StyleGenerator,
) => getCreateStyle(emStyled(component, options), generator)

const shouldForwardProp = createShouldForwardProp(system)

// @ts-ignore
styled.box = styledWithGenerator('div', { shouldForwardProp }, system)

Object.keys(emStyled).forEach((key) => {
  // @ts-ignore
  styled[key] = styled(key)
  // @ts-ignore
  styled[`${key}Box`] = styledWithGenerator(key, { shouldForwardProp }, system)
})

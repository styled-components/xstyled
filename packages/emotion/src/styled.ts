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
  return (strings: any, ...args: any) =>
    baseCreateStyle((props: any) => {
      let flattenedArgs = flattenArgs(args, props)

      // Emotion's css function can receive: template literal (array of
      // strings followed by interpolations), style object, or array of style
      // objects. Additional generators supplied to getCreateStyle need to be
      // interpolated differently depending on which form is called.
      if (generators.length) {
        if (Array.isArray(strings) && typeof strings[0] === 'string') {
          // The tagged template literal should receive an equal number of
          // additional separators.
          strings = strings.concat(generators.map(() => '\n'))
          flattenedArgs = flattenedArgs.concat(flattenArgs(generators, props))
        } else if (Array.isArray(strings)) {
          // Resolve generators to objects and append to existing array.
          strings = strings.concat(flattenArgs(generators, props))
        } else {
          // Convert single object to array.
          strings = [strings].concat(flattenArgs(generators, props))
        }
      }

      return css(strings, ...flattenedArgs)(props)
    })
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

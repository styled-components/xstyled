/* eslint-disable no-continue, no-loop-func, no-cond-assign */
import {
  css as scCss,
  FlattenSimpleInterpolation,
  ThemedCssFunction,
} from 'styled-components'
import { StyleGenerator, Theme } from '@xstyled/system'
import { flattenStrings } from '@xstyled/util'
import { createTransform } from '@xstyled/core'

export type XCSSFunction = ThemedCssFunction<Theme>

export const createCssFunction = <TGen extends StyleGenerator>(
  generator: TGen,
): XCSSFunction => {
  const transform = createTransform(generator)
  return ((...args: Parameters<XCSSFunction>) => {
    const scCssArgs = scCss(...args)
    const flattenedArgs = flattenStrings(scCssArgs as any[])
    return flattenedArgs.map(transform) as FlattenSimpleInterpolation
  }) as XCSSFunction
}

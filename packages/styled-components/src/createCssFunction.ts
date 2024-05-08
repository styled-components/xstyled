/* eslint-disable no-continue, no-loop-func, no-cond-assign */
import { createTransform } from '@xstyled/core'
import { StyleGenerator } from '@xstyled/system'
import { flattenStrings } from '@xstyled/util'
import { css as scCss } from 'styled-components'

export type XCSSFunction = typeof scCss

export const createCssFunction = <TGen extends StyleGenerator>(
  generator: TGen,
): XCSSFunction => {
  const transform = createTransform(generator)

  return <Props extends object>(...args: Parameters<XCSSFunction>) => {
    const scCssArgs = scCss<Props>(...args)
    const flattenedArgs = flattenStrings(scCssArgs as any[])
    return flattenedArgs.map(transform) as ReturnType<typeof scCss<Props>>
  }
}

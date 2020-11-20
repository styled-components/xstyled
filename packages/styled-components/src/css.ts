/* eslint-disable no-continue, no-loop-func, no-cond-assign */
import { css as scCss, FlattenSimpleInterpolation } from 'styled-components'
import { flattenStrings } from '@xstyled/util'
import { transform } from '@xstyled/core'

export function css(
  ...args: Parameters<typeof scCss>
): ReturnType<typeof scCss> {
  const scCssArgs = scCss(...args)
  const flattenedArgs = flattenStrings(scCssArgs as any[])
  return flattenedArgs.map(transform) as FlattenSimpleInterpolation
}

/* eslint-disable no-continue, no-loop-func, no-cond-assign */
import { css as scCss } from 'styled-components'
import { StyleGenerator } from '@xstyled/system'
import { flattenStrings } from '@xstyled/util'
import { createTransform } from '@xstyled/core'

import type {
  Interpolation,
  Styles,
  NoInfer,
  RuleSet,
  BaseObject,
} from 'styled-components/dist/types'

export type XCSSFunction = <Props extends object = BaseObject>(
  styles: Styles<NoInfer<Props>>,
  ...interpolations: Interpolation<NoInfer<Props>>[]
) => RuleSet<NoInfer<Props>>

export const createCssFunction = <TGen extends StyleGenerator>(
  generator: TGen,
): XCSSFunction => {
  const transform = createTransform(generator)
  return ((...args: Parameters<XCSSFunction>) => {
    const scCssArgs = scCss(...args)
    const flattenedArgs = flattenStrings(scCssArgs as any[])
    return flattenedArgs.map(transform) as Interpolation<any>
  }) as XCSSFunction
}

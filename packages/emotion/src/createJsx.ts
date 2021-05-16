/* eslint-disable prefer-rest-params */
import * as React from 'react'
import { jsx as emJsx } from '@emotion/react'
import { StyleGenerator } from '@xstyled/system'
import { createCx } from './createCx'

export type XJsx = typeof emJsx

export const createJsx = <TGen extends StyleGenerator>(
  generator: TGen,
): XJsx => {
  const cx = createCx(generator)
  return function jsx(
    type: React.ElementType,
    props?: object,
    ...children: React.ReactNode[]
  ) {
    if (props == null || !Object.prototype.hasOwnProperty.call(props, 'css')) {
      // @ts-expect-error
      return React.createElement.apply(undefined, arguments, ...children)
    }

    // @ts-expect-error
    return emJsx(type, { ...props, css: cx(props.css) }, ...children)
  } as XJsx
}

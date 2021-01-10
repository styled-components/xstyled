/* eslint-disable prefer-rest-params */
import * as React from 'react'
import { jsx as emJsx } from '@emotion/react'
import { cx } from './cx'

// @ts-expect-error
export const jsx: typeof emJsx = function (
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
}

import * as React from 'react'
import { jsx as emJsx } from '@emotion/react'
import { cx } from './cx'

// @ts-ignore
export const jsx: typeof emJsx = (type, props, ...args) => {
  if (props === null || props.css === null) {
    return React.createElement(type, props, ...args)
  }

  return emJsx(type, { ...props, css: cx(props.css) }, ...args)
}

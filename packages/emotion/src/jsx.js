import React from 'react'
import { jsx as emJsx } from '@emotion/react'
import { cx } from './cx'

export function jsx(type, props, ...args) {
  if (props === null || props.css === null) {
    return React.createElement(type, props, ...args)
  }

  return emJsx(type, { ...props, css: cx(props.css) }, ...args)
}

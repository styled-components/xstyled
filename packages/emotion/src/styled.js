/* eslint-disable no-continue, no-loop-func, no-cond-assign */
import emStyled from '@emotion/styled'
import { Box } from './Box'
import { css } from './css'

function flattenArgs(arg, props) {
  if (typeof arg === 'function') return flattenArgs(arg(props), props)
  if (Array.isArray(arg)) return arg.map((arg) => flattenArgs(arg, props))
  return arg
}

function getCreateStyle(baseCreateStyle) {
  return (strings, ...args) =>
    baseCreateStyle((props) => {
      const flattenedArgs = flattenArgs(args, props)
      const result = css(strings, ...flattenedArgs)(props)
      return result
    })
}

export function styled(component) {
  return getCreateStyle(emStyled(component))
}

styled.box = styled(Box)

Object.keys(emStyled).forEach((key) => {
  styled[key] = styled(key)
  styled[`${key}Box`] = styled(Box.withComponent(key))
})

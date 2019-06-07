/* eslint-disable no-continue, no-loop-func, no-cond-assign */
import emStyled from '@emotion/styled'
import { cascade } from '@xstyled/core'
import { Box } from './Box'
import { css } from './css'

function getCreateStyle(baseCreateStyle) {
  return (...args) =>
    baseCreateStyle(p => {
      const flattenedArgs = args.map(arg => cascade(arg, p))
      const result = css(...flattenedArgs)(p)
      return result
    })
}

export function styled(component) {
  return getCreateStyle(emStyled(component))
}

styled.box = styled(Box)

Object.keys(emStyled).forEach(key => {
  styled[key] = styled(key)
  styled[`${key}Box`] = styled(Box.withComponent(key))
})

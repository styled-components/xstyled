/* eslint-disable no-continue, no-loop-func, no-cond-assign */
import scStyled from 'styled-components'
import { css } from './css'
import { Box } from './Box'

function getCreateStyle(baseCreateStyle) {
  const createStyle = (...args) => baseCreateStyle([css(...args)])
  createStyle.attrs = attrs => {
    const nextCreateStyle = baseCreateStyle.attrs(attrs)
    return getCreateStyle(nextCreateStyle)
  }
  createStyle.withConfig = config => {
    const nextCreateStyle = baseCreateStyle.withConfig(config)
    return getCreateStyle(nextCreateStyle)
  }
  return createStyle
}

export function styled(component) {
  return getCreateStyle(scStyled(component))
}

styled.box = styled(Box)

Object.keys(scStyled).forEach(key => {
  styled[key] = styled(key)
  styled[`${key}Box`] = styled(Box.withComponent(key))
})

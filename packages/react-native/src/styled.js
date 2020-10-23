/* eslint-disable no-continue, no-loop-func, no-cond-assign */
import React from 'react'
import scStyled from 'styled-components/native'
import { createBox } from '@xstyled/core'
import { createSystemComponent } from '@xstyled/system'
import { css } from './css'

function getCreateStyle(baseCreateStyle) {
  const createStyle = (...args) => baseCreateStyle`${css(...args)}`
  createStyle.attrs = (attrs) => {
    const nextCreateStyle = baseCreateStyle.attrs(attrs)
    return getCreateStyle(nextCreateStyle)
  }
  createStyle.withConfig = (config) => {
    const nextCreateStyle = baseCreateStyle.withConfig(config)
    return getCreateStyle(nextCreateStyle)
  }
  return createStyle
}

export function styled(component) {
  return getCreateStyle(scStyled(component))
}

const InnerBox = createSystemComponent(React)

export const Box = styled(InnerBox)(createBox)

styled.box = styled(Box)

Object.keys(scStyled).forEach((key) => {
  styled[key] = styled(key)
  styled[`${key}Box`] = styled(
    Box.withComponent(createSystemComponent(React, key)),
  )
})

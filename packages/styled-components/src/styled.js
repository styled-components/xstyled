/* eslint-disable no-continue, no-loop-func, no-cond-assign */
import React from 'react'
import scStyled from 'styled-components'
import { createBox } from '@xstyled/core'
import { css } from './css'

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

function omit(object, values) {
  const result = {}
  // eslint-disable-next-line no-restricted-syntax
  for (const key in object) {
    if (values.indexOf(key) === -1) {
      result[key] = object[key]
    }
  }
  return result
}

const createBoxComponent = component => ({ as, ...props }) => {
  const omittedProps = omit(props, createBox.meta.props)
  const Component = as || component
  return <Component {...omittedProps} />
}

const Box = styled(createBoxComponent('div'))(createBox)

styled.box = styled(Box)

Object.keys(scStyled).forEach(key => {
  styled[key] = styled(key)
  styled[`${key}Box`] = styled(Box.withComponent(createBoxComponent(key)))
})

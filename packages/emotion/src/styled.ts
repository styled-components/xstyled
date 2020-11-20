/* eslint-disable no-continue, no-loop-func, no-cond-assign */
import * as React from 'react'
import emStyled, { CreateStyledComponent, CreateStyled } from '@emotion/styled'
import { Theme } from '@emotion/react'
import { createBox } from '@xstyled/core'
import { SystemProps } from '@xstyled/system'
import { css } from './css'
import { BoxElements } from './types'

function flattenArgs(arg: any, props: any): any {
  if (typeof arg === 'function') return flattenArgs(arg(props), props)
  if (Array.isArray(arg)) return arg.map((arg) => flattenArgs(arg, props))
  return arg
}

function getCreateStyle(baseCreateStyle: any) {
  return (strings: any, ...args: any) =>
    baseCreateStyle((props: any) => {
      const flattenedArgs = flattenArgs(args, props)
      // @ts-ignore
      const result = css(strings, ...flattenedArgs)(props)
      return result
    })
}

type BoxStyledTags = {
  [Tag in keyof BoxElements]: CreateStyledComponent<
    SystemProps<Theme> & { as?: React.ElementType; theme?: Theme },
    JSX.IntrinsicElements[BoxElements[Tag]]
  >
}

interface CreateXStyled extends CreateStyled, BoxStyledTags {}

// @ts-ignore
export const styled: CreateXStyled = (component: any) => {
  return getCreateStyle(emStyled(component))
}

export const Box = emStyled('div', {
  shouldForwardProp: (prop: string) =>
    prop !== 'as' && !createBox.meta.props.includes(prop),
})<SystemProps<Theme>>(createBox)

styled.box = styled(Box)

Object.keys(emStyled).forEach((key) => {
  // @ts-ignore
  styled[key] = styled(key)
  // @ts-ignore
  styled[`${key}Box`] = styled(
    // @ts-ignore
    Box.withComponent(key),
  )
})

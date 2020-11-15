/* eslint-disable no-continue, no-loop-func, no-cond-assign */
import * as React from 'react'
import emStyled, {
  CreateStyled,
  CreateStyledComponentIntrinsic,
} from '@emotion/styled'
import { createSystemComponent, SystemProps } from '@xstyled/system'
import { Box } from './Box'
import { css } from './css'
import { BoxElements, DefaultTheme } from './types'

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

type ThemedXStyledComponentFactories<T extends object> = {
  [Key in keyof BoxElements]: CreateStyledComponentIntrinsic<
    BoxElements[Key],
    SystemProps<T> & { as?: any },
    T
  >
}

interface CreateXStyled<T extends object = DefaultTheme>
  extends CreateStyled<T>,
    ThemedXStyledComponentFactories<T> {}

// @ts-ignore
export const styled: CreateXStyled = (component) => {
  return getCreateStyle(emStyled(component))
}

styled.box = styled(Box)

// @ts-ignore
Object.keys(emStyled).forEach((key) => {
  // @ts-ignore
  styled[key] = styled(key)
  // @ts-ignore
  styled[`${key}Box`] = styled(
    // @ts-ignore
    Box.withComponent(createSystemComponent<DefaultTheme>(React, key)),
  )
})

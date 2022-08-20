/* eslint-disable no-continue, no-loop-func, no-cond-assign */
import type { ElementType } from 'react'
import type { ReactNativeThemedStyledFunction } from 'styled-components/native'
import { string } from '@xstyled/util'
import { StyleGenerator, Theme } from '@xstyled/system'
import { StyledConfig } from 'styled-components'
import * as RN from 'react-native'
import { scStyled } from './scStyled'
import { createCssFunction, XCSSFunction } from './createCssFunction'
import type { ReactNativeThemedBaseStyledInterface } from './types'

const getCreateStyle = (
  baseCreateStyle: ReactNativeThemedStyledFunction<any, any>,
  css: XCSSFunction,
  generator?: StyleGenerator,
) => {
  const createStyle = (...args: Parameters<typeof css>) =>
    // @ts-ignore
    baseCreateStyle`${css(...args)}${generator}`
  createStyle.attrs = (attrs: Parameters<typeof baseCreateStyle.attrs>[0]) =>
    getCreateStyle(baseCreateStyle.attrs(attrs), css, generator)
  createStyle.withConfig = (config: StyledConfig<any>) =>
    getCreateStyle(baseCreateStyle.withConfig(config), css, generator)

  return createStyle
}

export type XStyled = ReactNativeThemedBaseStyledInterface<Theme>

const createShouldForwardProp = (
  generator: StyleGenerator,
): ((
  prop: string | number | symbol,
  defaultValidatorFn: (prop: string | number | symbol) => boolean,
  elementToBeCreated?: ElementType,
) => boolean) => {
  const propSet = new Set<string>(generator.meta.props)

  return (
    prop: string | number | symbol,
    defaultValidatorFn: (prop: string | number | symbol) => boolean,
    elementToBeCreated?: ElementType,
  ) => {
    if (string(prop) && propSet.has(prop)) {
      return false
    }
    if (typeof elementToBeCreated === 'string') {
      // We must test elementToBeCreated so we can pass through props for <x.div
      // as={Component} />. However elementToBeCreated isn't available until
      // styled-components 5.2.4 or 6, and in the meantime will be undefined.
      // This means that HTML elements could get unwanted props, but ultimately
      // this is a bug in the caller, because why are they passing unwanted
      // props?
      return defaultValidatorFn(prop)
    }
    return true
  }
}

export const createBaseStyled = <TGen extends StyleGenerator>(
  css: XCSSFunction,
  generator?: TGen,
): XStyled => {
  const config = generator
    ? {
        shouldForwardProp: createShouldForwardProp(generator),
      }
    : {}
  return ((component: Parameters<typeof scStyled>[0]) => {
    const baseStyled = scStyled(component)

    return getCreateStyle(
      config ? baseStyled.withConfig(config) : baseStyled,
      css,
      generator,
    )
  }) as XStyled
}

export const createStyled = <TGen extends StyleGenerator>(
  generator: TGen,
): XStyled => {
  const css = createCssFunction(generator)
  // const styled = createBaseStyled(css)
  const xstyled = createBaseStyled(css, generator)

  Object.keys(scStyled).forEach((tag) => {
    Object.defineProperty(xstyled, tag, {
      enumerable: true,
      configurable: false,
      get() {
        // @ts-ignore
        return xstyled(RN[tag])
      },
    })
  })

  return xstyled
}

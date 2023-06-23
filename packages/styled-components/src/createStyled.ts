/* eslint-disable no-continue, no-loop-func, no-cond-assign */
import type { ElementType } from 'react'
import { BoxElements } from '@xstyled/core'
import { string } from '@xstyled/util'
import { StyleGenerator, StyleGeneratorProps, Theme } from '@xstyled/system'
import {
  StyledConfig,
  StyledInterface,
  ThemedBaseStyledInterface,
  ThemedStyledFunction,
} from 'styled-components'
import { XCSSFunction } from './createCssFunction'
import { ReactNativeStyledInterface } from 'styled-components/native'

type BoxStyledTags<TProps extends object> = {
  [Key in keyof BoxElements]: ThemedStyledFunction<
    BoxElements[Key],
    Theme,
    TProps
  >
}

export interface XStyled<TGen extends StyleGenerator>
  extends ThemedBaseStyledInterface<Theme>,
    BoxStyledTags<StyleGeneratorProps<TGen>> {}

export type StyledFunctions<XStyledInterface> = {
  scStyled: StyledInterface | ReactNativeStyledInterface<Theme>
  styled: XStyledInterface
  xstyled: XStyledInterface
}

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

const getCreateStyle = (
  baseCreateStyle: ThemedStyledFunction<any, any>,
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

export const createBaseStyled = <XStyledInterface, TGen extends StyleGenerator>(
  scStyled: StyledInterface | ReactNativeStyledInterface<Theme>,
  css: XCSSFunction,
  generator?: TGen,
): XStyledInterface => {
  const config = generator
    ? {
        shouldForwardProp: createShouldForwardProp(generator),
      }
    : {}
  return ((component: Parameters<typeof scStyled>[0]) => {
    const baseStyled = (scStyled as StyledInterface)(component)
    return getCreateStyle(
      config ? baseStyled.withConfig(config) : baseStyled,
      css,
      generator,
    )
  }) as unknown as XStyledInterface
}

export const createStyled = <
  StyledFunction extends StyledInterface | ReactNativeStyledInterface<Theme>,
  XStyledInterface,
  TGen extends StyleGenerator,
>(
  scStyled: StyledFunction,
  cssFunction: XCSSFunction,
  generator: TGen,
): StyledFunctions<XStyledInterface> => {
  const styled = createBaseStyled<XStyledInterface, TGen>(scStyled, cssFunction)
  const xstyled = createBaseStyled<XStyledInterface, TGen>(
    scStyled,
    cssFunction,
    generator,
  )

  return { scStyled, styled, xstyled }
}

export const defineStyledInterface = <XStyledInterface>({
  scStyled,
  styled,
  xstyled,
}: StyledFunctions<XStyledInterface>): XStyledInterface => {
  //@ts-ignore
  styled.box = xstyled('div')

  Object.keys(scStyled).forEach((tag) => {
    //@ts-ignore
    styled[tag] = styled(tag)

    //@ts-ignore
    styled[`${tag}Box`] = xstyled(tag)
  })

  return styled
}

export const defineXStyledInterface = <XStyledInterface>({
  scStyled,
  styled,
  xstyled,
}: StyledFunctions<XStyledInterface>): XStyledInterface => {
  Object.keys(scStyled).forEach((tag) => {
    //@ts-ignore
    styled[tag] = xstyled(tag)``
  })

  return styled
}

/* eslint-disable no-continue, no-loop-func, no-cond-assign */
import type { ElementType } from 'react'
import { BoxElements } from '@xstyled/core'
import { string } from '@xstyled/util'
import { StyleGenerator, StyleGeneratorProps, Theme } from '@xstyled/system'
import scStyled, {
  StyledConfig,
  ThemedBaseStyledInterface,
  ThemedStyledFunction,
} from 'styled-components'
import { createCssFunction, XCSSFunction } from './createCssFunction'

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
): XStyled<TGen> => {
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
  }) as XStyled<TGen>
}

export const createStyled = <TGen extends StyleGenerator>(
  generator: TGen,
): XStyled<TGen> => {
  const css = createCssFunction(generator)
  const styled = createBaseStyled(css)
  const xstyled = createBaseStyled(css, generator)
  styled.box = xstyled('div')
  Object.keys(scStyled).forEach((key) => {
    // @ts-ignore
    styled[key] = styled(key)
    // @ts-ignore
    styled[`${key}Box`] = xstyled(key)
  })
  return styled
}

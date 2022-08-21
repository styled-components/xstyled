/* eslint-disable no-continue, no-loop-func, no-cond-assign */
import type { ElementType } from 'react'
import type { ReactNativeThemedStyledFunction } from 'styled-components/native'
import type {
  StyleGenerator,
  StyleGeneratorProps,
  Theme,
} from '@xstyled/system'
import type { StyledConfig, ThemedStyledFunction } from 'styled-components'
import type {
  ReactNativeBoxElements,
  ReactNativeElement,
  ReactNativeElements,
} from './types'
import * as ReactNative from 'react-native'
import { string } from '@xstyled/util'
import { scStyled } from './scStyled'
import { createCssFunction, XCSSFunction } from './createCssFunction'

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

type BoxStyledTags<TProps extends object> = {
  [Key in keyof ReactNativeBoxElements]: ThemedStyledFunction<
    ReactNativeElement<ReactNativeBoxElements[Key], Theme>,
    Theme,
    TProps
  >
}

export interface XStyled<TGen extends StyleGenerator>
  extends ReactNativeElements,
    BoxStyledTags<StyleGeneratorProps<TGen>> {}

const createShouldForwardProp = (
  generator: StyleGenerator,
): ((
  prop: string | number | symbol,
  defaultValidatorFn: (prop: string | number | symbol) => boolean,
  elementToBeCreated?: ElementType,
) => boolean) => {
  const propSet = new Set<string>(generator.meta.props)

  return (prop: string | number | symbol) => {
    if (string(prop) && propSet.has(prop)) {
      return false
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

  Object.keys(scStyled).forEach((tag) => {
    Object.defineProperty(styled, tag, {
      enumerable: true,
      configurable: false,
      get() {
        // @ts-ignore
        return styled(ReactNative[tag])
      },
    })

    Object.defineProperty(styled, `${tag}Box`, {
      enumerable: true,
      configurable: false,
      get() {
        // @ts-ignore
        return xstyled(ReactNative[tag])
      },
    })
  })

  return styled
}

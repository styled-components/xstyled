/* eslint-disable no-continue, no-loop-func, no-cond-assign */
import isPropValid from '@emotion/is-prop-valid'
import { BoxElements } from '@xstyled/core'
import { StyleGenerator, StyleGeneratorProps } from '@xstyled/system'
import { string } from '@xstyled/util'
import {
  FastOmit,
  LibraryStyled,
  ShouldForwardProp,
  Styled,
  StyledInstance,
  StyledOptions,
  WebTarget,
} from 'styled-components'
import { XCSSFunction, createCssFunction } from './createCssFunction'
import { scStyled } from './scStyled'

const getCreateStyle = <TGen extends StyleGenerator>(
  baseCreateStyle: StyledInstance<'web', any, any>,
  css: XCSSFunction,
  generator?: TGen,
): ReturnType<LibraryStyled<StyleGeneratorProps<TGen>>> => {
  const createStyle = (...args: Parameters<typeof css>) =>
    baseCreateStyle`${css(...args)}${generator}`
  createStyle.attrs = (attrs: Parameters<typeof baseCreateStyle.attrs>[0]) =>
    getCreateStyle<TGen>(baseCreateStyle.attrs(attrs), css, generator)
  createStyle.withConfig = (config: StyledOptions<'web', any>) =>
    getCreateStyle<TGen>(baseCreateStyle.withConfig(config), css, generator)
  // @ts-expect-error
  return createStyle
}

type BoxStyledTags<TProps extends object> = {
  [Key in keyof BoxElements]: StyledInstance<
    'web',
    BoxElements[Key],
    FastOmit<JSX.IntrinsicElements[BoxElements[Key]], keyof TProps> & TProps
  >
}

export interface XStyled<TGen extends StyleGenerator>
  extends Styled,
    BoxStyledTags<StyleGeneratorProps<TGen>> {}

const createShouldForwardProp = (
  generator: StyleGenerator,
): ShouldForwardProp<'web'> => {
  const propSet = new Set<string>(generator.meta.props)
  return (prop: string, elementToBeCreated?: WebTarget) => {
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
      return isPropValid(prop)
    }
    return true
  }
}

export const createBaseStyled = <TGen extends StyleGenerator>(
  css: XCSSFunction,
  generator?: TGen,
): XStyled<TGen> => {
  const config: StyledOptions<'web', any> = generator
    ? {
        shouldForwardProp: createShouldForwardProp(generator),
      }
    : {}
  return (<Target extends WebTarget>(component: Target) => {
    const baseStyled = scStyled(component)
    return getCreateStyle<TGen>(
      config ? baseStyled.withConfig(config) : baseStyled,
      css,
      generator,
    )
  }) as XStyled<TGen>
}

type JSXElementKeys = BoxElements[keyof BoxElements]

export const createStyled = <TGen extends StyleGenerator>(
  generator: TGen,
): XStyled<TGen> => {
  const css = createCssFunction<TGen>(generator)
  const styled = createBaseStyled<TGen>(css)
  const xstyled = createBaseStyled<TGen>(css, generator)
  styled.box = xstyled('div')
  ;(Object.keys(scStyled) as JSXElementKeys[]).forEach((key) => {
    // @ts-expect-error
    styled[key] = styled(key)
    // @ts-expect-error
    styled[`${key}Box`] = xstyled(key)
  })

  return styled
}

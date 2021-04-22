/* eslint-disable no-continue, no-loop-func, no-cond-assign */
import { BoxElements } from '@xstyled/core'
import { StyleGenerator, system, SystemProps } from '@xstyled/system'
import scStyled, {
  DefaultTheme,
  StyledConfig,
  ThemedBaseStyledInterface,
  ThemedStyledFunction,
} from 'styled-components'

import { createShouldForwardProp } from './createShouldForwardProp'
import { css } from './css'

function getCreateStyle(
  baseCreateStyle: ThemedStyledFunction<any, any>,
  ...generators: StyleGenerator[]
) {
  const createStyle = (...args: Parameters<typeof css>) =>
    // @ts-ignore
    baseCreateStyle`${css(...args, ...generators)}`
  createStyle.attrs = (attrs: Parameters<typeof baseCreateStyle.attrs>[0]) =>
    getCreateStyle(baseCreateStyle.attrs(attrs), ...generators)
  createStyle.withConfig = (config: StyledConfig<any>) =>
    getCreateStyle(baseCreateStyle.withConfig(config), ...generators)
  return createStyle
}

type ThemedXStyledComponentFactories<T extends object> = {
  [Key in keyof BoxElements]: ThemedStyledFunction<
    BoxElements[Key],
    T,
    SystemProps<T>
  >
}

interface ThemeBaseXStyledInterface<T extends object>
  extends ThemedBaseStyledInterface<T>,
    ThemedXStyledComponentFactories<T> {}

type XStyledInterface = ThemeBaseXStyledInterface<DefaultTheme>

export const styled = <XStyledInterface>(
  ((component: Parameters<typeof scStyled>[0]) =>
    getCreateStyle(scStyled(component)))
)

// exported for x.* but not for xstyled API
export const styledWithGenerator = <XStyledInterface>(
  ((component: Parameters<typeof scStyled>[0], generator: StyleGenerator) =>
    getCreateStyle(scStyled(component), generator))
)

const shouldForwardProp = createShouldForwardProp(system)

// @ts-ignore
styled.box = styledWithGenerator('div', system).withConfig({
  shouldForwardProp,
})

Object.keys(scStyled).forEach((key) => {
  // @ts-ignore
  styled[key] = styled(key)
  // @ts-ignore
  styled[`${key}Box`] = styledWithGenerator(key, system).withConfig({
    shouldForwardProp,
  })
})

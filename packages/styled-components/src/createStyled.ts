/* eslint-disable no-continue, no-loop-func, no-cond-assign */
import { BoxElements } from '@xstyled/core'
import { compose, StyleGenerator, SystemProps } from '@xstyled/system'
import scStyled, {
  DefaultTheme,
  ThemedBaseStyledInterface,
  ThemedStyledFunction,
} from 'styled-components'
import { createShouldForwardProp } from './createShouldForwardProp'
import { css } from './css'

function getCreateStyle(
  baseCreateStyle: ThemedStyledFunction<any, any>,
  ...baseGenerators: StyleGenerator[]
) {
  const createStyle = (...args: Parameters<typeof css>) =>
    // @ts-ignore
    baseCreateStyle`${css(...args, ...baseGenerators)}`

  // Override default attrs and withConfig to wrap with getCreateStyle.
  createStyle.attrs = (...args: Parameters<typeof baseCreateStyle.attrs>) =>
    getCreateStyle(baseCreateStyle.attrs(...args), ...baseGenerators)
  createStyle.withConfig = (
    ...args: Parameters<typeof baseCreateStyle.withConfig>
  ) => getCreateStyle(baseCreateStyle.withConfig(...args), ...baseGenerators)

  // Add withGenerator apply a generator after styles. This follows the approach
  // of styled-components to configure a styled component creator. For emotion,
  // we accomplish the same by augmenting the options object, following that
  // lib's API.
  createStyle.withGenerator = (generator: StyleGenerator) =>
    getCreateStyle(baseCreateStyle, ...baseGenerators, generator)

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

export const createStyled = (generator: StyleGenerator) => {
  // @ts-ignore
  const styled = <XStyledInterface>(
    ((component: Parameters<typeof scStyled>[0]) =>
      getCreateStyle(scStyled(component)))
  )

  styled.extend = (...generators: StyleGenerator[]) =>
    createStyled(compose(generator, ...generators))

  const shouldForwardProp = createShouldForwardProp(generator)

  // @ts-ignore
  styled.box = styled('div').withGenerator(generator).withConfig({
    // @ts-ignore
    shouldForwardProp,
  })

  Object.keys(scStyled).forEach((key) => {
    // @ts-ignore
    styled[key] = styled(key)
    // @ts-ignore
    styled[`${key}Box`] = styled[key].withGenerator(generator).withConfig({
      // @ts-ignore
      shouldForwardProp,
    })
  })

  return styled
}

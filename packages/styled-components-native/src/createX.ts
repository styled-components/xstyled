/* eslint-disable no-continue, no-loop-func, no-cond-assign */
import * as ReactNative from 'react-native'
import { StyledComponent } from 'styled-components'
import { DefaultTheme } from 'styled-components/native'
import { StyleGenerator, StyleGeneratorProps } from '@xstyled/system'
import { scStyled } from './scStyled'
import { createBaseStyled } from './createStyled'
import { createCssFunction } from './createCssFunction'
import { ReactNativeElement, ReactNativeElementsKeys } from './types'

export type X<TGen extends StyleGenerator> = {
  [Key in ReactNativeElementsKeys]: StyledComponent<
    ReactNativeElement<Key, DefaultTheme>,
    DefaultTheme,
    StyleGeneratorProps<TGen>,
    'color'
  >
}

export const createX = <TGen extends StyleGenerator>(
  generator: TGen,
): X<TGen> => {
  const xstyled = createBaseStyled(createCssFunction(generator), generator)

  const x = {} as X<TGen>

  Object.keys(scStyled).forEach((tag) => {
    Object.defineProperty(x, tag, {
      enumerable: true,
      configurable: false,
      get() {
        // @ts-ignore
        return xstyled(ReactNative[tag])``
      },
    })
  })

  return x
}

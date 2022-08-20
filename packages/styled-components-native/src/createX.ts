/* eslint-disable no-continue, no-loop-func, no-cond-assign */
import { StyledComponent } from 'styled-components'
import { DefaultTheme } from 'styled-components/native'
import { scStyled } from './scStyled'
import { StyleGenerator, StyleGeneratorProps } from '@xstyled/system'
import { createBaseStyled } from './createStyled'
import { createCssFunction } from './createCssFunction'
import { NativeElement, NativeElementsKeys } from './types'
import * as RN from 'react-native'

export type X<TGen extends StyleGenerator> = {
  [Key in NativeElementsKeys]: StyledComponent<
    NativeElement<Key>,
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
        return xstyled(RN[tag])``
      },
    })
  })

  return x
}

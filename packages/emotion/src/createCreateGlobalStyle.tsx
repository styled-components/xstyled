/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from 'react'
import { Global, useTheme } from '@emotion/react'
import { StyleGenerator } from '@xstyled/system'
import { createCssFunction, XCSSFunction } from './createCssFunction'

export interface XCreateGlobalStyle {
  <P extends object = {}>(...styles: Parameters<XCSSFunction>): React.FC<P>
}

export const createCreateGlobalStyle = <TGen extends StyleGenerator>(
  generator: TGen,
): XCreateGlobalStyle => {
  const css = createCssFunction(generator)
  return <P extends object = {}>(...styles: Parameters<typeof css>) => {
    const GlobalStyle = (props: P) => {
      const theme = useTheme()
      return <Global styles={css(...styles)({ theme, ...props })} />
    }
    GlobalStyle.displayName = 'GlobalStyle'
    return GlobalStyle
  }
}

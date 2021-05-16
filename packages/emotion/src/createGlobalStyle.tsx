/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from 'react'
import { useTheme } from '@emotion/react'
import { Global } from '@emotion/react'
import { css } from './css'

export const createGlobalStyle = <P extends object = {}>(
  ...styles: Parameters<typeof css>
) => {
  const GlobalStyle = (props: P) => {
    const theme = useTheme()
    return <Global styles={css(...styles)({ theme, ...props })} />
  }
  GlobalStyle.displayName = 'GlobalStyle'
  return GlobalStyle
}

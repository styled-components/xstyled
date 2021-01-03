import React from 'react'
import {
  ThemeProvider as SCThemeProvider,
  Preflight,
  createGlobalStyle,
} from '@xstyled/styled-components'
import { theme } from '../theme'

const CustomGlobalStyle = createGlobalStyle`
  html,
  body {
    transition: 300ms ease-in color, 300ms ease-in background-color;
    margin: 0;
    font-family: base;
    background-color: background;
    color: on-background;
    line-height: base;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  :focus {
    outline-color: primary;
  }
`

export const GlobalStyle = () => (
  <>
    <Preflight />
    <CustomGlobalStyle />
  </>
)

export function ThemeProvider({ children }) {
  return <SCThemeProvider theme={theme}>{children}</SCThemeProvider>
}

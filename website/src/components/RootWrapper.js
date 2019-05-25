import './dm.css'
import React from 'react'
import { ThemeProvider } from '@xstyled/styled-components'

const theme = {
  fonts: {
    monospace: 'dm, monospace',
  },
}

export function RootWrapper({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <>{children}</>
    </ThemeProvider>
  )
}

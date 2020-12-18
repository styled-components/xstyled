import React from 'react'
import { ThemeProvider, x, defaultTheme } from '@xstyled/styled-components'

export function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <x.h1>xstyled</x.h1>
    </ThemeProvider>
  )
}

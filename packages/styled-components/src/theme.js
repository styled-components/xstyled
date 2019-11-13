import React from 'react'
import { ThemeContext } from 'styled-components'

export function useTheme() {
  return React.useContext(ThemeContext)
}

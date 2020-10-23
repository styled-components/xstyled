import React from 'react'
import { ThemeContext } from 'styled-components/native'

export function useTheme() {
  return React.useContext(ThemeContext)
}

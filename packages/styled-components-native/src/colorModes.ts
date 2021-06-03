import {
  ThemeContext,
  ThemeProvider,
} from 'styled-components'
import { createColorModeProvider } from '@xstyled/core'


export const ColorModeProvider = createColorModeProvider({
  ThemeContext,
  ThemeProvider,
})

export {
  useColorMode,
  getColorModeInitScriptElement,
  getColorModeInitScriptTag,
} from '@xstyled/core'

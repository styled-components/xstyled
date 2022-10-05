import * as React from 'react'
import { ThemeContext, Global, ThemeProvider } from '@emotion/react'
import { createColorModeProvider, createColorStyles } from '@xstyled/core'

function ColorModeStyle({ targetSelector }: { targetSelector?: string }) {
  const colorModeStyles = React.useCallback(
    (theme: any) => createColorStyles(theme, { targetSelector }),
    [targetSelector],
  )
  return <Global styles={colorModeStyles} />
}

export const ColorModeProvider = createColorModeProvider({
  ThemeContext,
  ThemeProvider,
  ColorModeStyle,
})

export {
  useColorMode,
  getColorModeInitScriptElement,
  getColorModeInitScriptTag,
} from '@xstyled/core'

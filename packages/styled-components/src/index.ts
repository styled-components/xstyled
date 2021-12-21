export {
  isStyledComponent,
  keyframes,
  ServerStyleSheet,
  StyleSheetManager,
  ThemeConsumer,
  ThemeContext,
  ThemeProvider,
  withTheme,
} from 'styled-components'
export * from './colorModes'
export * from './theme'
export * from './breakpoints'
export * from './preflight'
export * from '@xstyled/system'
export * from './create'

// Create and export default system
import { system } from '@xstyled/system'
import { createCss } from './create'

const { css, styled, x, createGlobalStyle } = createCss(system)
export { css, styled, styled as default, x, createGlobalStyle }

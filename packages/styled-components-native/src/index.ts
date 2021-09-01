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
import * as XSystem from '@xstyled/system'
import { defaultTheme }  from './defaultTheme'

export * from './colorModes'
export * from './theme'
export * from './breakpoints'
export * from '@xstyled/system'
export * from './create'

// Create and export default system
import { system } from '@xstyled/system'
import { createCss } from './create'

const { css, styled, x } = createCss(system)
export { css, styled as default, x, XSystem, defaultTheme }

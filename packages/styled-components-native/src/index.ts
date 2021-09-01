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

export * from './theme'
export * from '@xstyled/system'
export * from './create'

// Create and export default system
import { system } from '@xstyled/system'
import { createCss } from './create'

const { css, styled, } = createCss(system)
export { css, styled as default, XSystem, defaultTheme }

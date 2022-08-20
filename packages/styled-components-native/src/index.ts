import { defaultTheme } from './defaultTheme'
export {
  isStyledComponent,
  ThemeConsumer,
  ThemeContext,
  ThemeProvider,
  withTheme,
} from 'styled-components/native'
export * from './theme'
export * from '@xstyled/system'
export * from './create'

// Create and export default system
import { system } from '@xstyled/system'
import { createCss } from './create'

const { css, styled, x } = createCss(system)
export { css, styled, styled as default, x, defaultTheme }

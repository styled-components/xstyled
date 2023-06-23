export {
  isStyledComponent,
  ThemeConsumer,
  ThemeContext,
  ThemeProvider,
  withTheme,
} from 'styled-components/native'
import { defaultTheme } from './defaultTheme'
export * from '@xstyled/system'
export * from './create'
export * from './theme'
import {
  compose,
  color,
  backgrounds,
  borders,
  effects,
  flexboxGrids,
  flexboxes,
  layout,
  sizing,
  space,
  typography,
} from '@xstyled/system'
import { createCss } from './create'

const system = compose(
  color,
  backgrounds,
  borders,
  effects,
  flexboxGrids,
  flexboxes,
  layout,
  sizing,
  space,
  typography,
)

const { css, styled, x } = createCss(system)
export { css, styled, styled as default, x, defaultTheme, system }

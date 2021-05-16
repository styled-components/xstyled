import { createGlobalStyle } from 'styled-components'
import { getPreflightStyles } from '@xstyled/system'

export const Preflight = createGlobalStyle(({ theme }) =>
  getPreflightStyles(theme),
)

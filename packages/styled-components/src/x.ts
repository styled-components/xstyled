import { DefaultTheme } from 'styled-components'
import { SystemProps, system } from '@xstyled/system'
import { createX } from './createX'

export const x = createX<
  SystemProps<Record<string | number, unknown> & DefaultTheme>
>(system)

// Retro-compatibility
export const Box = x.div

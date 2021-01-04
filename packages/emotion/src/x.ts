import { Theme } from '@emotion/react'
import { SystemProps, system } from '@xstyled/system'
import { createX } from './createX'

export const x = createX<SystemProps<Theme>>(system)
export const Box = x.div

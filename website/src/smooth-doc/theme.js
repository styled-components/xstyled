import { theme as baseTheme, primaryColor } from 'smooth-doc/src/theme'
import deepmerge from 'deepmerge'

export const theme = deepmerge(baseTheme, {
  ...baseTheme,
  space: [0, 4, 8, 16, 24, 48, 96, 144, 192, 240],
  colors: { ...primaryColor('pink') },
})

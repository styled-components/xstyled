import { css } from '@xstyled/styled-components'
import { theme as baseTheme, primaryColor } from 'smooth-doc/src/theme'
import deepmerge from 'deepmerge'
import '../components/styles/flow-font.css'

export const theme = deepmerge(baseTheme, {
  ...baseTheme,
  global: css`
    html,
    body {
      transition: 300ms ease-in color, 300ms ease-in background-color;
      margin: 0;
      font-family: base;
      background-color: background;
      color: on-background;
      line-height: base;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    :focus {
      outline-color: primary;
    }
  `,
  space: [0, 4, 8, 16, 24, 48, 96, 144, 192, 240],
  screens: {
    _: 0,
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  },
  colors: { ...primaryColor('pink') },
})

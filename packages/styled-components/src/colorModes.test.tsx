/* eslint-env browser */
import * as React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'
import { th } from '@xstyled/system'
import { x, ThemeProvider, ColorModeProvider } from '.'

afterEach(cleanup)

describe('colorModes', () => {
  it('supports color modes', () => {
    const theme = {
      defaultColorModeName: 'dark',
      colors: {
        black: '#000',
        white: '#fff',
        red: '#ff0000',
        danger: th.color('red'),
        text: th.color('black'),
        modes: {
          dark: {
            red: '#ff4400',
            text: th.color('white'),
          },
        },
      },
    }

    render(
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <x.div color="text">Hello</x.div>
        </ColorModeProvider>
      </ThemeProvider>,
    )
    expect(document.body).toHaveClass('xstyled-color-mode-dark')
  })
})

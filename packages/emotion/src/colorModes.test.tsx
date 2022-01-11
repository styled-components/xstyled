/* eslint-env browser */
import * as React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { cleanup } from '@testing-library/react'
import { x, ColorModeProvider } from '.'
import { renderWithTheme } from './theme.test'

afterEach(cleanup)

describe('colorModes', () => {
  it('supports color modes', () => {
    renderWithTheme(
			<ColorModeProvider>
				<x.div color="text">Hello</x.div>
			</ColorModeProvider>
    )
    expect(document.body).toHaveClass('xstyled-color-mode-dark')
  })
})

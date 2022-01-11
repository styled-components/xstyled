import * as React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { cleanup } from '@testing-library/react'
import { createGlobalStyle } from '.'
import { renderWithTheme } from './theme.test'

afterEach(cleanup)

describe('#createGlobalStyle', () => {
  it('injects global styles', () => {
    const GlobalStyle = createGlobalStyle`
      .margin {
        margin: 2;
      } 
    `
    const { container } = renderWithTheme(
      <>
				<GlobalStyle />
				<div className="margin" />
      </>,
    )
    expect(container.firstChild).toHaveStyle(`
      margin: 8px;
    `)
  })
})

import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'
import { createGlobalStyle } from '.'

afterEach(cleanup)

describe('#createGlobalStyle', () => {
  it('injects global styles', () => {
    const GlobalStyle = createGlobalStyle`
      .margin {
        margin: 2;
      } 
    `
    const { container } = render(
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

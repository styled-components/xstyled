import React from 'react'
import 'jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { createGlobalStyle } from '.'

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

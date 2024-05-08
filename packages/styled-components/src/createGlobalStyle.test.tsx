import * as React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'
import { createGlobalStyle, css, ThemeProvider } from '.'

afterEach(cleanup)

const SpaceTheme = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={{ space: { 1: 4, 2: 8 } }}>{children}</ThemeProvider>
  )
}

describe('#createGlobalStyle', () => {
  it('injects global styles', () => {
    const GlobalStyle = createGlobalStyle`
      .margin {
        margin: 2;
      }
    `
    const { container } = render(
      <>
        <SpaceTheme>
          <GlobalStyle />
          <div className="margin" />
        </SpaceTheme>
      </>,
    )
    expect(container.firstChild).toHaveStyle(`
      margin: 8px;
    `)
  })

  it('supports css tag', () => {
    const style = css`
      .margin {
        margin: 2;
      }
    `
    const GlobalStyle = createGlobalStyle`
      ${style}
    `
    const { container } = render(
      <>
        <SpaceTheme>
          <GlobalStyle />
          <div className="margin" />
        </SpaceTheme>
      </>,
    )
    expect(container.firstChild).toHaveStyle(`
      margin: 8px;
    `)
  })
})

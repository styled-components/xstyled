import * as React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'
import { css, ThemeProvider } from '.'
import styled from 'styled-components'

afterEach(cleanup)

const SpaceTheme = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={{ space: { 1: 4, 2: 8 } }}>{children}</ThemeProvider>
  )
}

describe('#css', () => {
  it('transforms rules', () => {
    const Dummy = styled.div`
      ${css`
        margin: 2;
        padding: 1;
        margin-top: 2px;
      `}
    `
    const { container } = render(
      <SpaceTheme>
        <Dummy />
      </SpaceTheme>,
    )
    expect(container.firstChild).toHaveStyle(`
      margin: 2px 8px 8px 8px;
      padding: 4px;
    `)
  })

  it('transforms multi values', () => {
    const Dummy = styled.div`
      ${css`
        margin: 1 2;
      `}
    `
    const { container } = render(
      <SpaceTheme>
        <Dummy />
      </SpaceTheme>,
    )
    expect(container.firstChild).toHaveStyle('margin: 4px 8px;')
  })
})

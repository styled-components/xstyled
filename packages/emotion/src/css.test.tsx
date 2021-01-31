import * as React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'
import styled from '@emotion/styled'
import { css, ThemeProvider } from '.'

afterEach(cleanup)

describe('#css', () => {
  const SpaceTheme = ({ children }: { children: React.ReactNode }) => {
    return (
      <ThemeProvider theme={{ space: { 1: 4, 2: 8 } }}>
        {children}
      </ThemeProvider>
    )
  }

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

  it('transforms constants', () => {
    const two = 2
    const Dummy = styled.div`
      ${css`
        margin: 1 ${two};
      `}
    `
    const { container } = render(
      <SpaceTheme>
        <Dummy />
      </SpaceTheme>,
    )
    expect(container.firstChild).toHaveStyle('margin: 4px 8px;')
  })

  it('accepts object', () => {
    const Dummy = styled.div`
      ${css({
        margin: '1 2',
      })}
    `
    const { container } = render(
      <SpaceTheme>
        <Dummy />
      </SpaceTheme>,
    )
    expect(container.firstChild).toHaveStyle('margin: 4px 8px;')
  })

  it('accepts function', () => {
    const Dummy = styled.div`
      ${css((p) => ({
        margin: '1 2',
      }))}
    `
    const { container } = render(
      <SpaceTheme>
        <Dummy />
      </SpaceTheme>,
    )
    expect(container.firstChild).toHaveStyle('margin: 4px 8px;')
  })

  it('transforms babel-plugin-emotion output', () => {
    const Dummy = styled.div`
      ${css({
        // @ts-ignore
        name: '1hne1bh-obj',
        styles: 'margin: 1 2;label:x;',
      })}
    `
    const { container } = render(
      <SpaceTheme>
        <Dummy />
      </SpaceTheme>,
    )
    expect(container.firstChild).toHaveStyle('margin: 4px 8px;')
  })
})

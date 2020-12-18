import * as React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'
import { ThemeProvider } from '@emotion/react'
import styled, { css, keyframes, x } from '.'

afterEach(cleanup)

const SpaceTheme = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={{ space: { 1: 4, 2: 8 } }}>{children}</ThemeProvider>
  )
}

describe('#x', () => {
  it('creates system based components', () => {
    const { container } = render(
      <SpaceTheme>
        <x.div m={2} p={1} />
      </SpaceTheme>,
    )
    expect(container.firstChild).toHaveStyle(`
    margin: 8px;
    padding: 4px;
    `)
  })

  it('supports "as" prop', () => {
    const { container } = render(
      <SpaceTheme>
        <x.div as="a" m={2} p={1} />
      </SpaceTheme>,
    )
    expect(container.firstChild!.nodeName).toBe('A')
    expect(container.firstChild).toHaveStyle(`
      margin: 8px;
      padding: 4px;
    `)
  })

  it('supports "as" shorthand', () => {
    const { container } = render(
      <SpaceTheme>
        <x.a m={2} p={1} />
      </SpaceTheme>,
    )
    expect(container.firstChild!.nodeName).toBe('A')
    expect(container.firstChild).toHaveStyle(`
      margin: 8px;
      padding: 4px;
    `)
  })
})

describe('#styled', () => {
  it('transforms rules', () => {
    const Dummy = styled.div`
      margin: 2;
      padding: 1;
      margin-top: 2px;
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

  it('works with conditional css', () => {
    interface DummyProps {
      margin: number
    }
    const Dummy = styled.div<DummyProps>`
      color: red;
      ${p => css`
        margin: ${p.margin};
      `}
    `
    const { container } = render(
      <SpaceTheme>
        <Dummy margin={2} />
      </SpaceTheme>,
    )
    expect(container.firstChild).toHaveStyle(`
      color: red;
      margin: 8px;
    `)
  })

  it('works with keyframes', () => {
    const animation = keyframes`
      from {
        transform: translateX(0%);
      }

      to {
        transform: translateX(100%);
      }
    `
    const Dummy = styled.div`
      ${css`
        animation: ${animation};
      `}
    `

    const { container } = render(<Dummy />)

    expect(container.firstChild).toHaveStyle(`animation: ${animation.name};`)
  })

  it('reads value from the theme', () => {
    const theme = {
      colors: {
        primary: 'pink',
      },
    }
    const Dummy = styled.div`
      color: primary;
    `
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Dummy />
      </ThemeProvider>,
    )
    expect(container.firstChild).toHaveStyle('color: pink;')
  })

  it('handles negative values', () => {
    const theme = {
      space: {
        md: 10,
      },
    }
    const Dummy = styled.div`
      margin: -md;
    `
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Dummy />
      </ThemeProvider>,
    )
    expect(container.firstChild).toHaveStyle('margin: -10px;')
  })

  it('works with css as object', () => {
    const Dummy = styled.div({
      margin: '2',
    })
    const { container } = render(
      <SpaceTheme>
        <Dummy />
      </SpaceTheme>,
    )
    expect(container.firstChild).toHaveStyle('margin: 8px;')
  })

  it('transforms first class interpolations', () => {
    const Dummy = styled.div`
      ${() => [
        'color: red;',
        css`
          margin: 4;
        `,
      ]}
    `
    const { container } = render(<Dummy />)
    expect(container.firstChild).toHaveStyle('color: red; margin: 4px;')
  })
})

describe('#styled.xxx', () => {
  it('supports basic tags', () => {
    const Dummy = styled.div``
    const { container } = render(<Dummy />)
    expect(container.firstChild!.nodeName).toBe('DIV')
  })
})

describe('#styled.xxxBox', () => {
  it('supports box tags', () => {
    const Dummy = styled.box``
    const { container } = render(
      <SpaceTheme>
        <Dummy m={1} />
      </SpaceTheme>,
    )
    expect(container.firstChild!.nodeName).toBe('DIV')
    expect(container.firstChild).toHaveStyle('margin: 4px;')
  })

  it('supports xxxBox tags', () => {
    const Dummy = styled.headerBox``
    const { container } = render(
      <SpaceTheme>
        <Dummy m={1} />
      </SpaceTheme>,
    )
    expect(container.firstChild!.nodeName).toBe('HEADER')
    expect(container.firstChild).toHaveStyle('margin: 4px;')
  })

  it("doesn't forward attributes", () => {
    const Dummy = styled.box``
    const { container } = render(
      <SpaceTheme>
        <Dummy margin={1} />
      </SpaceTheme>,
    )
    expect(container.firstChild!.nodeName).toBe('DIV')
    expect(container.firstChild).toHaveStyle('margin: 4px;')
    expect(container.firstChild).not.toHaveAttribute('margin')
  })

  it('supports as prop', () => {
    const Dummy = styled.divBox``
    // This is not supported by Emotion
    // @ts-expect-error
    const { container } = render(<Dummy as="a" margin={4} href="ok" />)
    expect(container.firstChild!.nodeName).toBe('A')
    expect(container.firstChild).toHaveStyle('margin: 4px;')
    expect(container.firstChild).not.toHaveAttribute('margin')
  })
})

import * as React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'
import { ThemeProvider } from '@emotion/react'
import styled, { css, keyframes, Box } from '.'

afterEach(cleanup)

describe('#Box', () => {
  it('creates system based components', () => {
    const { container } = render(<Box m={8} p={4} />)
    expect(container.firstChild).toHaveStyle(`
    margin: 8px;
    padding: 4px;
    `)
  })

  it('supports "as" prop', () => {
    const { container } = render(<Box as="a" m={8} p={4} />)
    expect(container.firstChild!.nodeName).toBe('A')
    expect(container.firstChild).toHaveStyle(`
      margin: 8px;
      padding: 4px;
    `)
  })

  it('supports "as" shorthand', () => {
    const { container } = render(<Box.a m={8} p={4} />)
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
      margin: 8;
      padding: 4;
      margin-top: 2px;
    `
    const { container } = render(<Dummy />)
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
    const { container } = render(<Dummy margin={8} />)
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
      margin: '8',
    })
    const { container } = render(<Dummy />)
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
    const { container } = render(<Dummy m={4} />)
    expect(container.firstChild!.nodeName).toBe('DIV')
    expect(container.firstChild).toHaveStyle('margin: 4px;')
  })

  it('supports xxxBox tags', () => {
    const Dummy = styled.headerBox``
    const { container } = render(<Dummy m={4} />)
    expect(container.firstChild!.nodeName).toBe('HEADER')
    expect(container.firstChild).toHaveStyle('margin: 4px;')
  })

  it("doesn't forward attributes", () => {
    const Dummy = styled.box``
    const { container } = render(<Dummy margin={4} />)
    expect(container.firstChild!.nodeName).toBe('DIV')
    expect(container.firstChild).toHaveStyle('margin: 4px;')
    expect(container.firstChild).not.toHaveAttribute('margin')
  })

  it('supports as prop', () => {
    const Dummy = styled.divBox``
    // This is not supported by emotion
    // @ts-expect-error
    const { container } = render(<Dummy as="a" margin={4} href="ok" />)
    expect(container.firstChild!.nodeName).toBe('A')
    expect(container.firstChild).toHaveStyle('margin: 4px;')
    expect(container.firstChild).not.toHaveAttribute('margin')
  })
})

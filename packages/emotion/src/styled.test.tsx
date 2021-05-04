import * as React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'
import { ThemeProvider } from '@emotion/react'
import styled, { css, keyframes } from '.'

afterEach(cleanup)

const SpaceTheme = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={{ space: { 1: 4, 2: 8 } }}>{children}</ThemeProvider>
  )
}

describe('#styled', () => {
  it('supports basic tags', () => {
    const Dummy = styled.div``
    const { container } = render(<Dummy />)
    expect(container.firstChild!.nodeName).toBe('DIV')
  })

  it('passes options through', () => {
    // https://emotion.sh/docs/styled#customizing-prop-forwarding
    const Dummy = styled('div', {
      shouldForwardProp: (prop) => prop !== 'foo',
    })``
    // @ts-ignore
    const { container } = render(<Dummy foo="one" bar="two" />)
    expect(container.firstChild).not.toHaveAttribute('foo', 'one')
    expect(container.firstChild).toHaveAttribute('bar', 'two')
  })
})

describe.each([['div'], ['box']])('#styled.%s', (key) => {
  it('transforms rules', () => {
    // @ts-ignore
    const Dummy = styled[key]`
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
    // @ts-ignore
    const Dummy = styled[key]<DummyProps>`
      color: red;
      ${
        // @ts-ignore
        (p) => css`
          margin: ${p.margin};
        `
      }
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
    // @ts-ignore
    const Dummy = styled[key]`
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
    // @ts-ignore
    const Dummy = styled[key]`
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
    // @ts-ignore
    const Dummy = styled[key]`
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
    // @ts-ignore
    const Dummy = styled[key]({
      margin: '2',
    })
    const { container } = render(
      <SpaceTheme>
        <Dummy />
      </SpaceTheme>,
    )
    expect(container.firstChild).toHaveStyle('margin: 8px;')
  })

  it('works with css as object and function prop', () => {
    // @ts-ignore
    const Dummy = styled[key](() => ({
      margin: '2',
    }))
    const { container } = render(
      <SpaceTheme>
        <Dummy />
      </SpaceTheme>,
    )
    expect(container.firstChild).toHaveStyle('margin: 8px;')
  })

  it('transforms first class interpolations', () => {
    // @ts-ignore
    const Dummy = styled[key]`
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

  it('should not pass props that are invalid html attributes', () => {
    // https://emotion.sh/docs/styled#customizing-prop-forwarding
    const consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(jest.fn())
    const Dummy = styled.box({})

    // @ts-ignore
    const { container } = render(<Dummy $dark={false} />)

    expect(container.firstChild).not.toHaveAttribute('$dark', false)
    expect(consoleErrorSpy).not.toHaveBeenCalled()

    consoleErrorSpy.mockRestore()
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

  it('overrides styles with props', () => {
    const Dummy = styled.box`
      margin: 2px;
    `
    const { container } = render(
      <SpaceTheme>
        <Dummy m={1} />
      </SpaceTheme>,
    )
    expect(container.firstChild!.nodeName).toBe('DIV')
    expect(container.firstChild).toHaveStyle('margin: 4px;')
    expect(container.firstChild).not.toHaveStyle('margin: 2px;')
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

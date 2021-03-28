import * as React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'
import { ThemeProvider, keyframes } from 'styled-components'
import styled, { css, system } from '.'

afterEach(cleanup)

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
      foo: number
    }
    const Dummy = styled.div<DummyProps>`
      color: red;
      ${(p) => css`
        margin: ${p.foo};
      `}
    `
    const { container } = render(<Dummy foo={2} />)
    expect(container.firstChild).toHaveStyle(`
      color: red;
      margin: 2px;
    `)
  })

  it('works with render props', () => {
    const Foo = ({
      children,
    }: {
      children: ({ content }: { content: string }) => React.ReactNode
    }) => <div>{children({ content: 'Hello World' })}</div>

    const StyledFoo = styled(Foo)``

    render(<StyledFoo>{({ content }) => <span>{content}</span>}</StyledFoo>)
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
    const { container } = render(<Dummy />)
    expect(container.firstChild).toHaveStyle('margin: 2px;')
  })

  it('works with "withConfig"', () => {
    const Dummy = styled.div.withConfig({})`
      margin: 2;
    `
    const { container } = render(<Dummy />)
    expect(container.firstChild).toHaveStyle('margin: 2px;')
  })

  it('works with "attrs"', () => {
    const Dummy = styled.div.attrs({ 'aria-label': 'label' })`
      margin: 2;
    `
    const { container } = render(<Dummy />)
    expect(container.firstChild).toHaveAttribute('aria-label', 'label')
    expect(container.firstChild).toHaveStyle('margin: 2px;')
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

    expect(container.firstChild).toHaveStyle(
      `animation: ${animation.getName()};`,
    )
  })

  it('works with system.apply', () => {
    const theme = {
      colors: {
        primary: 'pink',
      },
    }
    const Dummy = styled.div`
      ${system.apply({ fontSize: 2, bg: 'primary' })}
    `
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Dummy />
      </ThemeProvider>,
    )
    expect(container.firstChild).toHaveStyle(`
      font-size: 2px;
      background-color: pink;
    `)
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
    const { container } = render(<Dummy m={1} />)
    expect(container.firstChild!.nodeName).toBe('DIV')
    expect(container.firstChild).toHaveStyle('margin: 1px;')
  })

  it('supports xxxBox tags', () => {
    const Dummy = styled.aBox``
    const { container } = render(<Dummy m={1} href="#" />)
    expect(container.firstChild!.nodeName).toBe('A')
    expect(container.firstChild).toHaveStyle('margin: 1px;')
  })

  it("doesn't forward attributes", () => {
    const Dummy = styled.box``
    const { container } = render(<Dummy margin={1} />)
    expect(container.firstChild!.nodeName).toBe('DIV')
    expect(container.firstChild).toHaveStyle('margin: 1px;')
    expect(container.firstChild).not.toHaveAttribute('margin')
  })

  it('supports as prop', () => {
    const Dummy = styled.divBox``
    const { container } = render(<Dummy as="header" margin={1} />)
    expect(container.firstChild!.nodeName).toBe('HEADER')
    expect(container.firstChild).toHaveStyle('margin: 1px;')
    expect(container.firstChild).not.toHaveAttribute('margin')
  })

  it('does not forward props', () => {
    const Dummy = styled.divBox``
    const { container } = render(<Dummy display="flex" data-foo="bar" />)
    expect(container.firstChild!.nodeName).toBe('DIV')
    expect(container.firstChild).toHaveStyle('display: flex;')
    expect(container.firstChild).not.toHaveAttribute('display')
    expect(container.firstChild).toHaveAttribute('data-foo')
  })
})

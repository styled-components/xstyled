import * as React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { x } from '.'

afterEach(cleanup)

const SpaceTheme = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={{ space: { 1: 4, 2: 8 } }}>{children}</ThemeProvider>
  )
}

describe('#x', () => {
  it('creates system based components', () => {
    const { container } = render(<x.div m={2} p={1} />)
    expect(container.firstChild).toHaveStyle(`
      margin: 2px;
      padding: 1px;
    `)
  })

  it('supports "as" prop', () => {
    const { container } = render(<x.div as="a" m={2} p={1} href="#" />)
    expect(container.firstChild!.nodeName).toBe('A')
    expect(container.firstChild).toHaveStyle(`
      margin: 2px;
      padding: 1px;
    `)
  })

  it('supports "as" shorthand', () => {
    const { container } = render(
      <x.a m={2} p={1} href="#">
        Hello
      </x.a>,
    )
    expect(container.firstChild!.nodeName).toBe('A')
    expect(container.firstChild).toHaveStyle(`
      margin: 2px;
      padding: 1px;
    `)
  })

  it('uses theme', () => {
    const { container } = render(
      <SpaceTheme>
        <x.a m={2} p={1}>
          Hello
        </x.a>
      </SpaceTheme>,
    )
    expect(container.firstChild!.nodeName).toBe('A')
    expect(container.firstChild).toHaveStyle(`
      margin: 8px;
      padding: 4px;
    `)
  })

  it('does not forward props', () => {
    const { container } = render(<x.div display="flex" data-foo="bar" />)
    expect(container.firstChild!.nodeName).toBe('DIV')
    expect(container.firstChild).toHaveStyle('display: flex;')
    expect(container.firstChild).not.toHaveAttribute('display')
    expect(container.firstChild).toHaveAttribute('data-foo')
  })

  it('avoids passing system props to HTML element', () => {
    const { container } = render(<x.div fontSize={10} />)
    expect(container.firstChild).not.toHaveAttribute('fontSize')
  })

  it('passes HTML attrs to HTML element', () => {
    const { container } = render(<x.div role="presentation" />)
    expect(container.firstChild).toHaveAttribute('role', 'presentation')
  })

  it('avoids passing system props to "as" component', () => {
    const Component = (props: any) => <div {...props} />
    const { container } = render(<x.div as={Component} fontSize={10} />)
    expect(container.firstChild).not.toHaveAttribute('fontSize')
  })

  it('passes non-system props to "as" component', () => {
    const Component = ({ asdf, ...props }: any) => <div {...props}>{asdf}</div>
    const { container } = render(<x.div as={Component} asdf="boo!" />)
    expect(container.firstChild).toHaveTextContent('boo!')
  })

  it('avoids passing non-HTML attrs to HTML element', () => {
    // @ts-expect-error explicit test
    const { container } = render(<x.div asdf="boo!" />)
    expect(container.firstChild).not.toHaveAttribute('asdf')
  })
})

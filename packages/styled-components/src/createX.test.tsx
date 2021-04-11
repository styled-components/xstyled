import * as React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'
import { Theme } from '@emotion/react'
import {
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
} from '@xstyled/system'
import { createX } from '.'

afterEach(cleanup)

describe('#createX', () => {
  it('creates system based components', () => {
    const x = createX<FontSizeProps<Theme>>(fontSize)
    const { container } = render(<x.div fontSize={10} />)
    expect(container.firstChild).toHaveStyle(`
      font-size: 10px;
    `)
  })

  it('avoids passing system props to HTML element', () => {
    const x = createX<FontSizeProps<Theme>>(fontSize)
    const { container } = render(<x.div fontSize={10} />)
    expect(container.firstChild).not.toHaveAttribute('fontSize')
  })

  it('passes HTML attrs to HTML element', () => {
    const x = createX<FontSizeProps<Theme>>(fontSize)
    const { container } = render(<x.div role="presentation" />)
    expect(container.firstChild).toHaveAttribute('role', 'presentation')
  })

  it('avoids passing system props to "as" component', () => {
    const Component = props => <div {...props} />
    const x = createX<FontSizeProps<Theme>>(fontSize)
    const { container } = render(<x.div as={Component} fontSize={10} />)
    expect(container.firstChild).not.toHaveAttribute('fontSize')
  })

  it('passes non-system props to "as" component', () => {
    const Component = ({asdf, ...props}) => <div {...props}>{asdf}</div>
    const x = createX<FontSizeProps<Theme>>(fontSize)
    const { container } = render(<x.div as={Component} asdf="boo!" />)
    expect(container.firstChild).toHaveTextContent('boo!')
  })

  // skip because this depends on unreleased styled-components 5.2.4 or 6
  it.skip('avoids passing non-HTML attrs to HTML element', () => {
    const x = createX<FontSizeProps<Theme>>(fontSize)
    const { container } = render(<x.div asdf="boo!" />)
    expect(container.firstChild).not.toHaveAttribute('asdf')
  })

})

describe('#x.extend', () => {
  it('is possible to extend it', () => {
    const x = createX<FontSizeProps<Theme>>(fontSize)
    const y = x.extend<FontSizeProps<Theme> & FontWeightProps<Theme>>(
      fontWeight,
    )
    const { container } = render(<y.div fontSize={10} fontWeight="bold" />)
    expect(container.firstChild).toHaveStyle(`
      font-size: 10px;
      font-weight: bold;
    `)
  })
})

import React from 'react'
import 'jest-styled-components'
import { render } from '@testing-library/react'
import styled, { css } from 'styled-components'
import { breakpoints, up, down, between } from '../../src'

describe('#breakpoints', () => {
  it('should work with `css`', () => {
    const Dummy = styled.div`
      ${breakpoints({
        md: css`
          color: red;
        `,
      })}
    `
    const { container } = render(<Dummy />)
    expect(container.firstChild).toHaveStyleRule('color', 'red', {
      media: '(min-width: 768px)',
    })
  })

  it('should work with object style', () => {
    const Dummy = styled.div`
      ${breakpoints({
        md: { color: 'red' },
      })}
    `
    const { container } = render(<Dummy />)
    expect(container.firstChild).toHaveStyleRule('color', 'red', {
      media: '(min-width: 768px)',
    })
  })
})

describe('#up', () => {
  it('should work with `css`', () => {
    const Dummy = styled.div`
      ${up(
        'md',
        css`
          color: red;
        `,
      )}
    `
    const { container } = render(<Dummy />)
    expect(container.firstChild).toHaveStyleRule('color', 'red', {
      media: '(min-width: 768px)',
    })
  })

  it('should work with object style', () => {
    const Dummy = styled.div`
      ${up('md', { color: 'red' })}
    `
    const { container } = render(<Dummy />)
    expect(container.firstChild).toHaveStyleRule('color', 'red', {
      media: '(min-width: 768px)',
    })
  })
})

describe('#down', () => {
  it('should work with `css`', () => {
    const Dummy = styled.div`
      ${down(
        'md',
        css`
          color: red;
        `,
      )}
    `
    const { container } = render(<Dummy />)
    expect(container.firstChild).toHaveStyleRule('color', 'red', {
      media: '(max-width: 767.98px)',
    })
  })

  it('should work with object style', () => {
    const Dummy = styled.div`
      ${down('md', { color: 'red' })}
    `
    const { container } = render(<Dummy />)
    expect(container.firstChild).toHaveStyleRule('color', 'red', {
      media: '(max-width: 767.98px)',
    })
  })
})

describe('#between', () => {
  it('should work with `css`', () => {
    const Dummy = styled.div`
      ${between(
        'sm',
        'md',
        css`
          color: red;
        `,
      )}
    `
    const { container } = render(<Dummy />)
    expect(container.firstChild).toHaveStyleRule('color', 'red', {
      media: '(min-width: 576px) and (max-width: 767.98px)',
    })
  })

  it('should work with object style', () => {
    const Dummy = styled.div`
      ${between('sm', 'md', { color: 'red' })}
    `
    const { container } = render(<Dummy />)
    expect(container.firstChild).toHaveStyleRule('color', 'red', {
      media: '(min-width: 576px) and (max-width: 767.98px)',
    })
  })
})

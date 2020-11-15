import * as React from 'react'
import { render, cleanup } from '@testing-library/react'
import { breakpoints, up, down, between } from '../../src'

afterEach(cleanup)

export function testBreakpoints({ styled, css }) {
  // Currently not testable with toHaveStyle
  xdescribe('#breakpoints', () => {
    it('should work with `css`', () => {
      const Dummy = styled.div`
        ${breakpoints({
          md: css`
            color: red;
          `,
        })}
      `
      const { container } = render(<Dummy />)
      expect(container.firstChild).toHaveStyle('color: red;', {
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
      expect(container.firstChild).toHaveStyle('color: red;', {
        media: '(min-width: 768px)',
      })
    })
  })

  // Currently not testable with toHaveStyle
  xdescribe('#up', () => {
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
      expect(container.firstChild).toHaveStyle('color: red;', {
        media: '(min-width: 768px)',
      })
    })

    it('should work with object style', () => {
      const Dummy = styled.div`
        ${up('md', { color: 'red' })}
      `
      const { container } = render(<Dummy />)
      expect(container.firstChild).toHaveStyle('color: red;', {
        media: '(min-width: 768px)',
      })
    })
  })

  // Currently not testable with toHaveStyle
  xdescribe('#down', () => {
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
      expect(container.firstChild).toHaveStyle('color: red;', {
        media: '(max-width: 767.98px)',
      })
    })

    it('should work with object style', () => {
      const Dummy = styled.div`
        ${down('md', { color: 'red' })}
      `
      const { container } = render(<Dummy />)
      expect(container.firstChild).toHaveStyle('color: red;', {
        media: '(max-width: 767.98px)',
      })
    })
  })

  // Currently not testable with toHaveStyle
  xdescribe('#between', () => {
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
      expect(container.firstChild).toHaveStyle('color: red;', {
        media: '(min-width: 576px) and (max-width: 767.98px)',
      })
    })

    it('should work with object style', () => {
      const Dummy = styled.div`
        ${between('sm', 'md', { color: 'red' })}
      `
      const { container } = render(<Dummy />)
      expect(container.firstChild).toHaveStyle('color: red;', {
        media: '(min-width: 576px) and (max-width: 767.98px)',
      })
    })
  })
}

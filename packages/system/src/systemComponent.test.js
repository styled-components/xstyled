import React from 'react'
import 'jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'
import { createSystemComponent } from './systemComponent'

afterEach(cleanup)

describe('systemComponent', () => {
  describe('#createSystemComponent', () => {
    it('creates a div that omit props', () => {
      const Box = createSystemComponent(React.createElement)
      const { container } = render(<Box display="block" />)
      expect(container.firstChild.tagName).toBe('DIV')
      expect(container.firstChild).not.toHaveAttribute('display')
    })

    it('supports "as" prop', () => {
      const Box = createSystemComponent(React.createElement)
      const { container } = render(<Box as="header" display="block" />)
      expect(container.firstChild.tagName).toBe('HEADER')
      expect(container.firstChild).not.toHaveAttribute('display')
    })
  })
})

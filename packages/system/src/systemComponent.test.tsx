import * as React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'
import { createSystemComponent } from './systemComponent'

afterEach(cleanup)

describe('systemComponent', () => {
  describe('#createSystemComponent', () => {
    it('creates a div that omit props', () => {
      const Box = createSystemComponent(React, 'div')
      const { container } = render(<Box m={2} display="block" />)
      expect(container.firstChild!.nodeName).toBe('DIV')
      expect(container.firstChild).not.toHaveAttribute('display')
    })

    it('supports "as" prop', () => {
      const Box = createSystemComponent(React)
      const { container } = render(<Box as="header" display="block" />)
      expect(container.firstChild!.nodeName).toBe('HEADER')
      expect(container.firstChild).not.toHaveAttribute('display')
    })

    it('forwards ref', () => {
      const Box = createSystemComponent(React)
      const ref = jest.fn()
      const { container } = render(<Box ref={ref} display="block" />)
      expect(container.firstChild).not.toHaveAttribute('display')
      expect(ref).toHaveBeenCalled()
    })
  })
})

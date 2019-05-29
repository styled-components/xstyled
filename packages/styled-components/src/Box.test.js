import React from 'react'
import 'jest-dom/extend-expect'
import { render } from 'react-testing-library'
import { Box } from './Box'

describe('#Box', () => {
  it('creates system based components', () => {
    const { container } = render(<Box m={2} p={1} />)
    expect(container.firstChild).toHaveStyle(`
      margin: 8px;
      padding: 4px;
    `)
  })
})

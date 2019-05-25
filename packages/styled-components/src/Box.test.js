import React from 'react'
import 'jest-styled-components'
import { render } from 'react-testing-library'
import { Box } from './Box'

describe('#Box', () => {
  it('creates system based components', () => {
    const { container } = render(<Box m={2} p={1} />)
    expect(container.firstChild).toHaveStyleRule('margin', '8px')
    expect(container.firstChild).toHaveStyleRule('padding', '4px')
  })
})

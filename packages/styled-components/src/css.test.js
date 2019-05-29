import React from 'react'
import 'jest-dom/extend-expect'
import { render } from 'react-testing-library'
import styled from 'styled-components'
import { css } from './css'

describe('#css', () => {
  it('transforms rules', () => {
    const Dummy = styled.div`
      ${css`
        margin: 2;
        padding: 1;
        margin-top: 2px;
      `}
    `
    const { container } = render(<Dummy />)
    expect(container.firstChild).toHaveStyle(`
      margin: 8px;
      margin-top: 2px;
      padding: 4px;
    `)
  })

  it('transforms multi values', () => {
    const Dummy = styled.div`
      ${css`
        margin: 1 2;
      `}
    `
    const { container } = render(<Dummy />)
    expect(container.firstChild).toHaveStyle('margin: 4px 8px;')
  })
})

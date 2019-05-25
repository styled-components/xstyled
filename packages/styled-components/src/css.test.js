import React from 'react'
import 'jest-styled-components'
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
    expect(container.firstChild).toHaveStyleRule('margin', '8px')
    expect(container.firstChild).toHaveStyleRule('margin-top', '2px')
    expect(container.firstChild).toHaveStyleRule('padding', '4px')
  })

  it('transforms multi values', () => {
    const Dummy = styled.div`
      ${css`
        margin: 1 2;
      `}
    `
    const { container } = render(<Dummy />)
    expect(container.firstChild).toHaveStyleRule('margin', '4px 8px')
  })
})

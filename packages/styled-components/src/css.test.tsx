import * as React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { cleanup } from '@testing-library/react'
import { css } from '.'
import { scStyled as styled } from './scStyled'
import { renderWithTheme } from './theme.test'

afterEach(cleanup)

describe('#css', () => {
  it('transforms rules', () => {
    const Dummy = styled.div`
      ${css`
        margin: 2;
        padding: 1;
        margin-top: 2px;
      `}
    `
    const { container } = renderWithTheme(
        <Dummy />
    )
    expect(container.firstChild).toHaveStyle(`
      margin: 2px 8px 8px 8px;
      padding: 4px;
    `)
  })

  it('transforms multi values', () => {
    const Dummy = styled.div`
      ${css`
        margin: 1 2;
      `}
    `
    const { container } = renderWithTheme(
        <Dummy />
    )
    expect(container.firstChild).toHaveStyle('margin: 4px 8px;')
  })
})

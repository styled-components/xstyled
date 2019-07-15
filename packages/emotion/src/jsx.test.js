/** @jsx jsx */
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'
import { jsx, css } from '.'

afterEach(cleanup)

describe('#jsx', () => {
  it('does nothing without css prop', () => {
    const { container } = render(<div />)
    expect(container.firstChild.tagName).toBe('DIV')
  })

  it('handles css string', () => {
    const { container } = render(
      <div
        css={css`
          margin: 2;
          padding: 1;
          margin-top: 2px;
        `}
      />,
    )
    expect(container.firstChild).toHaveStyle(`
      margin: 8px;
      margin-top: 2px;
      padding: 4px;
    `)
  })

  it('handles array of css string', () => {
    const { container } = render(
      <div
        css={[
          css`
            margin: 2;
          `,
          css`
            padding: 1;
          `,
        ]}
      />,
    )
    expect(container.firstChild).toHaveStyle(`
      margin: 8px;
      padding: 4px;
    `)
  })

  it('handles css objects', () => {
    const { container } = render(<div css={{ margin: '2' }} />)
    expect(container.firstChild).toHaveStyle(`
      margin: 8px;
    `)
  })

  it('handles array of css objects', () => {
    const { container } = render(
      <div css={[{ margin: '2' }, { padding: '1' }]} />,
    )
    expect(container.firstChild).toHaveStyle(`
      margin: 8px;
      padding: 4px;
    `)
  })
})

/** @jsx jsx */
import 'jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { jsx, css } from '.'

describe('#jsx', () => {
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

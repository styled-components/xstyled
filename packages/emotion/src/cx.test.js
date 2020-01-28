/** @jsx jsx */
import { jsx } from '@emotion/react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'
import { css, cx } from '.'

afterEach(cleanup)

describe('#cx', () => {
  it('throws with string value', () => {
    expect(() => render(<div css={cx(`margin: 2px`)} />)).toThrow(
      'Strings are not allowed as css prop values',
    )
  })

  it('handles css values', () => {
    const { container } = render(
      <div
        css={cx(
          css`
            margin: 2;
            padding: 1;
            margin-top: 2px;
          `,
        )}
      />,
    )
    expect(container.firstChild).toHaveStyle(`
      margin: 2px 8px 8px 8px;
      padding: 4px;
    `)
  })

  it('handles multiple css values', () => {
    const { container } = render(
      <div
        css={cx([
          css`
            margin: 2;
          `,
          css`
            padding: 1;
          `,
        ])}
      />,
    )
    expect(container.firstChild).toHaveStyle(`
      margin: 8px;
      padding: 4px;
    `)
  })
})

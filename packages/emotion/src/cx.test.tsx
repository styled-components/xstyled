/** @jsx jsx */
import { jsx } from '@emotion/react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'
import { css, cx, ThemeProvider } from '.'

afterEach(cleanup)

const SpaceTheme = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={{ space: { 1: 4, 2: 8 } }}>{children}</ThemeProvider>
  )
}

describe('#cx', () => {
  it('throws with string value', () => {
    expect(() => render(<div css={cx(`margin: 2px`)} />)).toThrow(
      'Strings are not allowed as css prop values',
    )
  })

  it('handles css values', () => {
    const { container } = render(
      <SpaceTheme>
        <div
          css={cx(
            css`
              margin: 2;
              padding: 1;
              margin-top: 2px;
            `,
          )}
        />
      </SpaceTheme>,
    )
    expect(container.firstChild).toHaveStyle(`
      margin: 2px 8px 8px 8px;
      padding: 4px;
    `)
  })

  it('handles multiple css values', () => {
    const { container } = render(
      <SpaceTheme>
        <div
          css={cx([
            css`
              margin: 2;
            `,
            css`
              padding: 1;
            `,
          ])}
        />
      </SpaceTheme>,
    )
    expect(container.firstChild).toHaveStyle(`
      margin: 8px;
      padding: 4px;
    `)
  })
})

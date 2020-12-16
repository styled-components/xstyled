/** @jsx jsx */
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'
import { ThemeProvider } from '@emotion/react'
import { jsx, css } from '.'

afterEach(cleanup)

describe('#jsx', () => {
  it('does nothing without css prop', () => {
    const { container } = render(<div />)
    expect(container.firstChild!.nodeName).toBe('DIV')
  })

  it('handles css string', () => {
    const { container } = render(
      <ThemeProvider theme={{ space: { 1: 4, 2: 8 } }}>
        <div
          css={css`
            margin: 2;
            padding: 1;
            margin-top: 2px;
          `}
        />
      </ThemeProvider>,
    )
    expect(container.firstChild).toHaveStyle(`
      margin: 2px 8px 8px 8px;
      padding: 4px;
    `)
  })

  it('handles array of css string', () => {
    const { container } = render(
      <ThemeProvider theme={{ space: { 1: 4, 2: 8 } }}>
        <div
          css={[
            css`
              margin: 2;
            `,
            css`
              padding: 1;
            `,
          ]}
        />
      </ThemeProvider>,
    )
    expect(container.firstChild).toHaveStyle(`
      margin: 8px;
      padding: 4px;
    `)
  })

  it('handles css objects', () => {
    const { container } = render(
      <ThemeProvider theme={{ space: { 1: 4, 2: 8 } }}>
        <div css={{ margin: '2' }} />
      </ThemeProvider>,
    )
    expect(container.firstChild).toHaveStyle(`
      margin: 8px;
    `)
  })

  it('handles array of css objects', () => {
    const { container } = render(
      <ThemeProvider theme={{ space: { 1: 4, 2: 8 } }}>
        <div css={[{ margin: '2' }, { padding: '1' }]} />
      </ThemeProvider>,
    )
    expect(container.firstChild).toHaveStyle(`
      margin: 8px;
      padding: 4px;
    `)
  })
})

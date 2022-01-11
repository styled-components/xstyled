/** @jsx jsx */
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'
import { jsx, css } from '.'
import { renderWithTheme } from './theme.test'

afterEach(cleanup)

describe('#jsx', () => {
  it('does nothing without css prop', () => {
    const { container } = render(<div />)
    expect(container.firstChild?.nodeName).toBe('DIV')
  })

  it('handles css string', () => {
    const { container } = renderWithTheme(
			<div
				// @ts-expect-error
				css={css`
					margin: 2;
					padding: 1;
					margin-top: 2px;
				`}
			/>
    )
    expect(container.firstChild).toHaveStyle(`
      margin: 2px 8px 8px 8px;
      padding: 4px;
    `)
  })

  it('handles array of css string', () => {
    const { container } = renderWithTheme(
			<div
				// @ts-expect-error
				css={[
					css`
						margin: 2;
					`,
					css`
						padding: 1;
					`,
				]}
			/>
    )
    expect(container.firstChild).toHaveStyle(`
      margin: 8px;
      padding: 4px;
    `)
  })

  it('handles css objects', () => {
    const { container } = renderWithTheme(
			<div
				// @ts-expect-error
				css={{ margin: '2' }}
			/>
    )
    expect(container.firstChild).toHaveStyle(`
      margin: 8px;
    `)
  })

  it('handles array of css objects', () => {
    const { container } = renderWithTheme(
			<div
				// @ts-expect-error
				css={[{ margin: '2' }, { padding: '1' }]}
			/>
    )
    expect(container.firstChild).toHaveStyle(`
      margin: 8px;
      padding: 4px;
    `)
  })

  it('does not render children', () => {
    const { container } = renderWithTheme(
			<div
				// @ts-expect-error
				css={[{ margin: '2' }, { padding: '1' }]}
			/>
    )

    expect(container).toHaveTextContent('')
  })

  it('renders a single child', () => {
    const { container } = renderWithTheme(
			<div
				// @ts-expect-error
				css={[{ margin: '2' }, { padding: '1' }]}
			>
				<p id="test-p">A testing paragraph</p>
			</div>
    )

    expect(container.querySelector('#test-p')).toHaveTextContent(
      'A testing paragraph',
    )
  })

  it('renders multiple children', () => {
    const { container } = renderWithTheme(
			<div
				// @ts-expect-error
				css={[{ margin: '2' }, { padding: '1' }]}
			>
				<p className="test-p">First testing paragraph</p>

				<p className="test-p">Second testing paragraph</p>
			</div>
    )

    expect(container.querySelectorAll('.test-p')).toHaveLength(2)
  })
})

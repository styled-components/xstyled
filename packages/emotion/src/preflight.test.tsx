import * as React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'
import { Preflight } from '.'

afterEach(cleanup)

describe('#Preflight', () => {
  it('renders as a null component', () => {
    const { container } = render(<Preflight />)

    expect(container.firstChild).toBeNull()
  })

  it('outputs all styles', () => {
    render(<Preflight />)

    expect(document.querySelectorAll('style').length).toBeGreaterThan(0)
  })
})

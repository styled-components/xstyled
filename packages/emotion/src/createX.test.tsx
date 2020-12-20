import * as React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'
import { Theme } from '@emotion/react'
import {
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
} from '@xstyled/system'
import { createX } from '.'

afterEach(cleanup)

describe('#createX', () => {
  it('creates system based components', () => {
    const x = createX<FontSizeProps<Theme>>(fontSize)
    const { container } = render(<x.div fontSize={10} />)
    expect(container.firstChild).toHaveStyle(`
      font-size: 10px;  
    `)
  })
})

describe('#x.extend', () => {
  it('is possible to extend it', () => {
    const x = createX<FontSizeProps<Theme>>(fontSize)
    const y = x.extend<FontWeightProps<Theme>>(fontWeight)
    const { container } = render(<y.div fontSize={10} fontWeight="bold" />)
    expect(container.firstChild).toHaveStyle(`
      font-size: 10px;  
      font-weight: bold;  
    `)
  })
})

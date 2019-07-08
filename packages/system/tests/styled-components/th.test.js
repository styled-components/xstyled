import React from 'react'
import 'jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'
import styled from 'styled-components'
import { th } from '../../src'

afterEach(cleanup)

describe('#th', () => {
  describe.each([
    [
      'color',
      {
        cssProp: 'color',
        expectations: [['#000', '#000'], ['primary', 'red']],
        theme: { colors: { primary: 'red' } },
      },
    ],
    [
      'px',
      {
        cssProp: 'margin',
        expectations: [
          [0, 0],
          [1, '1px'],
          [-1, '-1px'],
          ['16rpx', '1rem'],
          ['-16rpx', '-1rem'],
        ],
      },
    ],
    [
      'percent',
      {
        cssProp: 'margin',
        expectations: [
          [0, 0],
          [0.1, '10%'],
          [1, '100%'],
          [2, '2px'],
          [-0.1, '-10%'],
          [-2, '-2px'],
          ['16rpx', '1rem'],
          ['-16rpx', '-1rem'],
        ],
      },
    ],
    [
      'radius',
      {
        cssProp: 'border-radius',
        expectations: [
          [0, 0],
          [1, '1px'],
          [-1, '-1px'],
          ['16rpx', '1rem'],
          ['-16rpx', '-1rem'],
          ['sm', '4px'],
        ],
        theme: { radii: { sm: 4 } },
      },
    ],
    [
      'border',
      {
        cssProp: 'border',
        expectations: [
          [0, 0],
          [1, '1px solid'],
          ['2px dashed', '2px dashed'],
          ['red', '1px solid red'],
        ],
        theme: { borders: { red: '1px solid red' } },
      },
    ],
    [
      'borderWidth',
      {
        cssProp: 'borderWidth',
        expectations: [
          [0, 0],
          [1, '1px'],
          ['sm', '2px'],
          ['16rpx', '1rem'],
          ['-16rpx', '-1rem'],
        ],
        theme: { borderWidths: { sm: 2 } },
      },
    ],
    [
      'borderStyle',
      {
        cssProp: 'border-style',
        expectations: [['solid', 'solid'], ['s', 'solid']],
        theme: { borderStyles: { s: 'solid' } },
      },
    ],
    [
      'shadow',
      {
        cssProp: 'box-shadow',
        expectations: [
          ['none', 'none'],
          ['2px 2px', '2px 2px'],
          ['sm', '5px 5px'],
        ],
        theme: { shadows: { sm: '5px 5px' } },
      },
    ],
    [
      'size',
      {
        cssProp: 'width',
        expectations: [
          [0, '0'],
          [5, '5px'],
          [1, '10px'],
          [0.2, '20%'],
          ['200%', '200%'],
          ['16rpx', '1rem'],
          ['-16rpx', '-1rem'],
        ],
        theme: { sizes: [0, 10, 20] },
      },
    ],
    [
      'zIndex',
      {
        cssProp: 'z-index',
        expectations: [[0, '0'], [5, '5'], ['modal', '200']],
        theme: { zIndices: { modal: '200' } },
      },
    ],
    [
      'space',
      {
        cssProp: 'margin',
        expectations: [
          [0, 0],
          [0.1, '0.1px'],
          [1, '4px'],
          [2, '8px'],
          [-0.1, '-0.1px'],
          [-2, '-8px'],
          ['16rpx', '1rem'],
          ['-16rpx', '-1rem'],
        ],
      },
    ],
    [
      'font',
      {
        cssProp: 'font',
        expectations: [['arial', 'arial'], ['serif', 'times']],
        theme: { fonts: { serif: 'times' } },
      },
    ],
    [
      'fontSize',
      {
        cssProp: 'font-size',
        expectations: [
          [0, 0],
          [1, '12px'],
          [40, '40px'],
          ['16rpx', '1rem'],
          ['-16rpx', '-1rem'],
        ],
      },
    ],
    [
      'lineHeight',
      {
        cssProp: 'line-height',
        expectations: [
          [0, 0],
          [1, 1],
          ['40px', '40px'],
          ['sm', '20px'],
          ['16rpx', '1rem'],
          ['-16rpx', '-1rem'],
        ],
        theme: { lineHeights: { sm: '20px' } },
      },
    ],
    [
      'fontWeight',
      {
        cssProp: 'font-weight',
        expectations: [['bold', 'bold'], [200, '200'], ['medium', '500']],
        theme: { fontWeights: { medium: 500 } },
      },
    ],
    [
      'letterSpacing',
      {
        cssProp: 'letter-spacing',
        expectations: [
          [0, '0'],
          [3, '3px'],
          ['sm', '2px'],
          ['16rpx', '1rem'],
          ['-16rpx', '-1rem'],
        ],
        theme: { letterSpacings: { sm: 2 } },
      },
    ],
    [
      'transition',
      {
        cssProp: 'transition',
        expectations: [['all 300ms', 'all 300ms'], ['color', 'color 500ms']],
        theme: { transitions: { color: 'color 500ms' } },
      },
    ],
  ])('#%s', (name, config) => {
    const util = th[name]

    it.each(config.expectations)(
      'accepts "%s" and returns "%s"',
      (value, expected) => {
        const Dummy = styled.div`
          ${config.cssProp}: ${util(value)};
        `
        const { container } = render(<Dummy theme={config.theme} />)
        expect(container.firstChild).toHaveStyle(
          `${config.cssProp}: ${expected};`,
        )
      },
    )
  })
})

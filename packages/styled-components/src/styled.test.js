import React from 'react'
import 'jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import styled, { css } from '.'

describe('#styled', () => {
  it('transforms rules', () => {
    const Dummy = styled.div`
      margin: 2;
      padding: 1;
      margin-top: 2px;
    `
    const { container } = render(<Dummy />)
    expect(container.firstChild).toHaveStyle(`
      margin: 8px;
      padding: 4px;
      margin-top: 2px;
    `)
  })

  it('works with conditional css', () => {
    const Dummy = styled.div`
      color: red;
      ${p => css`
        margin: ${p.margin};
      `}
    `
    const { container } = render(<Dummy margin={2} />)
    expect(container.firstChild).toHaveStyle(`
      color: red;
      margin: 8px;
    `)
  })

  it('reads value from the theme', () => {
    const theme = {
      colors: {
        primary: 'pink',
      },
    }
    const Dummy = styled.div`
      color: primary;
    `
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Dummy />
      </ThemeProvider>,
    )
    expect(container.firstChild).toHaveStyle('color: pink;')
  })

  it('works with css as object', () => {
    const Dummy = styled.div({
      margin: '2',
    })
    const { container } = render(<Dummy />)
    expect(container.firstChild).toHaveStyle('margin: 8px;')
  })

  it('works with "withConfig"', () => {
    const Dummy = styled.div.withConfig({})`
      margin: 2;
    `
    const { container } = render(<Dummy />)
    expect(container.firstChild).toHaveStyle('margin: 8px;')
  })

  it('works with "attrs"', () => {
    const Dummy = styled.div.attrs({ 'aria-label': 'label' })`
      margin: 2;
    `
    const { container } = render(<Dummy />)
    expect(container.firstChild).toHaveAttribute('aria-label', 'label')
    expect(container.firstChild).toHaveStyle('margin: 8px;')
  })
})

describe('#styled.xxx', () => {
  it('supports basic tags', () => {
    const Dummy = styled.div``
    const { container } = render(<Dummy />)
    expect(container.firstChild.tagName).toBe('DIV')
  })

  it('supports box tags', () => {
    const Dummy = styled.box``
    const { container } = render(<Dummy m={1} />)
    expect(container.firstChild.tagName).toBe('DIV')
    expect(container.firstChild).toHaveStyle('margin: 4px;')
  })

  it('supports Xbox tags', () => {
    const Dummy = styled.headerBox``
    const { container } = render(<Dummy m={1} />)
    expect(container.firstChild.tagName).toBe('HEADER')
    expect(container.firstChild).toHaveStyle('margin: 4px;')
  })
})

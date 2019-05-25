import React from 'react'
import 'jest-styled-components'
import { render } from 'react-testing-library'
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
    expect(container.firstChild).toHaveStyleRule('margin', '8px')
    expect(container.firstChild).toHaveStyleRule('margin-top', '2px')
    expect(container.firstChild).toHaveStyleRule('padding', '4px')
  })

  it('works with conditional css', () => {
    const Dummy = styled.div`
      color: red;
      ${p => css`
        margin: ${p.margin};
      `}
    `
    const { container } = render(<Dummy margin={2} />)
    expect(container.firstChild).toHaveStyleRule('color', 'red')
    expect(container.firstChild).toHaveStyleRule('margin', '8px')
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
    expect(container.firstChild).toHaveStyleRule('color', 'pink')
  })

  it('works with css as object', () => {
    const Dummy = styled.div({
      margin: '2',
    })
    const { container } = render(<Dummy />)
    expect(container.firstChild).toHaveStyleRule('margin', '8px')
  })

  it('works with "withConfig"', () => {
    const Dummy = styled.div.withConfig({})`
      margin: 2;
      padding: 1;
      margin-top: 2px;
    `
    const { container } = render(<Dummy />)
    expect(container.firstChild).toHaveStyleRule('margin', '8px')
    expect(container.firstChild).toHaveStyleRule('margin-top', '2px')
    expect(container.firstChild).toHaveStyleRule('padding', '4px')
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
    expect(container.firstChild).toHaveStyleRule('margin', '4px')
  })

  it('supports Xbox tags', () => {
    const Dummy = styled.headerBox``
    const { container } = render(<Dummy m={1} />)
    expect(container.firstChild.tagName).toBe('HEADER')
    expect(container.firstChild).toHaveStyleRule('margin', '4px')
  })
})

import * as React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from '@emotion/react'
import styled, { css, keyframes } from '.'

// import original module declarations
import '@xstyled/system'
import '@emotion/react'
import {
	defaultTheme as xstyledDefaultTheme, 
	DefaultTheme as XStyledDefaultTheme 
} from '@xstyled/system'

import { 
	ITheme, 
} from '@xstyled/emotion'

interface AppTheme extends ITheme, XStyledDefaultTheme {
  /* Customize your theme */
	colors: XStyledDefaultTheme['colors'] & {
		primary: string
	}
	space: XStyledDefaultTheme['space'] & {
		md: number
	}
}

// and extend them!
declare module '@xstyled/system' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends AppTheme {}
}

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends AppTheme {
    /* Customize your theme */
  }
}

const defaultTheme: XStyledDefaultTheme = xstyledDefaultTheme

const theme: AppTheme = {
	...defaultTheme,
	colors: {
		...defaultTheme?.colors,
		primary: 'pink',
	},
	space: {
		...defaultTheme?.space,
		md: 10,
		1: '4px', 
		2: '8px'
	}
}


afterEach(cleanup)

const renderWithTheme = (ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>) => render(
	<ThemeProvider theme={theme}>{ui}</ThemeProvider>,
	options
)

describe('#styled', () => {
  it('supports basic tags', () => {
    const Dummy = styled.div``
    const { container } = render(<Dummy />)
    expect(container.firstChild?.nodeName).toBe('DIV')
  })

  it('passes options through', () => {
    // https://emotion.sh/docs/styled#customizing-prop-forwarding
    const Dummy = styled('div', {
      shouldForwardProp: (prop) => prop !== 'foo',
    })``
    // @ts-ignore
    const { container } = render(<Dummy foo="one" bar="two" />)
    expect(container.firstChild).not.toHaveAttribute('foo', 'one')
    expect(container.firstChild).toHaveAttribute('bar', 'two')
  })
})

describe.each([['div'], ['box']])('#styled.%s', (key) => {
  it('transforms rules', () => {
    // @ts-ignore
    const Dummy = styled[key]`
      margin: 2;
      padding: 1;
      margin-top: 2px;
    `
    const { container } = renderWithTheme(<Dummy />)
    expect(container.firstChild).toHaveStyle(`
      margin: 2px 8px 8px 8px;
      padding: 4px;
    `)
  })

  it('works with conditional css', () => {
    interface DummyProps {
      margin: number
    }
    // @ts-ignore
    const Dummy = styled[key]<DummyProps>`
      color: red;
      ${
        // @ts-ignore
        (p) => css`
          margin: ${p.margin};
        `
      }
    `
    const { container } = renderWithTheme(<Dummy margin={2} />)
    expect(container.firstChild).toHaveStyle(`
      color: red;
      margin: 8px;
    `)
  })

  it('works with keyframes', () => {
    const animation = keyframes`
      from {
        transform: translateX(0%);
      }

      to {
        transform: translateX(100%);
      }
    `
    // @ts-ignore
    const Dummy = styled[key]`
      ${css`
        animation: ${animation};
      `}
    `

    const { container } = render(<Dummy />)

    expect(container.firstChild).toHaveStyle(`animation: ${animation.name};`)
  })

  it('reads value from the theme', () => {
    // @ts-ignore
    const Dummy = styled[key]`
      color: primary;
    `
    const { container } = renderWithTheme(<Dummy />)
    expect(container.firstChild).toHaveStyle('color: pink;')
  })

  it('handles negative values', () => {
    // @ts-ignore
    const Dummy = styled[key]`
      margin: -md;
    `
    const { container } = renderWithTheme(<Dummy />)
    expect(container.firstChild).toHaveStyle('margin: -10px;')
  })

  it('works with css as object', () => {
    // @ts-ignore
    const Dummy = styled[key]({
      margin: '2',
    })
    const { container } = renderWithTheme(<Dummy />)
    expect(container.firstChild).toHaveStyle('margin: 8px;')
  })

  it('works with css as object and function prop', () => {
    // @ts-ignore
    const Dummy = styled[key](() => ({
      margin: '2',
    }))
    const { container } = renderWithTheme(<Dummy />)
    expect(container.firstChild).toHaveStyle('margin: 8px;')
  })

  it('transforms first class interpolations', () => {
    // @ts-ignore
    const Dummy = styled[key]`
      ${() => [
        'color: red;',
        css`
          margin: 4;
        `,
      ]}
    `
    const { container } = render(<Dummy />)
    expect(container.firstChild).toHaveStyle('color: red; margin: 4px;')
  })

  it('should not pass props that are invalid html attributes', () => {
    // https://emotion.sh/docs/styled#customizing-prop-forwarding
    const consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(jest.fn())
    const Dummy = styled.box({})

    // @ts-ignore
    const { container } = render(<Dummy $dark={false} />)

    expect(container.firstChild).not.toHaveAttribute('$dark', false)
    expect(consoleErrorSpy).not.toHaveBeenCalled()

    consoleErrorSpy.mockRestore()
  })
})

describe('#styled.xxxBox', () => {
  it('supports box tags', () => {
    const Dummy = styled.box``
    const { container } = renderWithTheme(<Dummy m={1} />)
    expect(container.firstChild?.nodeName).toBe('DIV')
    expect(container.firstChild).toHaveStyle('margin: 4px;')
  })

  it('supports xxxBox tags', () => {
    const Dummy = styled.headerBox``
    const { container } = renderWithTheme(<Dummy m={1} />)
    expect(container.firstChild?.nodeName).toBe('HEADER')
    expect(container.firstChild).toHaveStyle('margin: 4px;')
  })

  it('overrides styles with props', () => {
    const Dummy = styled.box`
      margin: 2px;
    `
    const { container } = renderWithTheme(<Dummy m={1} />)
    expect(container.firstChild?.nodeName).toBe('DIV')
    expect(container.firstChild).toHaveStyle('margin: 4px;')
    expect(container.firstChild).not.toHaveStyle('margin: 2px;')
  })

  it("doesn't forward attributes", () => {
    const Dummy = styled.box``
    const { container } = renderWithTheme(<Dummy m={1} />)
    expect(container.firstChild?.nodeName).toBe('DIV')
    expect(container.firstChild).toHaveStyle('margin: 4px;')
    expect(container.firstChild).not.toHaveAttribute('margin')
  })

  it('supports as prop', () => {
    const Dummy = styled.divBox``
    // This is not supported by Emotion
    // @ts-expect-error
    const { container } = render(<Dummy as="a" margin={4} href="ok" />)
    expect(container.firstChild?.nodeName).toBe('A')
    expect(container.firstChild).toHaveStyle('margin: 4px;')
    expect(container.firstChild).not.toHaveAttribute('margin')
  })
})

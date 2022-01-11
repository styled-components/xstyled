import * as React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup, RenderOptions, RenderResult } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { useTheme, useFontSize } from '.'

// import original module declarations
import 'styled-components'
import '@xstyled/system'
import {
	defaultTheme as xstyledDefaultTheme, 
	DefaultTheme as XStyledDefaultTheme,
	th
} from '@xstyled/system'
import {
  ITheme,
} from '@xstyled/styled-components'

interface AppTheme extends ITheme, XStyledDefaultTheme {
	fontSizes: XStyledDefaultTheme['fontSizes'] & {
		md: string
	}
	colors: XStyledDefaultTheme['colors'] & {
		primary: string
		danger: any
		text: any
		red: string
		modes: { 
			[key: string]: Partial<AppTheme['colors']>
		}
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
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends AppTheme {}
}

const defaultTheme: XStyledDefaultTheme = xstyledDefaultTheme

const theme: AppTheme = {
	...defaultTheme,

	defaultColorModeName: 'dark',
	colors: {
		...defaultTheme.colors,
		primary: 'pink',
		black: '#000',
		white: '#fff',
		red: '#ff0000',
		danger: th.color('red'),
		text: th.color('black'),
		modes: {
			dark: {
				red: '#ff4400',
				text: th.color('white'),
			},
		},
	},
	space: {
		...defaultTheme.space,
		md: 10,
		1: '4px', 
		2: '8px'
	},
	fontSizes: { 
		...defaultTheme.fontSizes,
		md: '20px',
	},
} as const


export const renderWithTheme = (
	ui: React.ReactElement, 
	options?: Omit<RenderOptions, 'queries'>
): RenderResult => render(
	<ThemeProvider theme={theme}>{ui}</ThemeProvider>,
	options
)

afterEach(cleanup)

describe('#useTheme', () => {
  it('returns theme', () => {
    const spy = jest.fn()
    function ThemeLogger() {
      const theme = useTheme()
      React.useEffect(() => {
        spy(theme)
      }, [theme])
      return null
    }
    renderWithTheme(<ThemeLogger />)
    expect(spy).toHaveBeenCalledWith(theme)
  })
})

describe('#useFontSize', () => {
  it('gets value from theme', () => {
    const spy = jest.fn()
    function Logger() {
      const fontSize = useFontSize('md')
      React.useEffect(() => {
        spy(fontSize)
      }, [fontSize])
      return null
    }
    renderWithTheme(<Logger />)
    expect(spy).toHaveBeenCalledWith('20px')
  })
})

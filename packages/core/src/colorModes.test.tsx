/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/state-in-constructor */
/* eslint-env browser */
import * as React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { th } from '@xstyled/system'
import {
  createColorStyles,
  useColorModeState,
  useColorModeTheme,
  ColorModeContext,
  createColorModeProvider,
  useColorMode,
  getColorModeInitScriptElement,
  getColorModeInitScriptTag,
} from './colorModes'

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {})
})

afterEach(() => {
  jest.spyOn(console, 'error').mockClear()
})

afterEach(cleanup)

let darkTheme: any
let lightTheme: any

beforeEach(() => {
  darkTheme = {
    colors: {
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
  }

  lightTheme = {
    colors: {
      black: '#000',
      white: '#fff',
      red: '#ff0000',
      danger: th.color('red'),
      text: th.color('white'),
      modes: {
        light: {
          red: '#ff4400',
          text: th.color('black'),
        },
      },
    },
  }
})

describe('#createColorStyles', () => {
  it('should create color styles', () => {
    const theme = {
      colors: {
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
    }
    expect(createColorStyles(theme as any)).toBe(
      `body{--xstyled-colors-red: #ff0000;--xstyled-colors-text: #000;@media (prefers-color-scheme: dark){--xstyled-colors-red: #ff4400;--xstyled-colors-text: #fff;}&.xstyled-color-mode-default{--xstyled-colors-red: #ff0000;--xstyled-colors-text: #000;}&.xstyled-color-mode-dark{--xstyled-colors-red: #ff4400;--xstyled-colors-text: #fff;}}`,
    )
  })
})

describe('#useColorModeState', () => {
  function ColorMode({ theme, target }: { theme: any; target?: Element }) {
    const [mode, setMode] = useColorModeState(theme, { target })
    return (
      <div>
        <span data-testid="mode">{mode}</span>
        <button
          data-testid="setDarkMode"
          type="button"
          onClick={() => setMode('dark')}
        >
          Set dark mode
        </button>
        <button
          data-testid="setDefaultMode"
          type="button"
          onClick={() => setMode('default')}
        >
          Set default mode
        </button>
      </div>
    )
  }

  afterEach(() => {
    window.localStorage.removeItem('xstyled-color-mode')
  })

  describe('with existing storage', () => {
    beforeEach(() => {
      window.localStorage.setItem('xstyled-color-mode', 'dark')
    })

    it('uses it as initial mode', () => {
      const { getByTestId } = render(<ColorMode theme={darkTheme} />)
      expect(getByTestId('mode')).toHaveTextContent('dark')
    })
  })

  describe('with window.matchMedia', () => {
    function mockMatchMedia(mode: string) {
      // @ts-ignore
      window.matchMedia = jest.fn((query) => ({
        matches: query === `(prefers-color-scheme: ${mode})`,
        media: query,
      }))
    }

    afterEach(() => {
      // @ts-ignore
      delete window.matchMedia
    })

    it('uses media queries to detect "dark" mode', () => {
      mockMatchMedia('dark')
      const { getByTestId } = render(<ColorMode theme={darkTheme} />)
      expect(window.matchMedia).toHaveBeenCalledTimes(1)
      expect(window.matchMedia).toHaveBeenCalledWith(
        '(prefers-color-scheme: dark)',
      )
      expect(getByTestId('mode')).toHaveTextContent('dark')
    })

    it('uses media queries to detect "light" mode', () => {
      mockMatchMedia('light')
      const { getByTestId } = render(<ColorMode theme={lightTheme} />)
      expect(window.matchMedia).toHaveBeenCalledTimes(1)
      expect(window.matchMedia).toHaveBeenCalledWith(
        '(prefers-color-scheme: light)',
      )
      expect(getByTestId('mode')).toHaveTextContent('light')
    })

    it('does not use it if useColorSchemeMediaQuery is false', () => {
      mockMatchMedia('light')
      const theme = { ...lightTheme, useColorSchemeMediaQuery: false }
      const { getByTestId } = render(<ColorMode theme={theme} />)
      expect(window.matchMedia).not.toHaveBeenCalled()
      expect(getByTestId('mode')).toHaveTextContent('default')
    })
  })

  describe('without existing storage & useColorSchemeMediaQuery=false', () => {
    it('reads default value from theme.defaultColorModeName', () => {
      const theme = {
        ...darkTheme,
        useColorSchemeMediaQuery: false,
        defaultColorModeName: 'dark',
      }
      const { getByTestId } = render(<ColorMode theme={theme} />)
      expect(getByTestId('mode')).toHaveTextContent('dark')
    })

    it('uses default without theme.defaultColorModeName', () => {
      const theme = {
        ...darkTheme,
        useColorSchemeMediaQuery: false,
      }
      const { getByTestId } = render(<ColorMode theme={theme} />)
      expect(getByTestId('mode')).toHaveTextContent('default')
    })

    it('uses specific default with theme.initialColorModeName', () => {
      const theme = {
        ...darkTheme,
        useColorSchemeMediaQuery: false,
        initialColorModeName: 'light',
      }
      const { getByTestId } = render(<ColorMode theme={theme} />)
      expect(getByTestId('mode')).toHaveTextContent('light')
    })
  })

  describe('with custom properties enabled', () => {
    it('adds and removes className to body', () => {
      const { getByTestId } = render(<ColorMode theme={darkTheme} />)
      const setDarkModeBtn = getByTestId('setDarkMode')
      const setDefaultModeBtn = getByTestId('setDefaultMode')
      expect(getByTestId('mode')).toHaveTextContent('default')
      expect(document.body).not.toHaveClass('xstyled-color-mode-default')
      expect(document.body).not.toHaveClass('xstyled-color-mode-dark')
      fireEvent.click(setDarkModeBtn)
      expect(document.body).not.toHaveClass('xstyled-color-mode-default')
      expect(document.body).toHaveClass('xstyled-color-mode-dark')
      fireEvent.click(setDefaultModeBtn)
      expect(document.body).toHaveClass('xstyled-color-mode-default')
      expect(document.body).not.toHaveClass('xstyled-color-mode-dark')
    })

    it('adds and removes className to a specific target', () => {
      const main = document.createElement('main')
      document.body.appendChild(main)
      const { getByTestId } = render(
        <ColorMode theme={darkTheme} target={main} />,
      )
      const setDarkModeBtn = getByTestId('setDarkMode')
      const setDefaultModeBtn = getByTestId('setDefaultMode')
      expect(getByTestId('mode')).toHaveTextContent('default')
      expect(main).not.toHaveClass('xstyled-color-mode-default')
      expect(main).not.toHaveClass('xstyled-color-mode-dark')
      fireEvent.click(setDarkModeBtn)
      expect(main).not.toHaveClass('xstyled-color-mode-default')
      expect(main).toHaveClass('xstyled-color-mode-dark')
      fireEvent.click(setDefaultModeBtn)
      expect(main).toHaveClass('xstyled-color-mode-default')
      expect(main).not.toHaveClass('xstyled-color-mode-dark')
    })
  })

  describe('with custom properties disabled', () => {
    it('does not add className', () => {
      const theme = { ...darkTheme, useCustomProperties: false }
      const { getByTestId } = render(<ColorMode theme={theme} />)
      const setDarkModeBtn = getByTestId('setDarkMode')
      expect(getByTestId('mode')).toHaveTextContent('default')
      expect(document.body).not.toHaveClass('xstyled-color-mode-default')
      expect(document.body).not.toHaveClass('xstyled-color-mode-dark')
      fireEvent.click(setDarkModeBtn)
      expect(document.body).not.toHaveClass('xstyled-color-mode-dark')
    })
  })

  it('stores mode preferences', () => {
    const { getByTestId } = render(<ColorMode theme={darkTheme} />)
    const setDarkModeBtn = getByTestId('setDarkMode')
    const setDefaultModeBtn = getByTestId('setDefaultMode')
    expect(getByTestId('mode')).toHaveTextContent('default')
    expect(window.localStorage.getItem('xstyled-color-mode')).toBe(null)
    fireEvent.click(setDarkModeBtn)
    expect(window.localStorage.getItem('xstyled-color-mode')).toBe('dark')
    fireEvent.click(setDefaultModeBtn)
    expect(window.localStorage.getItem('xstyled-color-mode')).toBe('default')
  })
})

describe('#useColorModeTheme', () => {
  describe('with custom properties enabled', () => {
    it('transforms colors into custom properties', () => {
      let colorModeTheme
      function Dummy() {
        colorModeTheme = useColorModeTheme(darkTheme, 'dark')
        return null
      }
      render(<Dummy />)
      expect(colorModeTheme).toEqual({
        colors: {
          ...darkTheme.colors,
          red: 'var(--xstyled-colors-red, #ff0000)',
          text: 'var(--xstyled-colors-text, #000)',
          modes: { dark: darkTheme.colors.modes.dark },
        },
        __rawColors: darkTheme.colors,
      })
    })
  })

  describe('without custom properties enabled', () => {
    it('transforms theme', () => {
      const theme = { ...darkTheme, useCustomProperties: false }
      let colorModeTheme
      function Dummy() {
        colorModeTheme = useColorModeTheme(theme, 'dark')
        return null
      }
      render(<Dummy />)
      expect(colorModeTheme).toEqual({
        colors: {
          ...darkTheme.colors,
          ...darkTheme.colors.modes.dark,
        },
        __colorMode: 'dark',
        __rawColors: darkTheme.colors,
        useCustomProperties: false,
      })
    })
  })
})

describe('#useColorMode', () => {
  it('returns value from ColorModeContext', () => {
    const state: [string, () => void] = ['mode', () => {}]
    function ColorModeProvider({ children }: { children: React.ReactNode }) {
      return (
        <ColorModeContext.Provider value={state}>
          {children}
        </ColorModeContext.Provider>
      )
    }

    function Mode() {
      const [mode] = useColorMode()
      return <div>{mode}</div>
    }

    const { container } = render(
      <ColorModeProvider>
        <Mode />
      </ColorModeProvider>,
    )
    expect(container).toHaveTextContent('mode')
  })

  it('throws without any provider', () => {
    function Mode() {
      useColorMode()
      return null
    }

    expect(() => render(<Mode />)).toThrow(
      '[useColorMode] requires the ColorModeProvider component',
    )
  })
})

describe('#createColorModeProvider', () => {
  it('creates a color mode provider, ready to use', () => {
    const ThemeContext = React.createContext<object>({})
    function ThemeProvider({
      theme,
      children,
    }: {
      theme: object
      children: React.ReactNode
    }) {
      return (
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
      )
    }
    function ColorModeStyle() {
      return <div data-testid="color-mode-style" />
    }

    const ColorModeProvider = createColorModeProvider({
      ThemeContext,
      ThemeProvider,
      ColorModeStyle,
    })

    function Dummy() {
      const [mode] = useColorMode()
      return <div data-testid="mode">{mode}</div>
    }
    const { getByTestId } = render(
      <ThemeProvider theme={darkTheme}>
        <ColorModeProvider>
          <Dummy />
        </ColorModeProvider>
      </ThemeProvider>,
    )

    expect(getByTestId('color-mode-style')).toBeInTheDocument()
    expect(getByTestId('mode')).toHaveTextContent('default')
  })
})

describe('#getColorModeInitScriptElement', () => {
  it('gets init script element', () => {
    const element = getColorModeInitScriptElement()
    expect(element.type).toBe('script')
    expect(element.props.dangerouslySetInnerHTML.__html).toMatch(
      'document.body',
    )

    const customTargetElement = getColorModeInitScriptElement({
      target: 'document.querySelector("#main")',
    })
    expect(customTargetElement.type).toBe('script')
    expect(customTargetElement.props.dangerouslySetInnerHTML.__html).toMatch(
      'document.querySelector("#main")',
    )
  })
})

describe('#getColorModeInitScriptElement', () => {
  it('gets init script tag', () => {
    const tag = getColorModeInitScriptTag()
    expect(tag).toBe(`<script>(function() { try {
    var mode = localStorage.getItem('xstyled-color-mode');
    if (mode) document.body.classList.add('xstyled-color-mode-' + mode);
  } catch (e) {} })();</script>`)

    const customTargetTag = getColorModeInitScriptTag({
      target: 'document.querySelector("#main")',
    })
    expect(customTargetTag).toBe(`<script>(function() { try {
    var mode = localStorage.getItem('xstyled-color-mode');
    if (mode) document.querySelector("#main").classList.add('xstyled-color-mode-' + mode);
  } catch (e) {} })();</script>`)
  })
})

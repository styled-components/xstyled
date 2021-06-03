import * as React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { useTheme, useFontSize } from '.'

afterEach(cleanup)

describe('#useTheme', () => {
  it('returns theme', () => {
    const theme = { foo: 'bar' }
    const spy = jest.fn()
    function ThemeLogger() {
      const theme = useTheme()
      React.useEffect(() => {
        spy(theme)
      }, [theme])
      return null
    }
    render(
      <ThemeProvider theme={theme}>
        <ThemeLogger />
      </ThemeProvider>,
    )
    expect(spy).toHaveBeenCalledWith(theme)
  })
})

describe('#useFontSize', () => {
  it('gets value from theme', () => {
    const theme = { fontSizes: { md: '20px' } }
    const spy = jest.fn()
    function Logger() {
      const fontSize = useFontSize('md')
      React.useEffect(() => {
        spy(fontSize)
      }, [fontSize])
      return null
    }
    render(
      <ThemeProvider theme={theme}>
        <Logger />
      </ThemeProvider>,
    )
    expect(spy).toHaveBeenCalledWith('20px')
  })
})

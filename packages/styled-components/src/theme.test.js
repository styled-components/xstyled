import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { useTheme } from '.'

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

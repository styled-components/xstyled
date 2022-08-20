import * as React from 'react'
import '@testing-library/jest-native/extend-expect'
import { render, screen } from '@testing-library/react-native'
import { css, ThemeProvider } from '.'
import { scStyled as styled } from './scStyled'

const SpaceTheme = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={{ space: { 1: 4, 2: 8 } }}>{children}</ThemeProvider>
  )
}

describe('#css', () => {
  it('transforms rules', () => {
    const Dummy = styled.View`
      ${css`
        margin: 2;
        padding: 1;
        margin-top: 2px;
      `}
    `
    render(
      <SpaceTheme>
        <Dummy testID="dummy" />
      </SpaceTheme>,
    )

    const expectedStyle = {
      marginBottom: 8,
      marginLeft: 8,
      marginRight: 8,
      marginTop: 2,
      paddingBottom: 4,
      paddingLeft: 4,
      paddingRight: 4,
      paddingTop: 4,
    }

    expect(screen.getByTestId('dummy')).toHaveStyle(expectedStyle)
  })

  it('transforms multi values', () => {
    const Dummy = styled.View`
      ${css`
        margin: 1 2;
      `}
    `
    render(
      <SpaceTheme>
        <Dummy testID="dummy" />
      </SpaceTheme>,
    )
    expect(screen.getByTestId('dummy')).toHaveStyle({
      marginBottom: 4,
      marginTop: 4,
      marginLeft: 8,
      marginRight: 8,
    })
  })
})

import * as React from 'react'
import '@testing-library/jest-native/extend-expect'
import { render, cleanup, screen } from '@testing-library/react-native'
import { x, ThemeProvider } from '.'
import { Text, View } from 'react-native'

afterEach(cleanup)

const SpaceTheme = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={{ space: { 1: 4, 2: 8 } }}>{children}</ThemeProvider>
  )
}

describe('#x', () => {
  it.only('creates system based components', () => {
    render(<x.View m={2} p={1} testID="dummy" />)

    expect(screen.getByTestId('dummy')).toHaveStyle({
      marginBottom: 2,
      marginLeft: 2,
      marginRight: 2,
      marginTop: 2,
      paddingTop: 1,
      paddingLeft: 1,
      paddingRight: 1,
      paddingBottom: 1,
    })
  })

  it.only('supports "as" prop', () => {
    render(<x.View as={Text} m={2} p={1} testID="dummy" />)

    const dummyComponent = screen.getByTestId('dummy')

    expect(dummyComponent.type).toBe('Text')

    expect(dummyComponent).toHaveStyle({
      marginBottom: 2,
      marginLeft: 2,
      marginRight: 2,
      marginTop: 2,
      paddingTop: 1,
      paddingLeft: 1,
      paddingRight: 1,
      paddingBottom: 1,
    })
  })

  it.only('uses theme', () => {
    render(
      <SpaceTheme>
        <x.Text m={2} p={1} testID="dummy">
          Hello
        </x.Text>
      </SpaceTheme>,
    )

    const dummyComponent = screen.getByTestId('dummy')

    expect(dummyComponent.type).toBe('Text')

    expect(dummyComponent).toHaveStyle({
      marginBottom: 8,
      marginLeft: 8,
      marginRight: 8,
      marginTop: 8,
      paddingTop: 4,
      paddingLeft: 4,
      paddingRight: 4,
      paddingBottom: 4,
    })
  })

  it.only('does not forward props', () => {
    render(<x.View display="flex" data-foo="bar" testID="dummy" />)

    const dummyComponent = screen.getByTestId('dummy')

    expect(dummyComponent.type).toBe('View')
    expect(dummyComponent).toHaveStyle({ display: 'flex' })
    expect(dummyComponent).not.toHaveProp('display')
    expect(dummyComponent).toHaveProp('data-foo', 'bar')
  })

  it.only('avoids passing system props to native element', () => {
    render(<x.View fontSize={10} testID="dummy" />)

    expect(screen.getByTestId('dummy')).not.toHaveProp('fontSize')
  })

  it.only('passes native attrs to native element', () => {
    render(<x.View accessibilityHint="test" testID="dummy" />)

    expect(screen.getByTestId('dummy')).toHaveProp('accessibilityHint', 'test')
  })

  it.only('avoids passing system props to "as" component', () => {
    const Component = (props: any) => <View {...props} />

    render(<x.View as={Component} fontSize={10} testID="dummy" />)

    expect(screen.getByTestId('dummy')).not.toHaveProp('fontSize')
  })

  it.only('passes non-system props to "as" component', () => {
    const Component = ({ asdf, ...props }: any) => (
      <Text {...props}>{asdf}</Text>
    )

    render(<x.View as={Component} asdf="boo!" testID="dummy" />)

    expect(screen.getByTestId('dummy')).toHaveTextContent('boo!')
  })
})

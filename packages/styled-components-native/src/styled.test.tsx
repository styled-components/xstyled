import * as React from 'react'
import '@testing-library/jest-native/extend-expect'
import { render, cleanup, screen } from '@testing-library/react-native'
import styled, { css, system, ThemeProvider } from '.'
import { Text, View } from 'react-native'

afterEach(cleanup)

describe('#styled', () => {
  it('transforms rules', () => {
    const Dummy = styled.View`
      margin: 8;
      padding: 4;
      margin-top: 2px;
    `

    render(<Dummy testID="dummy" />)

    expect(screen.getByTestId('dummy')).toHaveStyle({
      marginBottom: 8,
      marginLeft: 8,
      marginRight: 8,
      marginTop: 2,
      paddingTop: 4,
      paddingLeft: 4,
      paddingRight: 4,
      paddingBottom: 4,
    })
  })

  it('works with conditional css', () => {
    interface DummyProps {
      foo: number
    }

    const Dummy = styled.View<DummyProps>`
      color: red;
      ${(p) => css`
        margin: ${p.foo};
      `}
    `
    render(<Dummy foo={2} testID="dummy" />)

    expect(screen.getByTestId('dummy')).toHaveStyle({
      color: 'red',
      marginBottom: 2,
      marginLeft: 2,
      marginRight: 2,
      marginTop: 2,
    })
  })

  it('works with render props', () => {
    const Foo = ({
      children,
    }: {
      children: ({ content }: { content: string }) => React.ReactNode
    }) => <View>{children({ content: 'Hello World' })}</View>

    const StyledFoo = styled(Foo)``

    render(<StyledFoo>{({ content }) => <Text>{content}</Text>}</StyledFoo>)
  })

  it('reads value from the theme', () => {
    const theme = {
      colors: {
        primary: 'pink',
      },
    }

    const Dummy = styled.View`
      color: primary;
    `

    render(
      <ThemeProvider theme={theme}>
        <Dummy testID="dummy" />
      </ThemeProvider>,
    )

    expect(screen.getByTestId('dummy')).toHaveStyle({
      color: 'pink',
    })
  })

  it('handles negative values', () => {
    const theme = {
      space: {
        md: 10,
      },
    }
    const Dummy = styled.View`
      margin: -md;
    `
    render(
      <ThemeProvider theme={theme}>
        <Dummy testID="dummy" />
      </ThemeProvider>,
    )

    expect(screen.getByTestId('dummy')).toHaveStyle({
      marginBottom: -10,
      marginLeft: -10,
      marginRight: -10,
      marginTop: -10,
    })
  })

  it('works with css as object', () => {
    const Dummy = styled.View({
      margin: '2',
    })

    render(<Dummy testID="dummy" />)

    expect(screen.getByTestId('dummy')).toHaveStyle({
      marginBottom: 2,
      marginLeft: 2,
      marginRight: 2,
      marginTop: 2,
    })
  })

  it('works with "withConfig"', () => {
    const Dummy = styled.View.withConfig({})`
      margin: 2;
    `
    render(<Dummy testID="dummy" />)

    expect(screen.getByTestId('dummy')).toHaveStyle({
      marginBottom: 2,
      marginLeft: 2,
      marginRight: 2,
      marginTop: 2,
    })
  })

  it('works with "attrs"', () => {
    const Dummy = styled.View.attrs({ accessibilityLabel: 'test' })`
      margin: 2;
    `

    render(<Dummy testID="dummy" />)

    const dummyComponent = screen.getByTestId('dummy')

    expect(dummyComponent).toHaveProp('accessibilityLabel', 'test')
    expect(dummyComponent).toHaveStyle({
      marginBottom: 2,
      marginLeft: 2,
      marginRight: 2,
      marginTop: 2,
    })
  })

  it('works with system.apply', () => {
    const theme = {
      colors: {
        primary: 'pink',
      },
    }

    const Dummy = styled.View`
      ${system.apply({ fontSize: 2, bg: 'primary' })}
    `
    render(
      <ThemeProvider theme={theme}>
        <Dummy testID="dummy" />
      </ThemeProvider>,
    )

    expect(screen.getByTestId('dummy')).toHaveStyle({
      fontSize: 2,
      backgroundColor: 'pink',
    })
  })
})

describe('#styled.xxx', () => {
  it('supports another react native tags', () => {
    const Dummy = styled.ScrollView``

    render(<Dummy testID="dummy" />)

    expect(screen.getByTestId('dummy').type).toBe('RCTScrollView')
  })
})

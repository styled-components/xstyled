/* eslint-disable no-continue, no-loop-func, no-cond-assign */
import * as React from 'react'
import scStyled, {
  ThemedStyledFunction,
  StyledConfig,
  ThemedBaseStyledInterface,
  DefaultTheme,
} from 'styled-components'
import { createBox } from '@xstyled/core'
import { createSystemComponent, SystemProps } from '@xstyled/system'
import { css } from './css'
import { BoxElements } from './types'

declare module 'styled-components' {
  type ForwardRefExoticBase<P> = Pick<
    React.ForwardRefExoticComponent<P>,
    keyof React.ForwardRefExoticComponent<any>
  >

  type StyledComponentPropsWithAs<
    C extends string | React.ComponentType<any>,
    T extends object,
    O extends object,
    A extends keyof any
  > = StyledComponentProps<C, T, O, A> & { as?: C }

  type StyledComponentPropsWithForwardedAs<
    C extends string | React.ComponentType<any>,
    T extends object,
    O extends object,
    A extends keyof any
  > = StyledComponentProps<C, T, SystemProps<T> & O, A> & {
    forwardedAs?: C
  }

  interface StyledComponentBase<
    C extends string | React.ComponentType<any>,
    T extends object,
    O extends object = {},
    A extends keyof any = never
  > extends ForwardRefExoticBase<StyledComponentProps<C, T, O, A>> {
    // add our own fake call signature to implement the polymorphic 'as' prop
    (
      props: StyledComponentProps<C, T, O, A> & {
        as?: never
        forwardedAs?: never
      },
    ): React.ReactElement<StyledComponentProps<C, T, O, A>>

    <AsC extends string | React.ComponentType<any> = C>(
      props: StyledComponentPropsWithForwardedAs<AsC, T, O, A>,
    ): React.ReactElement<StyledComponentPropsWithForwardedAs<AsC, T, O, A>>

    <AsC extends string | React.ComponentType<any> = C>(
      props: StyledComponentPropsWithAs<AsC, T, O, A>,
    ): React.ReactElement<StyledComponentPropsWithAs<AsC, T, O, A>>

    withComponent<WithC extends AnyStyledComponent>(
      component: WithC,
    ): StyledComponent<
      StyledComponentInnerComponent<WithC>,
      T,
      O & StyledComponentInnerOtherProps<WithC>,
      A | StyledComponentInnerAttrs<WithC>
    >
    withComponent<WithC extends string | React.ComponentType<any>>(
      component: WithC,
    ): StyledComponent<WithC, T, O, A>
  }
}

function getCreateStyle(baseCreateStyle: ThemedStyledFunction<any, any>) {
  // @ts-ignore
  const createStyle = (...args: any) => baseCreateStyle`${css(...args)}`
  createStyle.attrs = (attrs: any) => {
    const nextCreateStyle = baseCreateStyle.attrs(attrs)
    return getCreateStyle(nextCreateStyle)
  }
  createStyle.withConfig = (config: StyledConfig<any>) => {
    const nextCreateStyle = baseCreateStyle.withConfig(config)
    return getCreateStyle(nextCreateStyle)
  }
  return createStyle
}

type ThemedXStyledComponentFactories<T extends object> = {
  [Key in keyof BoxElements]: ThemedStyledFunction<
    BoxElements[Key],
    T,
    SystemProps<T>
  >
}

interface ThemeBaseXStyledInterface<T extends object>
  extends ThemedBaseStyledInterface<T>,
    ThemedXStyledComponentFactories<T> {}

type XStyledInterface = ThemeBaseXStyledInterface<DefaultTheme>

export const styled = <XStyledInterface>(
  ((component: any) => getCreateStyle(scStyled(component)))
)

export const InnerBox = createSystemComponent<DefaultTheme>(React, 'div')

export const Box = styled(InnerBox)(createBox)

// @ts-ignore
styled.box = styled(Box)

Object.keys(scStyled).forEach((key) => {
  // @ts-ignore
  styled[key] = styled(key)
  // @ts-ignore
  styled[`${key}Box`] = styled(
    // @ts-ignore
    Box.withComponent(createSystemComponent<DefaultTheme>(React, key)),
  )
})

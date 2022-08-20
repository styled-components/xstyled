import { Theme } from '@xstyled/system'
import {
  AnyStyledComponent,
  StyledComponentInnerAttrs,
  StyledComponentInnerComponent,
  StyledComponentInnerOtherProps,
  ThemedStyledFunction,
} from 'styled-components'
import type {
  ReactNativeStyledInterface,
  ReactNativeThemedStyledFunction,
} from 'styled-components/native'

export type NativeElements = ReactNativeStyledInterface<Theme>

export type NativeElement<T extends NativeElementsKeys> =
  NativeElements[T] extends ReactNativeThemedStyledFunction<infer U, any>
    ? U
    : never

export type NativeElementsKeys = keyof NativeElements

export interface ReactNativeThemedBaseStyledInterface<T extends object>
  extends ReactNativeStyledInterface<Theme> {
  <C extends AnyStyledComponent>(component: C): ThemedStyledFunction<
    StyledComponentInnerComponent<C>,
    T,
    StyledComponentInnerOtherProps<C>,
    StyledComponentInnerAttrs<C>
  >
  <C extends React.ComponentType<any>>(
    // unfortunately using a conditional type to validate that it can receive a `theme?: Theme`
    // causes tests to fail in TS 3.1
    component: C,
  ): ThemedStyledFunction<C, T>
}

import { Theme } from '@xstyled/system'
import type {
  ReactNativeStyledInterface,
  ReactNativeThemedStyledFunction,
} from 'styled-components/native'

export type ReactNativeElements = ReactNativeStyledInterface<Theme>

export type ReactNativeElementsKeys = keyof ReactNativeElements

export type ReactNativeBoxElements = {
  [ReactNativeElement in ReactNativeElementsKeys as `${ReactNativeElement}Box`]: ReactNativeElement
}

export type ReactNativeElement<
  RNElement extends ReactNativeElementsKeys,
  Theme extends object,
> = ReactNativeElements[RNElement] extends ReactNativeThemedStyledFunction<
  infer U,
  Theme
>
  ? U
  : never

import type {
  StyleGenerator,
  StyleGeneratorProps,
  Theme,
} from '@xstyled/system'
import { StyledComponent, ThemedStyledFunction } from 'styled-components'
import type {
  DefaultTheme,
  ReactNativeStyledInterface,
  ReactNativeThemedStyledFunction,
} from 'styled-components/native'

export type X<TGen extends StyleGenerator> = {
  [Key in ReactNativeElementsKeys]: StyledComponent<
    ReactNativeElement<Key, DefaultTheme>,
    DefaultTheme,
    StyleGeneratorProps<TGen>,
    'color'
  >
}

export type BoxStyledTags<TProps extends object> = {
  [Key in keyof ReactNativeBoxElements]: ThemedStyledFunction<
    ReactNativeElement<ReactNativeBoxElements[Key], Theme>,
    Theme,
    TProps
  >
}

export interface XStyledNative<TGen extends StyleGenerator>
  extends ReactNativeElements,
    BoxStyledTags<StyleGeneratorProps<TGen>> {}

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

import styled, {
  DefaultTheme,
  ReactNativeStyledInterface,
} from 'styled-components/native'

// Provide interop since `styled-components` does not work out of the box with ESM
export const scStyled: ReactNativeStyledInterface<DefaultTheme> =
  // @ts-ignore
  typeof styled === 'function' ? styled : styled.default

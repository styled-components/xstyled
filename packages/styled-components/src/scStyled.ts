import styled, { StyledInterface } from 'styled-components'

// Provide interop since `styled-components` does not work out of the box with ESM
export const scStyled: StyledInterface =
  // @ts-ignore
  typeof styled === 'function' ? styled : styled.default

import styled, { Styled } from 'styled-components'

// Provide interop since `styled-components` does not work out of the box with ESM
export const scStyled =
  // @ts-expect-error
  (typeof styled === 'function' ? styled : styled.default) as Styled

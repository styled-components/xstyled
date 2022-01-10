import styled from 'styled-components'

// Provide interop since `styled-components` does not work out of the box with ESM
export const scStyled =
  // @ts-ignore
  typeof styled === 'function' ? styled : styled.default

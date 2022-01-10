import styled from '@emotion/styled'

// Provide interop since `@emotion/styled` does not work out of the box with ESM
export const emStyled =
  // @ts-ignore
  typeof styled === 'function' ? styled : styled.default

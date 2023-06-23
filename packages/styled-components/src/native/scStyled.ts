import styled from 'styled-components/native'

export const scStyledNative =
  // @ts-ignore
  typeof styled === 'function' ? styled : styled.default

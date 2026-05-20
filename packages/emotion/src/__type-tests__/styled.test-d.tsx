import * as React from 'react'
import styled, { css, createGlobalStyle, keyframes } from '../index'
import type { Expect, Assignable, IsNever } from './_helpers'

// -----------------------------------------------------------------------------
// `styled.div`...`` returns a React component.
// -----------------------------------------------------------------------------
const Box = styled.div`
  color: red;
  margin: 8px;
`

export const _jsx_Box = <Box />
export const _jsx_Box_with_kids = <Box>hello</Box>

export type _Box_is_element_type = Expect<
  Assignable<React.ElementType, typeof Box>
>

// -----------------------------------------------------------------------------
// `styled('div')` is the function form.
// -----------------------------------------------------------------------------
const Fn = styled('button')`
  color: white;
`
export const _jsx_Fn = <Fn onClick={() => undefined}>x</Fn>

// -----------------------------------------------------------------------------
// `css\`...\`` is interpolatable.
// -----------------------------------------------------------------------------
const tokens = css`
  color: red;
`
const Composed = styled.div`
  ${tokens};
  margin: 4px;
`
export const _jsx_Composed = <Composed />

export type _css_callable = Expect<
  IsNever<ReturnType<typeof css>> extends true ? false : true
>

// -----------------------------------------------------------------------------
// `createGlobalStyle` returns a React component.
// -----------------------------------------------------------------------------
const Globals = createGlobalStyle`
  body { margin: 0; }
`
export const _jsx_Globals = <Globals />

// -----------------------------------------------------------------------------
// `keyframes` (re-exported from @emotion/react).
// -----------------------------------------------------------------------------
const Anim = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`
const Animated = styled.div`
  animation: ${Anim} 200ms linear;
`
export const _jsx_Animated = <Animated />

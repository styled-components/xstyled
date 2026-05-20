import * as React from 'react'
import { styled, css, createGlobalStyle, keyframes } from '../index'
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
export const _jsx_Box_as = <Box as="a" href="https://example.com" />

// Box is assignable to React.ElementType.
export type _Box_is_element_type = Expect<
  Assignable<React.ElementType, typeof Box>
>

// -----------------------------------------------------------------------------
// `styled('div')` is the function form. The resulting component accepts the
// underlying element's HTML attrs plus system props.
// -----------------------------------------------------------------------------
const Fn = styled('button')`
  color: white;
`
export const _jsx_Fn = <Fn onClick={() => undefined}>x</Fn>

// -----------------------------------------------------------------------------
// `.attrs` / `.withConfig` chaining.
// -----------------------------------------------------------------------------
const WithAttrs = styled.button.attrs({ type: 'button' })`
  cursor: pointer;
`
export const _jsx_WithAttrs = <WithAttrs onClick={() => undefined} />

const WithConfig = styled.div.withConfig({ displayName: 'Tagged' })`
  display: flex;
`
export const _jsx_WithConfig = <WithConfig />

// -----------------------------------------------------------------------------
// `css\`...\`` returns a value that's interpolatable into another styled.
// -----------------------------------------------------------------------------
const tokens = css`
  color: red;
`
const Composed = styled.div`
  ${tokens};
  margin: 4px;
`
export const _jsx_Composed = <Composed />

// `css` is callable with template literal args.
export type _css_callable = Expect<
  IsNever<ReturnType<typeof css>> extends true ? false : true
>

// -----------------------------------------------------------------------------
// `createGlobalStyle` returns a React component (no required props).
// -----------------------------------------------------------------------------
const Globals = createGlobalStyle`
  body { margin: 0; }
`
export const _jsx_Globals = <Globals />

// -----------------------------------------------------------------------------
// `keyframes` is re-exported from styled-components.
// -----------------------------------------------------------------------------
const Anim = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`
const Animated = styled.div`
  animation: ${Anim} 200ms linear;
`
export const _jsx_Animated = <Animated />

// -----------------------------------------------------------------------------
// Negative scenarios.
// -----------------------------------------------------------------------------

// `styled.div` without a template literal isn't callable.
const _badStyled = (
  // @ts-expect-error `styled.div` requires a tagged template (or string literal types via .attrs)
  <styled.div />
)
void _badStyled

// Bad attribute types on the wrapped element are rejected.
const _badAttr = (
  // @ts-expect-error `disabled` on a button is boolean, not string
  <WithAttrs disabled="yes" />
)
void _badAttr

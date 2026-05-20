import * as React from 'react'
import { x } from '../index'
import type { Expect, Assignable, IsNever } from './_helpers'

// -----------------------------------------------------------------------------
// `x` is a record of styled tags. Every supported HTML element is callable.
// -----------------------------------------------------------------------------
export type _x_has_div = Expect<IsNever<typeof x.div> extends true ? false : true>
export type _x_has_a = Expect<IsNever<typeof x.a> extends true ? false : true>
export type _x_has_button = Expect<
  IsNever<typeof x.button> extends true ? false : true
>

// JSX usage — these must type-check.
export const _jsx_basic = <x.div />
export const _jsx_with_html_attrs = (
  <x.a href="https://example.com" rel="noopener" />
)
export const _jsx_with_system_props = <x.div m={2} p={1} display="flex" />
export const _jsx_responsive_space = <x.div m={{ _: 1, md: 2, lg: 4 }} />
export const _jsx_color = <x.div color="red" backgroundColor="#fff" />
export const _jsx_complex = (
  <x.button
    px={2}
    py={1}
    color="white"
    backgroundColor="blue"
    onClick={(e) => {
      // Event handler is typed.
      const _t: React.MouseEvent<HTMLButtonElement> = e
      void _t
    }}
  >
    Click
  </x.button>
)

// `as` prop swaps the underlying element. The runtime supports both
// `as="a"` (string) and `as={Component}`.
export const _jsx_as_string = <x.div as="a" href="https://example.com" />
const _Custom: React.FC<{ label: string }> = (props) => (
  <span>{props.label}</span>
)
export const _jsx_as_component = <x.div as={_Custom} label="hello" />

// Children + ref forwarding work.
export const _jsx_with_children = <x.div>hello</x.div>

// -----------------------------------------------------------------------------
// Negative scenarios — value-level.
// -----------------------------------------------------------------------------

// HTML attributes are strict on the underlying element.
const _badHref = (
  // @ts-expect-error `href` is a number — `x.a` requires `string`
  <x.a href={42} />
)
void _badHref

// Event handlers are typed against the underlying element.
const _badHandler = (
  <x.button
    // @ts-expect-error onClick gets a MouseEvent, not a number
    onClick={42}
  />
)
void _badHandler

// `m` accepts spacing; without theme augmentation `Space<ITheme>` widens to
// `{}` (via `ThemeNamespaceValue`), so most non-nullish things pass. `null`
// is the value-level case we can reliably negate.
const _badM = (
  // @ts-expect-error `null` is excluded by the `{}` arm of ThemeNamespaceValue
  <x.div m={null} />
)
void _badM

// `x.div` should not accept the `label` prop unless `as={SomeComponent}`
// adds it. Note: this depends on styled-components' prop inference.
const _badProp = (
  // @ts-expect-error `label` is not an HTML attribute on a <div>
  <x.div label="oops" />
)
void _badProp

// -----------------------------------------------------------------------------
// Assignability sanity — `x.div` is a valid JSX component type.
// -----------------------------------------------------------------------------
type _xdiv_is_jsx_component = Expect<
  Assignable<
    React.ElementType,
    typeof x.div
  >
>

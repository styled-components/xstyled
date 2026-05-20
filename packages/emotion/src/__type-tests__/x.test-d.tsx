import * as React from 'react'
import { x } from '../index'
import type { Expect, Assignable, IsNever } from './_helpers'

// -----------------------------------------------------------------------------
// `x` is a record of styled tags. Every supported HTML element is callable.
// In emotion's typings the underlying HTML attributes are *not* automatically
// surfaced (a long-standing emotion / @emotion/styled quirk), so we only
// assert system props + minimal JSX usage here.
// -----------------------------------------------------------------------------
export type _x_has_div = Expect<IsNever<typeof x.div> extends true ? false : true>
export type _x_has_a = Expect<IsNever<typeof x.a> extends true ? false : true>
export type _x_has_button = Expect<
  IsNever<typeof x.button> extends true ? false : true
>

// JSX usage with system props (the core promise).
export const _jsx_basic = <x.div />
export const _jsx_with_system_props = <x.div m={2} p={1} display="flex" />
export const _jsx_responsive_space = <x.div m={{ _: 1, md: 2, lg: 4 }} />
export const _jsx_color = <x.div color="red" backgroundColor="#fff" />

export const _jsx_children = <x.div>hello</x.div>

// -----------------------------------------------------------------------------
// Negative scenarios — value-level @ts-expect-error.
// -----------------------------------------------------------------------------

const _badM = (
  // @ts-expect-error `null` is excluded by the `{}` arm of ThemeNamespaceValue
  <x.div m={null} />
)
void _badM

// -----------------------------------------------------------------------------
// Assignability sanity — `x.div` is a valid JSX component type.
// -----------------------------------------------------------------------------
export type _xdiv_is_jsx_component = Expect<
  Assignable<React.ElementType, typeof x.div>
>

// Suppress unused-import warning under the types tsconfig.
void React

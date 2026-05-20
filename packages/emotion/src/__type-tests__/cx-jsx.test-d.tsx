import * as React from 'react'
import { cx, jsx, css } from '../index'
import type { Expect, Assignable, IsNever } from './_helpers'

// -----------------------------------------------------------------------------
// `cx` accepts a single styles fn or an array; returns a string or a
// theme-fn (see emotion/src/createCx.ts).
// -----------------------------------------------------------------------------
{
  const a = cx(
    css`
      color: red;
    `,
  )
  // The runtime return type is string | (theme) => any; we just assert it
  // isn't `never` / `any`.
  type _t = Expect<IsNever<typeof a> extends true ? false : true>
  void (null as unknown as _t)
}

{
  const a = cx([
    css`
      color: red;
    `,
    css`
      margin: 4px;
    `,
  ])
  type _t = Expect<IsNever<typeof a> extends true ? false : true>
  void (null as unknown as _t)
}

// -----------------------------------------------------------------------------
// `jsx` mirrors the emotion `jsx` factory.
// -----------------------------------------------------------------------------
export const _jsx_via_factory = jsx('div', { children: 'hi' })

// jsx accepts an ElementType and props.
export type _jsx_callable = Expect<Assignable<Function, typeof jsx>>

// -----------------------------------------------------------------------------
// Negative scenarios.
// -----------------------------------------------------------------------------

// @ts-expect-error `cx` requires a SerializedStylesFn (or array); a bare
// number is not acceptable
cx(42)

// @ts-expect-error jsx requires an ElementType as the first arg
jsx({}, { children: 'oops' })

// Suppress unused-import warnings under the types tsconfig.
void React

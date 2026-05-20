import type { Space, ThemeSpace } from '../styles/space'
import type { Pixel } from '../styles/units'
import type { Expect, Assignable, IsAny } from './_helpers'

interface MyTheme {
  space: {
    sm: '4px'
    md: '8px'
    lg: '16px'
    1.5: '6px'
  }
}

// -----------------------------------------------------------------------------
// Pixel: the `(string & {}) | (number & {})` pattern from #428.
// It must accept any string or number but must NOT widen to `any`
// (otherwise IntelliSense completions get clobbered).
// -----------------------------------------------------------------------------
export type _pixel_string = Expect<Assignable<Pixel, '12px'>>
export type _pixel_number = Expect<Assignable<Pixel, 12>>
export type _pixel_not_any = Expect<IsAny<Pixel> extends true ? false : true>

// -----------------------------------------------------------------------------
// ThemeSpace surfaces the configured tokens, including numeric ones (#413).
// Note: `ThemeNamespaceValue` intentionally unions with `{}` so style props
// stay permissive of raw CSS values — that means we can assert tokens *can*
// be assigned, but cannot assert that arbitrary strings are rejected at
// the `ThemeSpace` level. The `Pixel` part is what stays strict-ish.
// -----------------------------------------------------------------------------
export type _space_sm = Expect<Assignable<ThemeSpace<MyTheme>, 'sm'>>
export type _space_md = Expect<Assignable<ThemeSpace<MyTheme>, 'md'>>
export type _space_numeric = Expect<Assignable<ThemeSpace<MyTheme>, 1.5>>

// -----------------------------------------------------------------------------
// Space accepts theme tokens AND raw pixel-ish values.
// -----------------------------------------------------------------------------
export type _space_token = Expect<Assignable<Space<MyTheme>, 'md'>>
export type _space_px_string = Expect<Assignable<Space<MyTheme>, '24px'>>
export type _space_number = Expect<Assignable<Space<MyTheme>, 24>>

// -----------------------------------------------------------------------------
// Negative scenarios — value-level rejection.
// `ThemeNamespaceValue` intentionally unions with `{}`, so `Space<T>`
// accepts most non-nullish values (booleans, arrays, plain objects).
// `null` and `undefined` are the only things the type excludes.
// -----------------------------------------------------------------------------

// @ts-expect-error null is excluded by the `{}` arm of ThemeNamespaceValue
const _badNull: Space<MyTheme> = null
void _badNull

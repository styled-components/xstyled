import type { ThemeProp, SystemProp, ThemeVariants } from '../types'
import type {
  Expect,
  Assignable,
  NotAssignable,
} from './_helpers'

// -----------------------------------------------------------------------------
// `_` belongs to `screens` (the "no breakpoint" entry), not `states`.
// `ThemeVariants` is `screens & Omit<states, '_'>` — the Omit avoids the
// intersection between `screens._: number` and `states._: null` colliding;
// `_` itself still flows through from `screens`.
// -----------------------------------------------------------------------------
interface TightTheme {
  screens: {
    _: 0
    sm: 640
    md: 768
    lg: 1024
  }
  states: {
    _: null
    hover: '&:hover'
    focus: '&:focus'
  }
}

// `_`, breakpoints, and states are all present.
export type _variants_has_base = Expect<
  Assignable<keyof ThemeVariants<TightTheme>, '_'>
>
export type _variants_has_breakpoint = Expect<
  Assignable<keyof ThemeVariants<TightTheme>, 'md'>
>
export type _variants_has_state = Expect<
  Assignable<keyof ThemeVariants<TightTheme>, 'hover'>
>

// But not made-up keys.
export type _variants_no_bogus = Expect<
  NotAssignable<keyof ThemeVariants<TightTheme>, 'lolwut'>
>

// -----------------------------------------------------------------------------
// `SystemProp<TType, T>` is either a bare value or a `ThemeProp` map.
// The map permits the base `_` key when the theme types it via `screens`.
// -----------------------------------------------------------------------------
const _bare: SystemProp<string, TightTheme> = 'red'
const _responsive: SystemProp<string, TightTheme> = {
  _: 'red',
  md: 'blue',
  lg: 'green',
  hover: 'orange',
}
const _nested: SystemProp<string, TightTheme> = {
  _: 'red',
  md: { hover: 'orange', focus: 'yellow' },
}
void _bare
void _responsive
void _nested

// Object shape rejects unknown keys.
// @ts-expect-error 'never-bp' is not a known breakpoint/state
const _badKey: ThemeProp<string, TightTheme> = { 'never-bp': 'red' }
void _badKey

// -----------------------------------------------------------------------------
// When the theme is *not* tightly typed (the default `ITheme` shape), the
// type stays permissive — value-level mistakes don't get rejected. This is
// by design and an important property to lock in: tightening the theme is
// what unlocks the strict checks. Test it indirectly via `ITheme`.
// -----------------------------------------------------------------------------
import type { ITheme } from '../types'

const _loose: SystemProp<string, ITheme> = {
  _: 'red',
  anyKey: 'green',
  fooBar: 'blue',
}
void _loose

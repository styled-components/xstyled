import type { Color, ThemeColor } from '../styles/colors'
import type { Expect, Assignable, NotAssignable } from './_helpers'

interface MyTheme {
  colors: {
    primary: '#000'
    secondary: '#fff'
    danger: {
      100: '#f00'
      500: '#a00'
      default: '#900'
    }
  }
}

// -----------------------------------------------------------------------------
// ThemeColor surfaces every leaf path.
// -----------------------------------------------------------------------------
export type _theme_primary = Expect<Assignable<ThemeColor<MyTheme>, 'primary'>>
export type _theme_secondary = Expect<
  Assignable<ThemeColor<MyTheme>, 'secondary'>
>
export type _theme_danger100 = Expect<
  Assignable<ThemeColor<MyTheme>, 'danger.100'>
>
export type _theme_danger_default = Expect<
  Assignable<ThemeColor<MyTheme>, 'danger.default'>
>

// And refuses arbitrary strings / bare parents (#413).
export type _theme_no_typo = Expect<NotAssignable<ThemeColor<MyTheme>, 'primry'>>
export type _theme_no_bare_parent = Expect<
  NotAssignable<ThemeColor<MyTheme>, 'danger'>
>

// -----------------------------------------------------------------------------
// Color is the union of theme paths + CSS color literals.
// -----------------------------------------------------------------------------
export type _color_theme = Expect<Assignable<Color<MyTheme>, 'primary'>>
export type _color_named = Expect<Assignable<Color<MyTheme>, 'red'>>
export type _color_currentcolor = Expect<
  Assignable<Color<MyTheme>, 'currentcolor'>
>
export type _color_hex_short = Expect<Assignable<Color<MyTheme>, '#abc'>>
export type _color_hex_long = Expect<Assignable<Color<MyTheme>, '#aabbcc'>>
export type _color_rgb = Expect<Assignable<Color<MyTheme>, 'rgb(0, 0, 0)'>>
export type _color_rgba = Expect<Assignable<Color<MyTheme>, 'rgba(0, 0, 0, 0.5)'>>
export type _color_hsl = Expect<Assignable<Color<MyTheme>, 'hsl(0, 0%, 0%)'>>

// CSS variables / arbitrary fn() are intentionally permitted via FnColor.
export type _color_var = Expect<Assignable<Color<MyTheme>, 'var(--token)'>>

// -----------------------------------------------------------------------------
// Negative scenarios — value-level @ts-expect-error.
// These rely on the contextual type from the annotation.
// -----------------------------------------------------------------------------

// Token typos must be rejected.
// @ts-expect-error 'primry' is not a theme color or CSS named color
const _badTypo: Color<MyTheme> = 'primry'

// Bare parent is not a leaf path (#413).
// @ts-expect-error 'danger' is a namespace, not a leaf color
const _badBareParent: Color<MyTheme> = 'danger'

// Made-up nested paths.
// @ts-expect-error 'danger.999' is not a key in MyTheme.danger
const _badNestedPath: Color<MyTheme> = 'danger.999'

// Numbers should not assign to a string-typed Color.
// @ts-expect-error number is not a Color
const _badNumber: Color<MyTheme> = 123

void _badTypo
void _badBareParent
void _badNestedPath
void _badNumber

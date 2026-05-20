/**
 * Pins down how a downstream consumer is meant to specialise xstyled's
 * `Theme` via module augmentation (#344 / #417 / #418). The contract:
 *
 *   declare module '@xstyled/system' {
 *     export interface Theme {
 *       colors: { ... }
 *     }
 *   }
 *
 * After augmentation:
 *  - `Color` (no generic) narrows to the consumer's tokens + CSS color
 *    literals.
 *  - Typos are rejected, IntelliSense surfaces the configured tokens.
 *
 * Because `declare module` is project-wide we keep this file under its own
 * tsconfig (`tsconfig.aug.json`) — the augmented `Theme` does NOT leak into
 * the normal src compile.
 */
import type { Color, ThemeColor } from '../src/styles/colors'
import type { Space, ThemeSpace } from '../src/styles/space'

type Expect<T extends true> = T
type Assignable<T, V> = [V] extends [T] ? true : false
type NotAssignable<T, V> = Assignable<T, V> extends true ? false : true

declare module '../src/types' {
  interface Theme {
    colors: {
      brandPrimary: '#5b21b6'
      brandSecondary: '#7c3aed'
      shades: {
        100: '#eee'
        500: '#888'
        900: '#222'
      }
    }
    space: {
      tight: 4
      cosy: 8
      roomy: 16
    }
  }
}

// -----------------------------------------------------------------------------
// `Color` (no generic) reflects the augmentation.
// -----------------------------------------------------------------------------
export type _aug_color_brand = Expect<Assignable<Color, 'brandPrimary'>>
export type _aug_color_nested = Expect<Assignable<Color, 'shades.500'>>
export type _aug_themecolor_all = Expect<
  Assignable<
    ThemeColor,
    'brandPrimary' | 'brandSecondary' | 'shades.100' | 'shades.500' | 'shades.900'
  >
>

// CSS-level colors still come through.
export type _aug_color_still_named = Expect<Assignable<Color, 'red'>>
export type _aug_color_still_hex = Expect<Assignable<Color, '#abcdef'>>

// ThemeColor is strict — typos rejected.
export type _aug_themecolor_no_typo = Expect<
  NotAssignable<ThemeColor, 'brandPrimary-typo'>
>
export type _aug_themecolor_no_unknown = Expect<
  NotAssignable<ThemeColor, 'doesNotExist'>
>

// Value-level rejection.
// @ts-expect-error 'brandTertiary' is not in the augmented theme
const _badAugColor: Color = 'brandTertiary'
void _badAugColor

// -----------------------------------------------------------------------------
// `Space` reflects the augmentation as well.
// -----------------------------------------------------------------------------
export type _aug_space_token = Expect<Assignable<ThemeSpace, 'tight'>>
export type _aug_space_cosy = Expect<Assignable<Space, 'cosy'>>
export type _aug_space_raw = Expect<Assignable<Space, '24px'>>

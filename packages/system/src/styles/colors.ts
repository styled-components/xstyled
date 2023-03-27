import * as CSS from 'csstype'
import { themeGetter } from '../style'
import { SynthesizedPath, ITheme, Theme } from '../types'

type HexColor = `#${string}`
type RgbColor =
  | `rgb(${number}, ${number}, ${number})`
  | `rgba(${number}, ${number}, ${number}, ${number})`
type HslColor =
  | `hsl(${number}, ${number}%, ${number}%)`
  | `hsla(${number}, ${number}%, ${number}%, ${number})`
type LabColor =
  | `lab(${number}% ${number} ${number})`
  | `lab(${number}% ${number} ${number} / ${number})`
type HwbColor =
  | `hwb(${number} ${number}% ${number}%)`
  | `hwb(${number} ${number}% ${number}% / ${number})`

// any function, could be a CSS variable or forthcoming thing
type FnColor = `${string}(${string})`

export type ThemeColor<T extends ITheme = Theme> = SynthesizedPath<T['colors']>

/**
 * Explicitly do not allow arbitrary strings. The point is to ensure that if you're trying to enter a theme variable it correctly emits a type error
 * for typos and such.
 */
export type Color<T extends ITheme = Theme> =
  | ThemeColor<T>
  | CSS.DataType.NamedColor
  | HexColor
  | RgbColor
  | HslColor
  | LabColor
  | HwbColor
  | FnColor

export const getColor = themeGetter<ThemeColor>({
  name: 'color',
  key: 'colors',
})

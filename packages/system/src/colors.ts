import { string } from '@xstyled/util'
import { ThemeAlias, Colors } from './types'
import { th } from './th'

export type ColorVariants = number[] | readonly number[]
export type ColorTones = number[]

const defaultAlphaVariants = [
  0,
  5,
  10,
  20,
  25,
  30,
  40,
  50,
  60,
  70,
  75,
  80,
  90,
  95,
  100,
] as const

export type DefaultAlphaVariants = typeof defaultAlphaVariants

type AlphaVariant<C extends Colors, V extends ColorVariants> = `${Extract<
  keyof C,
  string
>}-a${V[number]}`

type AlphaVariants<C extends Colors, V extends ColorVariants> = {
  [K in AlphaVariant<C, V>]: string | Colors
}

export const generateHexAlphaVariants = <
  C extends Colors,
  V extends ColorVariants
>(
  colors: C,
  variants: V = (defaultAlphaVariants as unknown) as V,
): C & AlphaVariants<C, V> => {
  const transform = (value: string, variant: number) =>
    `${value}${Math.round((variant / 100) * 255).toString(16)}`
  const alphaColors = Object.keys(colors).reduce((obj, key) => {
    variants.forEach((variant: number) => {
      const value = colors[key]
      const variantKey = `${key}-a${variant}` as AlphaVariant<C, V>
      obj[variantKey] = string(value)
        ? transform(value, variant)
        : generateHexAlphaVariants<typeof value, V>(value, variants)
    })

    return obj
  }, {} as AlphaVariants<C, V>)

  return { ...colors, ...alphaColors }
}

const defaultTones = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

export const aliasColor = <T extends ColorTones>(
  alias: string,
  color: string,
  tones: T = defaultTones as T,
  variants: ColorVariants = (defaultAlphaVariants as unknown) as ColorVariants,
): { [key: string]: ThemeAlias } => {
  return tones.reduce((obj, tone) => {
    obj[`${alias}-${tone}`] = th.color(`${color}-${tone}`)
    variants.forEach((i) => {
      obj[`${alias}-${tone}-a${i}`] = th.color(`${color}-${tone}-a${i}`)
    })
    return obj
  }, {} as { [key: string]: ThemeAlias })
}

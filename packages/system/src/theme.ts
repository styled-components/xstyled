import { IProps } from './types'
import { th } from './th'

type ColorsGuard = Record<string, string>
type AlphaVariants = number[]

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

type DefaultAlphaVariants = typeof defaultAlphaVariants

function generateAlphaVariants<
  T extends ColorsGuard,
  U extends AlphaVariants | DefaultAlphaVariants = DefaultAlphaVariants
>(
  colors: T,
  transform: (value: string, key: string, variant: number) => string = (x) => x,
  variants: U = defaultAlphaVariants as U,
) {
  const alphaColors = Object.keys(colors).reduce(
    (obj, key: string) => {
      variants.forEach((i: number) => {
        obj[`${key}-a${i}`] = transform(colors[key], key, i)
      })

      return obj
    },

    { ...colors } as ColorsGuard,
  )

  type ColorKeys = keyof T

  type Colors = {
    [key in ColorKeys]: string
  }

  type AlphaVariantKeys = `${Extract<
    ColorKeys,
    string
  >}-a${typeof variants[number]}`

  type AlphaVariants = {
    [key in AlphaVariantKeys]: string
  }

  return alphaColors as Colors & AlphaVariants
}

export function generateHexAlphaVariants<
  T extends ColorsGuard,
  U extends AlphaVariants | DefaultAlphaVariants = DefaultAlphaVariants
>(colors: T, variants: U = defaultAlphaVariants as U) {
  return generateAlphaVariants(
    colors,
    (value, _, variant) =>
      `${value}${Math.round((variant / 100) * 255).toString(16)}`,
    variants,
  )
}

const defaultTones = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

export function aliasColor(
  alias: string,
  color: string,
  tones: number[] = defaultTones,
  variants: number[] = (defaultAlphaVariants as unknown) as number[],
): Record<string, (props: IProps) => unknown> {
  return tones.reduce((obj, tone) => {
    obj[`${alias}-${tone}`] = th.color(`${color}-${tone}`)
    variants.forEach((i) => {
      obj[`${alias}-${tone}-a${i}`] = th.color(`${color}-${tone}-a${i}`)
    })
    return obj
  }, {} as Record<string, (props: IProps) => unknown>)
}

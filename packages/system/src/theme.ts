import { IProps } from './types'
import { th } from './th'

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
]

function generateAlphaVariants<T>(
  colors: Record<string, T>,
  transform: (value: T, key: string, variant: number) => T = (x) => x,
  variants: number[] = defaultAlphaVariants,
): Record<string, T> {
  return Object.keys(colors).reduce(
    (obj, key) => {
      variants.forEach((i) => {
        obj[`${key}-a${i}`] = transform(colors[key], key, i)
      })
      return obj
    },
    { ...colors },
  )
}

export function generateHexAlphaVariants(
  colors: Record<string, string>,
  variants: number[] = defaultAlphaVariants,
): Record<string, string> {
  return generateAlphaVariants<string>(
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
  variants: number[] = defaultAlphaVariants,
): Record<string, (props: IProps) => unknown> {
  return tones.reduce((obj, tone) => {
    obj[`${alias}-${tone}`] = th.color(`${color}-${tone}`)
    variants.forEach((i) => {
      obj[`${alias}-${tone}-a${i}`] = th.color(`${color}-${tone}-a${i}`)
    })
    return obj
  }, {} as Record<string, (props: IProps) => unknown>)
}

import { is, num, string, negative, getThemeValue } from '@xstyled/util'
import { TransformValue } from './types'

const round = (value: number) => Math.round(value * 10 ** 4) / 10 ** 4

export const unit = (unit: string) => <
  T extends string | number | null | undefined
>(
  value: T,
): string | null =>
  (num(value) && value !== 0 ? `${value}${unit}` : value) as string | null

export const ms = unit('ms')
export const px = unit('px')
export const deg = unit('deg')

interface PxToRemOptions {
  rootFontSize?: number
}

const pxToRem = (value: number, { rootFontSize = 16 }: PxToRemOptions = {}) =>
  round(value / rootFontSize)

export const remPx = <T>(value: T, options?: PxToRemOptions) =>
  num(value) && value !== 0 ? `${pxToRem(value, options)}rem` : value

export const rpx = <T>(value: T, options?: PxToRemOptions) => {
  if (!string(value) || value.length < 4) return value
  const unit = value.slice(-3)
  if (unit !== 'rpx') return value
  const n = Number(value.slice(0, value.length - 3))
  if (n === 0) return 0
  return `${pxToRem(n, options)}rem`
}

export const percent = (n: string | number) =>
  num(n) && n !== 0 && n >= -1 && n <= 1 ? `${round(n * 100)}%` : n

function toNegative(value: string | number) {
  if (string(value)) return `-${value}`
  return value * -1
}

export const transformNegative: TransformValue<any, any> = (
  _,
  { rawValue, variants, props },
) => {
  if (string(rawValue)) {
    const neg = rawValue.startsWith('-')
    const absoluteValue = neg ? rawValue.substr(1) : rawValue
    const variantValue = getThemeValue(props, absoluteValue, variants)
    const value = is(variantValue) ? variantValue : absoluteValue
    return neg ? toNegative(value) : value
  }
  const abs = Math.abs(rawValue)
  const neg = negative(rawValue)
  // @ts-ignore
  const value = is(variants && variants[abs]) ? variants[abs] : abs
  return neg ? toNegative(value) : value
}

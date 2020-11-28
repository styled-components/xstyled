import { num, string } from '@xstyled/util'

const round = (value: number) => Math.round(value * 10 ** 4) / 10 ** 4

export const unit = (unit: string) => <
  T extends string | number | null | undefined
>(
  value: T,
): string | null =>
  (num(value) && value !== 0 ? `${value}${unit}` : value) as string | null

export const ms = unit('ms')

export const px = unit('px')

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

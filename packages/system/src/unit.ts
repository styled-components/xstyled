import { num, string } from '@xstyled/util'

const round = (value: number) => Math.round(value * 10 ** 4) / 10 ** 4

export const unit = (unit: string) => <
  T extends string | number | null | undefined
>(
  value: T,
): string | null =>
  (num(value) && value !== 0 ? `${value}${unit}` : value) as string | null

export const px = unit('px')

const pxToRem = (value: number) => round(value / 16)

export const remPx = <T>(value: T) =>
  num(value) && value !== 0 ? `${pxToRem(value)}rem` : value

export const rpx = <T>(value: T) => {
  if (!string(value) || value.length < 4) return value
  const unit = value.slice(-3)
  if (unit !== 'rpx') return value
  const n = Number(value.slice(0, value.length - 3))
  if (n === 0) return 0
  return `${pxToRem(n)}rem`
}

export const percent = (n: string | number) =>
  num(n) && n !== 0 && n >= -1 && n <= 1 ? `${round(n * 100)}%` : n

import { num, string } from './util'

const round = value => Math.round(value * 10 ** 4) / 10 ** 4

export const unit = unit => value =>
  num(value) && value !== 0 ? `${value}${unit}` : value
export const px = unit('px')
export const rpx = value => {
  if (!string(value) || value.length < 4) return value
  const unit = value.slice(-3)
  if (unit !== 'rpx') return value
  const n = Number(value.slice(0, value.length - 3))
  if (n === 0) return 0
  return `${round(n / 16)}rem`
}
export const rpxPx = value => px(rpx(value))

export const percent = n =>
  n !== 0 && n >= -1 && n <= 1 ? `${round(n * 100)}%` : rpxPx(n)

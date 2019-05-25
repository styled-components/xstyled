import { num } from './util'

export const unit = unit => value =>
  num(value) && value !== 0 ? `${value}${unit}` : value
export const px = unit('px')
export const percent = n =>
  n !== 0 && n >= -1 && n <= 1 ? `${n * 100}%` : px(n)

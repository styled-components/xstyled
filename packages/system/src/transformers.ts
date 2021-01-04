import { num } from '@xstyled/util'
import { remPx, rpx } from './unit'

export const rpxTransformers = {
  px: <T>(value: T) => remPx(rpx(value)),
  border: <T>(n: T) => (num(n) && n > 0 ? `${remPx(n)} solid` : n),
}

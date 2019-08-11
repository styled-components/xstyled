import { num } from '@xstyled/util'
import { remPx, rpx } from './unit'

export const rpxTransformers = {
  px: value => remPx(rpx(value)),
  border: n => (num(n) && n > 0 ? `${remPx(n)} solid` : n),
}

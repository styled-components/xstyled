import { num } from './util'
import { remPx, rpx } from './unit'

export const rpxTransformer = {
  px: value => remPx(rpx(value)),
  border: n => (num(n) && n > 0 ? `${remPx(n)} solid` : n),
}

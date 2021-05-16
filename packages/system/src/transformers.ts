import { num } from '@xstyled/util'
import { CSSScalar } from './types'
import { remPx, rpx } from './unit'

export const rpxTransformers = {
  px: (value: CSSScalar): CSSScalar => remPx(rpx(value)),
  border: (value: CSSScalar): CSSScalar =>
    num(value) && value > 0 ? `${remPx(value)} solid` : value,
}

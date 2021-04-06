import { num } from '@xstyled/util'
import { StyleScalarValue } from './types'
import { remPx, rpx } from './unit'

export const rpxTransformers = {
  px: (value: StyleScalarValue): StyleScalarValue => remPx(rpx(value)),
  border: (value: StyleScalarValue): StyleScalarValue =>
    num(value) && value > 0 ? `${remPx(value)} solid` : value,
}

import { themeGetter } from '../style'
import { px, ms, deg, rpx, percent } from '../unit'

export type PxGetter = number | string
export const getPx = themeGetter<PxGetter>({
  name: 'px',
  transform: (value: PxGetter, { props }) => {
    const rootFontSize = props?.theme?.settings?.rootFontSize ?? undefined
    const num = Number(value)
    return px(rpx(Number.isNaN(num) ? value : num, { rootFontSize }))
  },
})

export type DurationGetter = number | string
export const getDuration = themeGetter<DurationGetter>({
  name: 'duration',
  transform: (value: number | string) => {
    const num = Number(value)
    return ms(Number.isNaN(num) ? value : num)
  },
})

export type AngleGetter = number | string
export const getAngle = themeGetter<AngleGetter>({
  name: 'angle',
  transform: (value: number | string) => {
    const num = Number(value)
    return deg(Number.isNaN(num) ? value : num)
  },
})

export type PercentGetter = number | string
export const getPercent = themeGetter<PercentGetter>({
  name: 'percent',
  transform: percent,
  compose: getPx,
})

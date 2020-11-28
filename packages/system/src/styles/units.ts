import { themeGetter } from '../style'
import { px, ms, rpx, percent } from '../unit'

export const getPx = themeGetter({
  name: 'px',
  transform: (value: number | string, { props }) => {
    const rootFontSize = props?.theme?.settings?.rootFontSize ?? undefined
    const num = Number(value)
    return px(rpx(Number.isNaN(num) ? value : num, { rootFontSize }))
  },
})

export const getDuration = themeGetter({
  name: 'duration',
  transform: (value: number | string) => {
    const num = Number(value)
    return ms(Number.isNaN(num) ? value : num)
  },
})

export const getPercent = themeGetter({
  name: 'percent',
  transform: percent,
  compose: getPx,
})

import { themeGetter } from '../style'
import { px, rpx, percent } from '../unit'

export const getPx = themeGetter({
  name: 'px',
  transform: (value: number | string, { props }) => {
    const rootFontSize = props?.theme?.settings?.rootFontSize ?? undefined
    const num = Number(value)
    return px(rpx(Number.isNaN(num) ? value : num, { rootFontSize }))
  },
})

export const getPercent = themeGetter({
  name: 'percent',
  transform: percent,
  compose: getPx,
})

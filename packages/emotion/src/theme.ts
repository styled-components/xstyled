import { useMemo } from 'react'
import { useTheme } from '@emotion/react'
import { th } from '@xstyled/system'

export { useTheme }

const createUseGetter = (getter: Function) => (
  value: any,
  defaultValue?: any,
) => {
  const theme = useTheme()
  return useMemo(() => getter(value, defaultValue)({ theme }), [
    value,
    defaultValue,
    theme,
  ])
}

export const useTh = createUseGetter(th)

export const useAngle = createUseGetter(th.angle)
export const useAnimation = createUseGetter(th.animation)
export const useBorder = createUseGetter(th.border)
export const useBorderColor = createUseGetter(th.borderColor)
export const useBorderStyle = createUseGetter(th.borderStyle)
export const useBorderWidth = createUseGetter(th.borderWidth)
export const useColor = createUseGetter(th.color)
export const useDuration = createUseGetter(th.duration)
export const useFont = createUseGetter(th.font)
export const useFontSize = createUseGetter(th.fontSize)
export const useFontWeight = createUseGetter(th.fontWeight)
export const useInset = createUseGetter(th.inset)
export const useLetterSpacing = createUseGetter(th.letterSpacing)
export const useLineHeight = createUseGetter(th.lineHeight)
export const usePercent = createUseGetter(th.percent)
export const usePx = createUseGetter(th.px)
export const useRadius = createUseGetter(th.radius)
export const useRingWidth = createUseGetter(th.ringWidth)
export const useShadow = createUseGetter(th.shadow)
export const useSize = createUseGetter(th.size)
export const useSpace = createUseGetter(th.space)
export const useTimingFunctions = createUseGetter(th.timingFunctions)
export const useTransform = createUseGetter(th.transform)
export const useTransition = createUseGetter(th.transition)
export const useTransitionProperty = createUseGetter(th.transitionProperty)
export const useZIndex = createUseGetter(th.zIndex)

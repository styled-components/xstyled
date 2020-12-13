import { useMemo, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { th } from '@xstyled/system'

export const useTheme = () => {
  return useContext(ThemeContext)
}

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
export const useColor = createUseGetter(th.color)
export const usePx = createUseGetter(th.px)
export const usePercent = createUseGetter(th.percent)
export const useRadius = createUseGetter(th.radius)
export const useBorder = createUseGetter(th.border)
export const useBorderWidth = createUseGetter(th.borderWidth)
export const useBorderStyle = createUseGetter(th.borderStyle)
export const useBorderColor = createUseGetter(th.borderColor)
export const useShadow = createUseGetter(th.shadow)
export const useSize = createUseGetter(th.size)
export const useZIndex = createUseGetter(th.zIndex)
export const useSpace = createUseGetter(th.space)
export const useFont = createUseGetter(th.font)
export const useFontSize = createUseGetter(th.fontSize)
export const useLineHeight = createUseGetter(th.lineHeight)
export const useFontWeight = createUseGetter(th.fontWeight)
export const useLetterSpacing = createUseGetter(th.letterSpacing)
export const useTransition = createUseGetter(th.transition)
export const useInset = createUseGetter(th.inset)
export const useAnimation = createUseGetter(th.animation)
export const useTimingFunction = createUseGetter(th.timingFunction)
export const useTransform = createUseGetter(th.transform)
export const useTransitionProperty = createUseGetter(th.transitionProperty)

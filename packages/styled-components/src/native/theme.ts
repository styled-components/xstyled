import { useContext, ContextType } from 'react'
import { ThemeContext } from 'styled-components/native'
import { createUseGetter } from '@xstyled/core'
import { th } from '@xstyled/system'

export const useTheme = (): ContextType<typeof ThemeContext> => {
  return useContext(ThemeContext)
}

export const useTh = createUseGetter(th, useTheme)

export const useAngle = createUseGetter(th.angle, useTheme)
export const useBorder = createUseGetter(th.border, useTheme)
export const useBorderColor = createUseGetter(th.borderColor, useTheme)
export const useBorderStyle = createUseGetter(th.borderStyle, useTheme)
export const useBorderWidth = createUseGetter(th.borderWidth, useTheme)
export const useColor = createUseGetter(th.color, useTheme)
export const useDuration = createUseGetter(th.duration, useTheme)
export const useFont = createUseGetter(th.font, useTheme)
export const useFontSize = createUseGetter(th.fontSize, useTheme)
export const useFontWeight = createUseGetter(th.fontWeight, useTheme)
export const useInset = createUseGetter(th.inset, useTheme)
export const useLetterSpacing = createUseGetter(th.letterSpacing, useTheme)
export const useLineHeight = createUseGetter(th.lineHeight, useTheme)
export const usePercent = createUseGetter(th.percent, useTheme)
export const usePx = createUseGetter(th.px, useTheme)
export const useRadius = createUseGetter(th.radius, useTheme)
export const useRingWidth = createUseGetter(th.ringWidth, useTheme)
export const useShadow = createUseGetter(th.shadow, useTheme)
export const useSize = createUseGetter(th.size, useTheme)
export const useSpace = createUseGetter(th.space, useTheme)

export const useZIndex = createUseGetter(th.zIndex, useTheme)

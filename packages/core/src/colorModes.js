/* eslint-disable react/no-danger */
/* eslint-env browser */
import React from 'react'
import {
  toCustomPropertiesDeclarations,
  toCustomPropertiesReferences,
} from './customProperties'

const STORAGE_KEY = 'xstyled-color-mode'

const storage = {
  get: () =>
    typeof window === 'undefined'
      ? null
      : window.localStorage.getItem(STORAGE_KEY),
  set: value => window.localStorage.setItem(STORAGE_KEY, value),
  clear: () => window.localStorage.removeItem(STORAGE_KEY),
}

const COLOR_MODE_CLASS_PREFIX = 'xstyled-color-mode-'
const getColorModeClassName = mode => `${COLOR_MODE_CLASS_PREFIX}${mode}`

const XSTYLED_COLORS_PREFIX = 'xstyled-colors'
const SYSTEM_MODES = ['light', 'dark']

function getModeTheme(theme, mode) {
  return {
    ...theme,
    colors: { ...theme.colors, ...theme.colors.modes[mode] },
  }
}

const getMediaQuery = query => `@media ${query}`
const getColorModeQuery = mode => `(prefers-color-scheme: ${mode})`

function hasColorModes(theme) {
  return theme && theme.colors && theme.colors.modes
}

function hasCustomPropertiesEnabled(theme) {
  return (
    theme &&
    (theme.useCustomProperties === undefined || theme.useCustomProperties)
  )
}

function hasMediaQueryEnabled(theme) {
  return (
    theme &&
    (theme.useColorSchemeMediaQuery === undefined ||
      theme.useColorSchemeMediaQuery)
  )
}

function getInitialColorModeName(theme) {
  return theme.initialColorModeName || 'default'
}

function getDefaultColorModeName(theme) {
  return theme.defaultColorModeName || getInitialColorModeName(theme)
}

export function createColorStyles(theme, { targetSelector = 'body' } = {}) {
  if (!hasColorModes(theme)) return null
  const { modes, ...colors } = theme.colors
  let styles = toCustomPropertiesDeclarations(
    colors,
    XSTYLED_COLORS_PREFIX,
    theme,
  )

  function getModePropertiesDeclarations(mode) {
    const modeTheme = getModeTheme(theme, mode)
    const { modes, ...colors } = modeTheme.colors
    return toCustomPropertiesDeclarations(
      { ...colors, ...modes[mode] },
      XSTYLED_COLORS_PREFIX,
      modeTheme,
    )
  }

  if (theme.useColorSchemeMediaQuery !== false) {
    SYSTEM_MODES.forEach(mode => {
      if (modes[mode]) {
        const mediaQuery = getMediaQuery(getColorModeQuery(mode))
        styles += `${mediaQuery}{${getModePropertiesDeclarations(mode)}}`
      }
    })
  }

  const initialModeName = getInitialColorModeName(theme)
  ;[initialModeName, ...Object.keys(modes)].forEach(mode => {
    const key = `&.${getColorModeClassName(mode)}`
    styles += `${key}{${getModePropertiesDeclarations(mode)}}`
  })

  return `${targetSelector}{${styles}}`
}

function getSystemModeMql(mode) {
  if (typeof window === 'undefined' || window.matchMedia === undefined) {
    return null
  }
  const query = getColorModeQuery(mode)
  return window.matchMedia(query)
}

function useSystemMode(theme) {
  const configs = React.useMemo(() => {
    if (!hasMediaQueryEnabled(theme)) return []
    return SYSTEM_MODES.map(mode => {
      if (!theme.colors.modes[mode]) return null
      const mql = getSystemModeMql(mode)
      return mql ? { mode, mql } : null
    }).filter(Boolean)
  }, [theme])

  const [systemMode, setSystemMode] = React.useState(() => {
    const config = configs.find(config => config.mql.matches)
    return config ? config.mode : null
  })

  React.useEffect(() => {
    const cleans = configs
      .filter(({ mql }) => mql.addListener && mql.removeListener)
      .map(({ mode, mql }) => {
        const handler = ({ matches }) => {
          if (matches) {
            setSystemMode(mode)
          } else {
            setSystemMode(previousMode => (previousMode === mode ? null : mode))
          }
        }
        mql.addListener(handler)
        return () => mql.removeListener(handler)
      })
    return () => cleans.forEach(clean => clean())
  })

  return systemMode
}

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect

export function useColorModeState(theme, { target } = {}) {
  const systemMode = useSystemMode(theme)
  const defaultColorMode = getDefaultColorModeName(theme)
  const initialColorMode = getInitialColorModeName(theme)
  const [mode, setMode] = React.useState(() => {
    if (!hasColorModes(theme)) return null
    return defaultColorMode
  })

  // Add mode className
  const customPropertiesEnabled = hasCustomPropertiesEnabled(theme)

  const manualSetRef = React.useRef(false)
  const manuallySetMode = React.useCallback(value => {
    manualSetRef.current = true
    setMode(value)
  }, [])

  // Set initial color mode in lazy
  useIsomorphicLayoutEffect(() => {
    if (!hasColorModes(theme)) return
    const storedMode = storage.get()
    const initialMode = storedMode || systemMode || defaultColorMode
    if (mode !== initialMode) {
      setMode(storedMode || systemMode || defaultColorMode)
    }
  }, [])

  // Store mode preference
  useIsomorphicLayoutEffect(() => {
    if (manualSetRef.current) {
      storage.set(mode)
    }
  }, [mode])

  // Sync system mode
  useIsomorphicLayoutEffect(() => {
    const storedMode = storage.get()
    if (storedMode) return
    const targetMode = systemMode || defaultColorMode
    if (targetMode === mode) return
    setMode(targetMode)
  }, [mode, systemMode, defaultColorMode])

  // Add and remove class names
  useIsomorphicLayoutEffect(() => {
    if (!customPropertiesEnabled) return undefined
    const stored = storage.get()
    const initial = initialColorMode !== mode
    if (!stored && !initial) return undefined
    const className = getColorModeClassName(mode)
    const usedTarget = target || document.body
    usedTarget.classList.add(className)
    return () => {
      usedTarget.classList.remove(className)
    }
  }, [customPropertiesEnabled, target, mode, initialColorMode])

  return [mode, manuallySetMode]
}

export function useColorModeTheme(theme, mode) {
  const customPropertiesTheme = React.useMemo(() => {
    if (!hasCustomPropertiesEnabled(theme)) return null
    if (!hasColorModes(theme)) return theme

    const { modes, ...colors } = theme.colors
    return {
      ...theme,
      colors: {
        ...toCustomPropertiesReferences(colors, XSTYLED_COLORS_PREFIX, theme),
        modes,
      },
      __rawColors: theme.colors,
    }
  }, [theme])

  const swapModeTheme = React.useMemo(() => {
    if (hasCustomPropertiesEnabled(theme)) return null
    if (!hasColorModes(theme)) return theme

    if (mode === getInitialColorModeName(theme)) {
      return { ...theme, __colorMode: mode }
    }

    return {
      ...theme,
      colors: {
        ...theme.colors,
        ...theme.colors.modes[mode],
      },
      __colorMode: mode,
      __rawColors: theme.colors,
    }
  }, [theme, mode])

  return customPropertiesTheme || swapModeTheme
}

export const ColorModeContext = React.createContext()

export function useColorMode() {
  const colorModeState = React.useContext(ColorModeContext)

  if (!colorModeState) {
    throw new Error(`[useColorMode] requires the ColorModeProvider component`)
  }

  return colorModeState
}

export function createColorModeProvider({
  ThemeContext,
  ThemeProvider,
  ColorModeStyle,
}) {
  function ColorModeProvider({ children, target, targetSelector }) {
    const theme = React.useContext(ThemeContext)
    if (!theme) {
      throw new Error(
        '[ColorModeProvider] requires ThemeProvider upper in the tree',
      )
    }
    const colorState = useColorModeState(theme, { target })
    const colorModeTheme = useColorModeTheme(theme, colorState[0])
    return (
      <>
        <ColorModeStyle targetSelector={targetSelector} />
        <ThemeProvider theme={colorModeTheme}>
          <ColorModeContext.Provider value={colorState}>
            {children}
          </ColorModeContext.Provider>
        </ThemeProvider>
      </>
    )
  }
  return ColorModeProvider
}

function getInitScript({ target = 'document.body' } = {}) {
  return `(function() { try {
    var mode = localStorage.getItem('${STORAGE_KEY}');
    if (mode) ${target}.classList.add('${COLOR_MODE_CLASS_PREFIX}' + mode);
  } catch (e) {} })();`
}

export function getColorModeInitScriptElement(options) {
  return (
    <script
      key="xstyled-color-mode-init"
      dangerouslySetInnerHTML={{ __html: getInitScript(options) }}
    />
  )
}

export function getColorModeInitScriptTag(options) {
  return `<script>${getInitScript(options)}</script>`
}

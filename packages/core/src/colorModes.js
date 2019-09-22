/* eslint-disable react/no-danger */
/* eslint-env browser */
import React from 'react'
import {
  toCustomPropertiesDeclarations,
  toCustomPropertiesReferences,
} from './customProperties'

const STORAGE_KEY = 'xstyled-color-mode'

const storage = {
  get: () => window.localStorage.getItem(STORAGE_KEY),
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

function detectSystemMode(mode) {
  if (window.matchMedia === undefined) return null
  const query = getColorModeQuery(mode)
  const mql = window.matchMedia(query)
  return mql.matches && mql.media === query
}

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

function getInitialMode(theme) {
  if (!hasColorModes(theme)) return null
  const stored = storage.get()
  if (stored) return stored
  if (hasMediaQueryEnabled(theme) && theme.colors && theme.colors.modes) {
    const systemMode = SYSTEM_MODES.find(mode => {
      if (!theme.colors.modes[mode]) return null
      return detectSystemMode(mode)
    })
    return systemMode || getDefaultColorModeName(theme)
  }
  return getDefaultColorModeName(theme)
}

export function useColorModeState(theme, { target = document.body } = {}) {
  const [mode, setMode] = React.useState(() => getInitialMode(theme))

  // Add mode className
  const customPropertiesEnabled = hasCustomPropertiesEnabled(theme)
  React.useLayoutEffect(() => {
    if (!customPropertiesEnabled) return undefined
    const className = getColorModeClassName(mode)
    target.classList.add(className)
    return () => {
      target.classList.remove(className)
    }
  }, [customPropertiesEnabled, target, mode])

  // Store mode preference
  const changedRef = React.useRef(false)
  React.useEffect(() => {
    if (changedRef.current) {
      storage.set(mode)
    } else {
      changedRef.current = true
    }
  }, [mode])

  return [mode, setMode]
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
      return theme
    }

    return {
      ...theme,
      colors: {
        ...theme.colors,
        ...theme.colors.modes[mode],
      },
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

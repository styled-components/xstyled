/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/no-danger */
/* eslint-env browser */
import * as React from 'react'
import {
  toCustomPropertiesDeclarations,
  toCustomPropertiesReferences,
} from './customProperties'

type ColorModeState = [string | null, (mode: string | null) => void]
type Color = string | ((props: Record<string, unknown>) => Color)
type Colors = Record<string, Color>

interface ITheme {
  useCustomProperties?: boolean
  useColorSchemeMediaQuery?: boolean
  initialColorModeName?: string
  defaultColorModeName?: string
  colors?: Colors & {
    modes?: Record<string, Colors>
  }
}

interface IColorModeTheme extends ITheme {
  colors: Colors & { modes: Record<string, Colors> }
}

const STORAGE_KEY = 'xstyled-color-mode'

const isLocalStorageAvailable: boolean =
  typeof window !== 'undefined' &&
  (() => {
    try {
      const key = 'xstyled-test-key'
      window.localStorage.setItem(key, key)
      window.localStorage.removeItem(key)
      return true
    } catch (err) {
      return false
    }
  })()

interface Storage {
  get(): string | null
  set(value: string): void
  clear(): void
}

const storage: Storage = isLocalStorageAvailable
  ? {
      get: () => window.localStorage.getItem(STORAGE_KEY),
      set: (value: string) => {
        window.localStorage.setItem(STORAGE_KEY, value)
      },
      clear: () => window.localStorage.removeItem(STORAGE_KEY),
    }
  : {
      get: () => null,
      set: () => {},
      clear: () => {},
    }

const COLOR_MODE_CLASS_PREFIX = 'xstyled-color-mode-'
const getColorModeClassName = (mode: string) =>
  `${COLOR_MODE_CLASS_PREFIX}${mode}`

const XSTYLED_COLORS_PREFIX = 'xstyled-colors'
const SYSTEM_MODES = ['light', 'dark']

function getModeTheme(theme: IColorModeTheme, mode: string): IColorModeTheme {
  return {
    ...theme,
    colors: { ...theme.colors, ...theme.colors.modes[mode] },
  }
}

const getMediaQuery = (query: string): string => `@media ${query}`
const getColorModeQuery = (mode: string): string =>
  `(prefers-color-scheme: ${mode})`

function checkHasColorModes(theme: ITheme | null): theme is IColorModeTheme {
  return Boolean(theme && theme.colors && theme.colors.modes)
}

function checkHasCustomPropertiesEnabled(theme: ITheme | null): boolean {
  return Boolean(
    theme &&
      (theme.useCustomProperties === undefined || theme.useCustomProperties),
  )
}

function checkHasMediaQueryEnabled(theme: ITheme | null): boolean {
  return Boolean(
    theme &&
      (theme.useColorSchemeMediaQuery === undefined ||
        theme.useColorSchemeMediaQuery),
  )
}

function getInitialColorModeName(theme: ITheme): string {
  return theme.initialColorModeName || 'default'
}

function getDefaultColorModeName(theme: ITheme): string {
  return theme.defaultColorModeName || getInitialColorModeName(theme)
}

function getUsedColorKeys(modes: Record<string, Record<string, Color>>) {
  let keys: string[] = []
  for (const key in modes) {
    keys = [...keys, ...Object.keys(modes[key])]
  }
  return keys
}

export function createColorStyles(
  theme: ITheme,
  { targetSelector = 'body' } = {},
): string | null {
  if (!checkHasColorModes(theme)) return null

  const { modes, ...colors } = theme.colors
  const colorKeys = getUsedColorKeys(modes)

  let styles = toCustomPropertiesDeclarations(
    colors,
    theme,
    colorKeys,
    XSTYLED_COLORS_PREFIX,
  )

  function getModePropertiesDeclarations(mode: string) {
    const modeTheme = getModeTheme(theme as IColorModeTheme, mode)
    const { modes, ...colors } = modeTheme.colors
    return toCustomPropertiesDeclarations(
      { ...colors, ...modes[mode] },
      modeTheme,
      colorKeys,
      XSTYLED_COLORS_PREFIX,
    )
  }

  if (theme.useColorSchemeMediaQuery !== false) {
    SYSTEM_MODES.forEach((mode) => {
      if (modes[mode]) {
        const mediaQuery = getMediaQuery(getColorModeQuery(mode))
        styles += `${mediaQuery}{${getModePropertiesDeclarations(mode)}}`
      }
    })
  }

  const initialModeName = getInitialColorModeName(theme)
  ;[initialModeName, ...Object.keys(modes)].forEach((mode) => {
    const key = `&.${getColorModeClassName(mode)}`
    styles += `${key}{${getModePropertiesDeclarations(mode)}}`
  })

  return `${targetSelector}{${styles}}`
}

function getSystemModeMql(mode: string) {
  if (typeof window === 'undefined' || window.matchMedia === undefined) {
    return null
  }
  const query = getColorModeQuery(mode)
  return window.matchMedia(query)
}

function useSystemMode(theme: ITheme) {
  const configs: { mode: string; mql: MediaQueryList }[] = React.useMemo(() => {
    if (!checkHasMediaQueryEnabled(theme)) return []
    return SYSTEM_MODES.map((mode) => {
      if (!checkHasColorModes(theme)) return null
      if (!theme.colors.modes[mode]) return null
      const mql = getSystemModeMql(mode)
      return mql ? { mode, mql } : null
    }).filter(Boolean) as { mode: string; mql: MediaQueryList }[]
  }, [theme])

  const [systemMode, setSystemMode] = React.useState(() => {
    const config = configs.find((config) => config.mql.matches)
    return config ? config.mode : null
  })

  React.useEffect(() => {
    const cleans = configs.map(({ mode, mql }) => {
      const handler = ({ matches }: MediaQueryListEvent) => {
        if (matches) {
          setSystemMode(mode)
        } else {
          setSystemMode((previousMode) => (previousMode === mode ? null : mode))
        }
      }
      mql.addEventListener('change', handler)
      return () => mql.removeEventListener('change', handler)
    })
    return () => cleans.forEach((clean) => clean())
  })

  return systemMode
}

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect

export function useColorModeState(
  theme: ITheme,
  { target }: { target?: Element } = {},
): ColorModeState {
  const systemMode = useSystemMode(theme)
  const defaultColorMode = getDefaultColorModeName(theme)
  const initialColorMode = getInitialColorModeName(theme)
  const [mode, setMode] = React.useState(() => {
    if (!checkHasColorModes(theme)) return null
    return defaultColorMode
  })

  // Add mode className
  const customPropertiesEnabled = checkHasCustomPropertiesEnabled(theme)

  const manualSetRef = React.useRef(false)
  const manuallySetMode = React.useCallback((value) => {
    manualSetRef.current = true
    setMode(value)
  }, [])

  // Set initial color mode in lazy
  useIsomorphicLayoutEffect(() => {
    if (!checkHasColorModes(theme)) return
    const storedMode = storage.get()
    const initialMode = storedMode || systemMode || defaultColorMode
    if (mode !== initialMode) {
      setMode(storedMode || systemMode || defaultColorMode)
    }
  }, [])

  // Store mode preference
  useIsomorphicLayoutEffect(() => {
    if (manualSetRef.current) {
      if (mode) {
        storage.set(mode)
      } else {
        storage.clear()
      }
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
    if (!mode) return undefined
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

export function useColorModeTheme(
  theme: ITheme,
  mode: string | null,
): ITheme | null {
  const [initialMode] = React.useState(mode)
  const customPropertiesTheme = React.useMemo(() => {
    if (!initialMode) return null
    if (!checkHasCustomPropertiesEnabled(theme)) return null
    if (!checkHasColorModes(theme)) return theme
    const { modes, ...colors } = theme.colors
    const colorKeys = getUsedColorKeys(modes)

    return {
      ...theme,
      colors: {
        ...colors,
        ...toCustomPropertiesReferences(
          colors,
          theme,
          colorKeys,
          XSTYLED_COLORS_PREFIX,
        ),
        modes,
      },
      __rawColors: theme.colors,
    }
  }, [initialMode, theme])

  const swapModeTheme = React.useMemo(() => {
    if (!mode) return null
    if (checkHasCustomPropertiesEnabled(theme)) return null
    if (!checkHasColorModes(theme)) return theme

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

  return (customPropertiesTheme || swapModeTheme) as ITheme
}

export const ColorModeContext = React.createContext<ColorModeState | null>(null)

export function useColorMode(): ColorModeState {
  const colorModeState = React.useContext(ColorModeContext)

  if (!colorModeState) {
    throw new Error(`[useColorMode] requires the ColorModeProvider component`)
  }

  return colorModeState
}

export interface ColorModeProviderProps {
  children: React.ReactNode
  target?: Element
  targetSelector?: string
}

export function createColorModeProvider({
  ThemeContext,
  ThemeProvider,
  ColorModeStyle,
}: {
  ThemeContext: React.Context<any>
  ThemeProvider: React.ComponentType<any>
  ColorModeStyle: React.ComponentType<any>
}): React.FC<ColorModeProviderProps> {
  function ColorModeProvider({
    children,
    target,
    targetSelector,
  }: ColorModeProviderProps) {
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

interface GetInitScriptOptions {
  target?: string
}

function getInitScript({
  target = 'document.body',
}: GetInitScriptOptions = {}) {
  return `(function() { try {
    var mode = localStorage.getItem('${STORAGE_KEY}');
    if (mode) ${target}.classList.add('${COLOR_MODE_CLASS_PREFIX}' + mode);
  } catch (e) {} })();`
}

export function getColorModeInitScriptElement(
  options?: GetInitScriptOptions,
): JSX.Element {
  return (
    <script
      key="xstyled-color-mode-init"
      dangerouslySetInnerHTML={{ __html: getInitScript(options) }}
    />
  )
}

export function getColorModeInitScriptTag(
  options?: GetInitScriptOptions,
): string {
  return `<script>${getInitScript(options)}</script>`
}

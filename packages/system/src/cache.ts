import { ITheme } from './types'

export interface XCache<T> {
  has(key: unknown): boolean
  set(key: unknown, value: T): void
  get(key: unknown): T | undefined
}

interface ThemeCache {
  [key: string]: XCache<any>
}

const cacheSupported: boolean = typeof Map !== 'undefined'

const caches = cacheSupported ? new Map<string, ThemeCache>() : null

const getThemeCache = (theme: ITheme): ThemeCache | null => {
  if (caches === null) return null
  const stringifiedTheme = JSON.stringify(theme)
  if (caches.has(stringifiedTheme)) return caches.get(stringifiedTheme) || null
  const cache = {}
  caches.set(stringifiedTheme, cache)
  return cache
}

const noopCache: XCache<any> = {
  has: () => false,
  set: () => undefined,
  get: () => undefined,
}

export const getCache = <T>(
  theme: ITheme | undefined,
  namespace: string,
): XCache<T> => {
  if (!theme) return noopCache
  const cache = getThemeCache(theme)
  if (!cache || !theme) return noopCache
  cache[namespace] = cache[namespace] || new Map()
  return cache[namespace]
}

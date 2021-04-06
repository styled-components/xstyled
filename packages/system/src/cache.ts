import { ITheme } from './types'

export interface XCache<T> {
  has(key: unknown): boolean
  set(key: unknown, value: T): void
  get(key: unknown): T | undefined
}

interface ThemeCache {
  [key: string]: XCache<any>
}

const cacheSupported: boolean =
  typeof Map !== 'undefined' && typeof WeakMap !== 'undefined'

const caches = cacheSupported ? new WeakMap<ITheme, ThemeCache>() : null

const getThemeCache = (theme: ITheme): ThemeCache | null => {
  if (caches === null) return null
  if (caches.has(theme)) return caches.get(theme) || null
  const cache = {}
  caches.set(theme, cache)
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

/* eslint-disable no-continue, no-underscore-dangle, no-restricted-syntax, guard-for-in, no-multi-assign */
import {
  is,
  num,
  func,
  string,
  obj,
  getThemeValue,
  warn,
  merge,
  assign,
  cascade,
} from '@xstyled/util'
import { getBreakpoints, getBreakpointMin, mediaMinWidth } from './media'
import { getThemeStates } from './states'
import {
  IProps,
  IStyles,
  IVariants,
  ITheme,
  StyleGetter,
  ThemeGetter,
  TransformValue,
  StyleGenerator,
  Mixin,
} from './types'

const cacheSupported =
  typeof Map !== 'undefined' && typeof WeakMap !== 'undefined'

type ThemeCache = Record<string, any>
const caches = cacheSupported ? new WeakMap<ITheme, ThemeCache>() : null

function getThemeCache(theme: ITheme) {
  if (caches === null) return null
  if (caches.has(theme)) return caches.get(theme)
  const cache = {}
  caches.set(theme, cache)
  return cache
}

const noopCache = {
  has: () => false,
  set: () => {},
  get: () => {},
}

function getCacheNamespace(theme: ITheme, namespace: string) {
  if (!theme) return noopCache
  const cache = getThemeCache(theme)
  if (!cache || !theme) return noopCache
  cache[namespace] = cache[namespace] || new Map()
  return cache[namespace]
}

let themeGetterId = 0
const SPACES = /\s+/
export const themeGetter = <TValueType>({
  name,
  transform: defaultTransform,
  key,
  defaultVariants,
  compose,
  shorthand,
}: {
  name?: string
  key?: string
  transform?: TransformValue<TValueType>
  defaultVariants?: IVariants
  compose?: ThemeGetter
  shorthand?: boolean
}): ThemeGetter<TValueType> => {
  const id = themeGetterId++
  const getter = (value: any, defaultValue?: any) => (props: IProps) => {
    let res = value
    if (!string(value) && !num(value) && value !== true) return res
    const cacheKey = `${value}-${defaultValue}`
    const cache = getCacheNamespace(props.theme, `__themeGetter${id}`)
    if (cache.has(cacheKey)) return cache.get(cacheKey)

    const getValue = (value: any) => {
      const localDefaultValue = is(defaultValue) ? defaultValue : value
      let res: any = value
      let variants = is(key) ? getThemeValue(props, key) : null
      variants = is(variants) ? variants : defaultVariants
      if (is(variants)) {
        // @ts-ignore
        res = getThemeValue(props, value === true ? 'default' : value, variants)
        res = Array.isArray(res) ? res.join(',') : res
      }
      let rawValue: any = value
      if (!is(res)) {
        rawValue = localDefaultValue
        res = localDefaultValue
      }
      const transform =
        (name && props.theme && props.theme.transformers
          ? props.theme.transformers[name]
          : null) || defaultTransform
      if (transform) {
        res = transform(res, {
          rawValue,
          variants,
          props,
        })
      }
      return compose ? compose(res)(props) : res
    }

    if (shorthand && string(value)) {
      const values = value.split(SPACES)
      // @ts-ignore
      res = values.map((value: string) => getValue(value)).join(' ')
    } else {
      res = getValue(value)
    }

    cache.set(cacheKey, res)
    return res
  }
  getter.meta = { name, transform: defaultTransform }
  return getter
}

export function createStyleGenerator(
  getStyle: StyleGetter,
  props: string[],
  generators?: StyleGenerator[],
): StyleGenerator {
  const generator = (getStyle as unknown) as StyleGenerator
  generator.meta = {
    props,
    getStyle: generator,
    generators,
  }
  generator.apply = (values: object) => ({ theme }: IProps) =>
    generator({ theme, ...values })
  return generator
}

function getStates(props: IProps) {
  const breakpoints = getBreakpoints(props)
  const medias: { [key: string]: string | null } = {}
  for (const breakpoint in breakpoints) {
    medias[breakpoint] = mediaMinWidth(
      getBreakpointMin(breakpoints, breakpoint),
    )
  }
  return { ...medias, ...getThemeStates(props) }
}

function getCachedStates(props: IProps, cache: ThemeCache) {
  if (cache.has('_states')) {
    return cache.get('_states')
  }
  const states = getStates(props)
  cache.set('_states', states)
  return states
}

export function reduceStates(
  props: IProps,
  values: { [key: string]: any },
  getStyle: (value: any) => IStyles | null,
  cache?: ThemeCache,
): IStyles {
  const states = cache ? getCachedStates(props, cache) : getStates(props)
  let styles: IStyles = {}
  for (const value in values) {
    const style = getStyle(values[value])
    if (style === null) continue
    const state = states[value]
    if (state === undefined) continue
    if (state === null) {
      styles = merge(styles, style)
    } else {
      styles[state] = styles[state] ? assign(styles[state], style) : style
    }
  }
  return styles
}

function styleFromValue(
  mixin: Mixin,
  value: any,
  props: IProps,
  themeGet: ThemeGetter,
  cache: ThemeCache,
) {
  if (obj(value)) return null
  if (cache.has(value)) return cache.get(value)
  const computedValue = themeGet(value)(props)
  const style = cascade(mixin(computedValue), props)
  cache.set(value, style)
  return style
}

function getStyleFactory(
  prop: string,
  mixin: Mixin,
  themeGet: ThemeGetter,
): StyleGetter {
  return function getStyle(props: IProps) {
    const fromValue = (value: any) => {
      if (!is(value)) return null
      const cache = getCacheNamespace(props.theme, prop)

      if (obj(value)) {
        return reduceStates(props, value, fromValue, cache)
      }

      return styleFromValue(mixin, value, props, themeGet, cache)
    }

    return fromValue(props[prop])
  }
}

function indexGeneratorsByProp(styles: StyleGenerator[]) {
  const index: { [key: string]: StyleGenerator } = {}
  for (let i = 0; i < styles.length; i++) {
    const style = styles[i]
    if (style && style.meta) {
      for (let j = 0; j < style.meta.props.length; j++) {
        const prop = style.meta.props[j]
        index[prop] = style
      }
    }
  }
  return index
}

function sortStyles(
  styles: Record<string, unknown>,
  medias: Record<string, string>,
) {
  for (const key in medias) {
    const mediaValue = medias[key]
    const s = styles[mediaValue]
    if (!s) continue
    delete styles[mediaValue]
    styles[mediaValue] = s
  }
  return styles
}

export function compose(...generators: StyleGenerator[]): StyleGenerator {
  let flatGenerators: StyleGenerator[] = []
  generators.forEach((gen) => {
    warn(Boolean(gen), `Undefined generator in "compose" method`)
    if (!gen) return
    if (gen.meta.generators) {
      flatGenerators = [...flatGenerators, ...gen.meta.generators]
    } else {
      flatGenerators.push(gen)
    }
  })

  const generatorsByProp = indexGeneratorsByProp(flatGenerators)

  function getStyle(props: IProps, sort = true) {
    const styles: IStyles = {}

    for (const key in props) {
      const generator = generatorsByProp[key]
      if (generator) {
        const style = generator.meta.getStyle(props, false)
        merge(styles, style)
      }
    }

    if (!sort) return styles

    const medias = getCachedStates(
      props,
      getCacheNamespace(props.theme, '__states'),
    )
    return sortStyles(styles, medias)
  }

  const props = flatGenerators.reduce(
    (allProps, generator) => [...allProps, ...generator.meta.props],
    [] as string[],
  )

  return createStyleGenerator(getStyle, props, generators)
}

type CSSProperty = string | string[] | Mixin

const getMixinFromCSSProperties = (properties?: string | string[]): Mixin => (
  value,
) => {
  if (!string(value) && !num(value)) return null
  if (string(properties)) return { [properties]: value }
  const style: IStyles = {}
  for (const key in properties) {
    style[properties[(key as unknown) as number]] = value
  }
  return style
}

const getMixinFromCSSProperty = (cssProperty: CSSProperty): Mixin => {
  if (func(cssProperty)) return cssProperty
  return getMixinFromCSSProperties(cssProperty)
}

export function style({
  prop,
  cssProperty,
  key,
  transform,
  themeGet,
}: {
  prop: string | string[]
  cssProperty?: CSSProperty
  key?: string
  transform?: TransformValue
  themeGet?: ThemeGetter
  states?: { [key: string]: string }
}): StyleGenerator {
  if (Array.isArray(prop)) {
    const mixin = cssProperty
      ? getMixinFromCSSProperty(cssProperty)
      : cssProperty

    const generators = prop.map((prop) =>
      style({ prop, cssProperty: mixin, key, transform, themeGet }),
    )

    // @ts-ignore
    return compose(...generators)
  }

  const mixin = getMixinFromCSSProperty(cssProperty || [prop])

  themeGet = themeGet || themeGetter({ key, transform })

  const generators: StyleGenerator[] = []
  const getStyle = getStyleFactory(prop, mixin, themeGet)
  const generator = createStyleGenerator(getStyle, [prop])
  generators.push(generator)
  // @ts-ignore
  return compose(...generators)
}

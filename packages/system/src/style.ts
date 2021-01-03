/* eslint-disable no-continue, no-underscore-dangle, no-restricted-syntax, guard-for-in, no-multi-assign */
import {
  is,
  num,
  func,
  string,
  obj,
  getThemeValue,
  warn,
  identity,
  merge,
  assign,
} from '@xstyled/util'
import { getBreakpoints, getBreakpointMin, mediaMinWidth } from './media'
import { defaultStates } from './defaultStates'
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

const defaultStateKeys = Object.keys(
  defaultStates,
) as (keyof typeof defaultStates)[]

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
  return generator
}

function getMedias(props: IProps) {
  const breakpoints = getBreakpoints(props)
  const medias: { [key: string]: string | null } = {}
  for (const breakpoint in breakpoints) {
    medias[breakpoint] = mediaMinWidth(
      getBreakpointMin(breakpoints, breakpoint),
    )
  }
  return medias
}

function getCachedMedias(props: IProps, cache: ThemeCache) {
  if (cache.has('_medias')) {
    return cache.get('_medias')
  }
  const medias = getMedias(props)
  cache.set('_medias', medias)
  return medias
}

export function reduceBreakpoints(
  props: IProps,
  values: { [key: string]: any },
  getStyle: (value: any) => IStyles | null = identity,
  cache?: ThemeCache,
) {
  const medias = cache ? getCachedMedias(props, cache) : getMedias(props)
  let styles: IStyles = {}
  for (const breakpoint in values) {
    const style = getStyle(values[breakpoint])
    if (style === null) continue
    const media = medias[breakpoint]
    if (media === null) {
      styles = merge(styles, style)
    } else {
      styles[media] = styles[media] ? assign(styles[media], style) : style
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
  const style = mixin(computedValue)
  cache.set(value, style)
  return style
}

function getStyleFactory(
  prop: string,
  mixin: Mixin,
  themeGet: ThemeGetter,
): StyleGetter {
  return function getStyle(props: IProps) {
    const value = props[prop]
    if (!is(value)) return null
    const cache = getCacheNamespace(props.theme, prop)

    if (obj(value)) {
      return reduceBreakpoints(
        props,
        value,
        (breakpointValue) =>
          styleFromValue(mixin, breakpointValue, props, themeGet, cache),
        cache,
      )
    }

    return styleFromValue(mixin, value, props, themeGet, cache)
  }
}

function scopeStyleGetter(
  selector: string,
  getStyle: StyleGetter,
): StyleGetter {
  return (props: IProps) => {
    const result = getStyle(props)
    if (result === null) return result
    return { [selector]: result }
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

function sortStyles(styles: Record<string | number, unknown>, props: IProps) {
  const breakpoints = getBreakpoints(props)

  const breakpointsStyles: Record<string | number, unknown> = {}

  for (const key in breakpoints) {
    const min = getBreakpointMin(breakpoints, key)
    const mediaMin = mediaMinWidth(min)
    if (!mediaMin) continue

    const style = styles[mediaMin]
    if (!style) continue
    breakpointsStyles[mediaMin] = style
  }

  return assign(styles, breakpointsStyles)
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

  function getStyle(props: IProps) {
    const styles: IStyles = {}
    for (const key in props) {
      const generator = generatorsByProp[key]
      if (generator) {
        const style = generator.meta.getStyle(props)
        merge(styles, style)
      }
    }

    return sortStyles(styles, props)
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
  states = defaultStates,
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

  const capitalizedProp = prop.charAt(0).toUpperCase() + prop.slice(1)
  const generators: StyleGenerator[] = []
  const stateNames =
    states === defaultStates ? defaultStateKeys : Object.keys(states)
  for (let i = 0; i < stateNames.length; i++) {
    const stateName = stateNames[i]
    const stateProp = `${stateName}${capitalizedProp}`
    const getStyle = scopeStyleGetter(
      states[stateName],
      getStyleFactory(stateProp, mixin, themeGet),
    )
    const generator = createStyleGenerator(getStyle, [stateProp])
    generators.push(generator)
  }
  const getStyle = getStyleFactory(prop, mixin, themeGet)
  const generator = createStyleGenerator(getStyle, [prop])
  generators.push(generator)
  // @ts-ignore
  return compose(...generators)
}

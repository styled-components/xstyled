/* eslint-disable no-continue, no-underscore-dangle, no-restricted-syntax, guard-for-in, no-multi-assign */
import {
  is,
  num,
  string,
  obj,
  getThemeValue,
  warn,
  identity,
  merge,
  assign,
} from '@xstyled/util'
import { getBreakpoints, getBreakpointMin, mediaMinWidth } from './media'
import {
  Props,
  Theme,
  Variants,
  ThemeGetter,
  TransformValue,
  StyleGenerator,
  ExtractThemeProperty,
  VariantsType,
} from './types'

interface Styles {
  [key: string]: any
}

interface ThemeCache {
  [key: string]: any
}

interface StyleGetter {
  (props: Props): any
}

const cacheSupported =
  typeof Map !== 'undefined' && typeof WeakMap !== 'undefined'

const caches = cacheSupported ? new WeakMap<Theme, ThemeCache>() : null

function getThemeCache(theme: Theme) {
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

function getCacheNamespace(theme: Theme, namespace: string) {
  if (!theme) return noopCache
  const cache = getThemeCache(theme)
  if (!cache || !theme) return noopCache
  cache[namespace] = cache[namespace] || new Map()
  return cache[namespace]
}

let themeGetterId = 0
export const themeGetter = <
  TTheme,
  Key extends string,
  TDefaultVariants,
  TThemeProperty extends ExtractThemeProperty<TTheme, Key>,
  TVariants extends TThemeProperty extends Variants
    ? TThemeProperty
    : TDefaultVariants,
  TBaseType = number | string
>({
  name,
  transform: defaultTransform,
  key,
  defaultVariants,
  compose,
}: {
  name?: string
  key?: Key
  transform?: TransformValue<TVariants, TBaseType>
  defaultVariants?: TDefaultVariants
  compose?: ThemeGetter<any, any>
}): ThemeGetter<TVariants, TBaseType> => {
  const id = themeGetterId++
  const getter = (value: VariantsType<TVariants, TBaseType>) => (
    props: Props,
  ) => {
    let res = value
    if (!string(value) && !num(value)) return res
    const cache = getCacheNamespace(props.theme, `__themeGetter${id}`)
    if (cache.has(value)) return cache.get(value)
    let variants = is(key) ? getThemeValue(props, key) : null
    variants = is(variants) ? variants : defaultVariants
    res = is(variants) ? getThemeValue(props, value, variants) : null
    res = is(res) ? res : value
    const transform =
      (name && props.theme && props.theme.transformers
        ? props.theme.transformers[name]
        : null) || defaultTransform
    if (transform) {
      res = transform(res, {
        rawValue: value,
        variants,
        props,
      })
    }
    res = compose ? compose(res)(props) : res
    cache.set(value, res)
    return res
  }
  getter.meta = { name, transform: defaultTransform }
  return getter
}

function styleFromValue(
  cssProperties: string[],
  value: any,
  props: Props,
  themeGet: ThemeGetter<any, any>,
  cache: ThemeCache,
) {
  if (obj(value)) return null
  if (cache.has(value)) return cache.get(value)
  const computedValue = themeGet(value)(props)
  if (!string(computedValue) && !num(computedValue)) return null
  const style: { [key: string]: string | number } = {}
  for (const key in cssProperties) {
    style[cssProperties[key]] = computedValue
  }
  cache.set(value, style)
  return style
}

export function createStyleGenerator<TProps>(
  getStyle: StyleGetter,
  props: string[],
  generators?: StyleGenerator[],
): StyleGenerator<TProps> {
  const generator = getStyle as StyleGenerator<TProps>
  generator.meta = {
    props,
    getStyle: generator,
    generators,
  }
  return generator
}

function getMedias(props: Props) {
  const breakpoints = getBreakpoints(props)
  const medias: { [key: string]: string | null } = {}
  for (const breakpoint in breakpoints) {
    medias[breakpoint] = mediaMinWidth(
      getBreakpointMin(breakpoints, breakpoint),
    )
  }
  return medias
}

function getCachedMedias(props: Props, cache: ThemeCache) {
  if (cache.has('_medias')) {
    return cache.get('_medias')
  }
  const medias = getMedias(props)
  cache.set('_medias', medias)
  return medias
}

export function reduceBreakpoints(
  props: Props,
  values: { [key: string]: any },
  getStyle: (value: any) => Styles | null = identity,
  cache?: ThemeCache,
) {
  const medias = cache ? getCachedMedias(props, cache) : getMedias(props)
  let styles: Styles = {}
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

function getStyleFactory(
  prop: string,
  cssProperties: string[],
  themeGet: ThemeGetter<any, any>,
): StyleGetter {
  return function getStyle(props: Props) {
    const value = props[prop]
    if (!is(value)) return null
    const cache = getCacheNamespace(props.theme, prop)

    if (obj(value)) {
      return reduceBreakpoints(
        props,
        value,
        (breakpointValue) =>
          styleFromValue(
            cssProperties,
            breakpointValue,
            props,
            themeGet,
            cache,
          ),
        cache,
      )
    }

    return styleFromValue(cssProperties, value, props, themeGet, cache)
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

function getMediaOrder(styles: { [key: string]: any }, props: Props) {
  const medias: { [key: string]: any } = {}
  const breakpoints = getBreakpoints(props)
  const stylesProperties = Object.keys(styles)

  for (const key in breakpoints) {
    const breakpoint = breakpoints[key]
    const currentMediaKey = `@media (min-width: ${breakpoint}px)`
    const isValid = stylesProperties.includes(currentMediaKey)

    if (!isValid) continue
    medias[currentMediaKey] = styles[currentMediaKey]
  }

  return medias
}

export function compose<T>(
  ...generators: StyleGenerator<any>[]
): StyleGenerator<T> {
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

  function getStyle(props: Props) {
    const styles: Styles = {}
    for (const key in props) {
      const generator = generatorsByProp[key]
      if (generator) {
        const style = generator.meta.getStyle(props)
        merge(styles, style)
      }
    }

    return assign(getMediaOrder(styles, props), styles)
  }

  const props = flatGenerators.reduce(
    (allProps, generator) => [...allProps, ...generator.meta.props],
    [] as string[],
  )

  return createStyleGenerator(getStyle, props, generators)
}

export function style<TProps extends object>({
  prop,
  cssProperty,
  key,
  transform,
  themeGet,
}: {
  prop: string | string[]
  cssProperty?: string | string[]
  key?: string
  transform?: TransformValue<any, any>
  themeGet?: ThemeGetter<any, any>
}): StyleGenerator<TProps> {
  if (Array.isArray(prop)) {
    const cssProperties = cssProperty
      ? Array.isArray(cssProperty)
        ? cssProperty
        : [cssProperty]
      : prop

    const generators = prop.map((prop) =>
      style({ prop, cssProperty: cssProperties, key, transform, themeGet }),
    )
    // @ts-ignore
    return compose(...generators)
  }

  const cssProperties = cssProperty
    ? Array.isArray(cssProperty)
      ? cssProperty
      : [cssProperty]
    : [prop]

  themeGet = themeGet || themeGetter({ key, transform })
  const getStyle = getStyleFactory(prop, cssProperties, themeGet)
  return createStyleGenerator<TProps>(getStyle, [prop])
}

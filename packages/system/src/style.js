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

const cacheSupported =
  typeof Map !== 'undefined' && typeof WeakMap !== 'undefined'
const caches = cacheSupported ? new WeakMap() : null
function getThemeCache(theme) {
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

function getCacheNamespace(theme, namespace) {
  if (!cacheSupported || !theme) return noopCache
  const cache = getThemeCache(theme)
  cache[namespace] = cache[namespace] || new Map()
  return cache[namespace]
}

let themeGetterId = 0
export const themeGetter = ({
  name,
  transform: defaultTransform,
  key,
  defaultVariants,
  compose,
}) => {
  const id = themeGetterId++
  const getter = (value) => (props) => {
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

function styleFromValue(cssProperties, value, props, themeGet, cache) {
  if (obj(value)) return null
  if (cache.has(value)) return cache.get(value)
  const computedValue = themeGet(value)(props)
  if (!string(computedValue) && !num(computedValue)) return null
  const style = {}
  for (const key in cssProperties) {
    style[cssProperties[key]] = computedValue
  }
  cache.set(value, style)
  return style
}

export function createStyleGenerator(getStyle, props, generators) {
  getStyle.meta = {
    props,
    getStyle,
    generators,
  }
  return getStyle
}

function getMedias(props) {
  const breakpoints = getBreakpoints(props)
  const medias = {}
  for (const breakpoint in breakpoints) {
    medias[breakpoint] = mediaMinWidth(
      getBreakpointMin(breakpoints, breakpoint),
    )
  }
  return medias
}

function getCachedMedias(props, cache) {
  if (cache.has('_medias')) {
    return cache.get('_medias')
  }
  const medias = getMedias(props)
  cache.set('_medias', medias)
  return medias
}

export function reduceBreakpoints(props, values, getStyle = identity, cache) {
  const medias = cache ? getCachedMedias(props, cache) : getMedias(props)
  let styles = {}
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

function getStyleFactory(prop, cssProperties, themeGet) {
  return function getStyle(props) {
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

function indexGeneratorsByProp(styles) {
  const index = {}
  for (let i = 0; i < styles.length; i++) {
    const style = styles[i]
    if (style && style.meta) {
      const propsKeys = Object.keys(style.meta.props)
      for (let j = 0; j < propsKeys.length; j++) {
        const prop = style.meta.props[propsKeys[j]]
        index[prop] = style
      }
    }
  }
  return index
}

export function compose(...generators) {
  let flatGenerators = []
  generators.forEach((gen) => {
    warn(gen, `Undefined generator in "compose" method`)
    if (!gen) return
    if (gen.meta.generators) {
      flatGenerators = [...flatGenerators, ...gen.meta.generators]
    } else {
      flatGenerators.push(gen)
    }
  })

  const generatorsByProp = indexGeneratorsByProp(flatGenerators)

  function getStyle(props) {
    const styles = {}
    for (const key in props) {
      const generator = generatorsByProp[key]
      if (generator) {
        const style = generator.meta.getStyle(props)
        merge(styles, style)
      }
    }
    return styles
  }

  const props = flatGenerators.reduce(
    (keys, generator) => [...keys, ...generator.meta.props],
    [],
  )

  return createStyleGenerator(getStyle, props, generators)
}

export function style({
  prop,
  cssProperty,
  key = null,
  transform = null,
  themeGet = null,
}) {
  const cssProperties = !Array.isArray(cssProperty)
    ? [cssProperty || prop]
    : cssProperty

  if (Array.isArray(prop)) {
    return compose(
      ...prop.map((prop) =>
        style({ prop, cssProperty: cssProperties, key, transform, themeGet }),
      ),
    )
  }

  themeGet = themeGet || themeGetter({ key, transform })
  const getStyle = getStyleFactory(prop, cssProperties, themeGet)
  return createStyleGenerator(getStyle, [prop])
}

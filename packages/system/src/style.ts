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

const states = {
  motionSafe: '@media (prefers-reduced-motion: no-preference)',
  motionReduce: '@media (prefers-reduced-motion: reduce)',
  first: '&:first-child',
  last: '&:last-child',
  odd: '&:odd',
  even: '&:even',
  visited: '&:visited',
  checked: '&:checked',
  focusWithin: '&:focus-within',
  hover: '&:hover',
  focus: '&:focus',
  focusVisible: '&:focus-visible',
  active: '&:active',
  disabled: '&:disabled',
  placeholder: '&::placeholder',
}
const stateNames = Object.keys(states) as (keyof typeof states)[]

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
const SPACES = /\s+/
export const themeGetter = <
  TTheme,
  Key extends string,
  TDefaultVariants = {},
  TThemeProperty extends ExtractThemeProperty<
    TTheme,
    Key
  > = ExtractThemeProperty<TTheme, Key>,
  TVariants = TThemeProperty extends Variants
    ? TThemeProperty
    : TDefaultVariants,
  TBaseType = number | string
>({
  name,
  transform: defaultTransform,
  key,
  defaultVariants,
  compose,
  shorthand,
}: {
  name?: string
  key?: Key
  transform?: TransformValue<TVariants, TBaseType>
  defaultVariants?: TDefaultVariants
  compose?: ThemeGetter<any, any>
  shorthand?: boolean
}): ThemeGetter<TVariants, TBaseType> => {
  const id = themeGetterId++
  const getter = (
    value: VariantsType<TVariants, TBaseType>,
    defaultValue?: any,
  ) => (props: Props) => {
    let res = value
    if (!string(value) && !num(value) && value !== true) return res
    const cacheKey = `${value}-${defaultValue}`
    const cache = getCacheNamespace(props.theme, `__themeGetter${id}`)
    if (cache.has(cacheKey)) return cache.get(cacheKey)

    const getValue = (value: VariantsType<TVariants, TBaseType>) => {
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

function styleFromValue(
  mixin: Mixin,
  value: any,
  props: Props,
  themeGet: ThemeGetter<any, any>,
  cache: ThemeCache,
) {
  if (obj(value)) return null
  if (cache.has(value)) return cache.get(value)
  const computedValue = themeGet(value)(props)
  const style = mixin(props, { value: computedValue })
  cache.set(value, style)
  return style
}

function getStyleFactory(
  prop: string,
  mixin: Mixin,
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
          styleFromValue(mixin, breakpointValue, props, themeGet, cache),
        cache,
      )
    }

    return styleFromValue(mixin, value, props, themeGet, cache)
  }
}

function getStateStyleFactory(
  stateName: keyof typeof states,
  getStyle: StyleGetter,
): StyleGetter {
  return (props: Props) => {
    const result = getStyle(props)
    if (result === null) return result
    return { [states[stateName]]: result }
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

type Mixin = (
  props: Props,
  { value }: { value: any },
) => Styles | null | undefined

type CSSProperty = string | string[] | Mixin

const getMixinFromCSSProperties = (properties?: string | string[]): Mixin => (
  _,
  { value },
) => {
  if (!string(value) && !num(value)) return null
  if (string(properties)) return { [properties]: value }
  const style: Styles = {}
  for (const key in properties) {
    style[properties[(key as unknown) as number]] = value
  }
  return style
}

const getMixinFromCSSProperty = (cssProperty: CSSProperty): Mixin => {
  if (func(cssProperty)) return cssProperty
  return getMixinFromCSSProperties(cssProperty)
}

export function style<TProps extends object>({
  prop,
  cssProperty,
  key,
  transform,
  themeGet,
}: {
  prop: string | string[]
  cssProperty?: CSSProperty
  key?: string
  transform?: TransformValue<any, any>
  themeGet?: ThemeGetter<any, any>
}): StyleGenerator<TProps> {
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
  const generators: StyleGenerator<TProps>[] = []
  for (let i = 0; i < stateNames.length; i++) {
    const stateName = stateNames[i]
    const stateProp = `${stateName}${capitalizedProp}`
    const getStyle = getStateStyleFactory(
      stateName,
      getStyleFactory(stateProp, mixin, themeGet),
    )
    const generator = createStyleGenerator<TProps>(getStyle, [stateProp])
    generators.push(generator)
  }
  const getStyle = getStyleFactory(prop, mixin, themeGet)
  const generator = createStyleGenerator<TProps>(getStyle, [prop])
  generators.push(generator)
  // @ts-ignore
  return compose(...generators)
}

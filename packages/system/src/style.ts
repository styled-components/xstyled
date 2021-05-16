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
import { getCachedVariants, PropsVariants } from './theme'
import { getCache } from './cache'
import {
  CSSScalar,
  CSSObject,
  Props,
  Transformers,
  ThemeNamespace,
  CSSFromProps,
  Theme,
  ThemeGetter,
  TransformValue,
  StyleGenerator,
  Mixin,
  StyleOptions,
  CSSOption,
} from './types'

let themeGetterId = 0

const SPACES = /\s+/

export const themeGetter = <T = any>({
  name,
  transform: defaultTransform,
  key,
  compose,
  shorthand,
}: {
  name?: string
  key?: string
  transform?: TransformValue
  compose?: ThemeGetter
  shorthand?: boolean
}): ThemeGetter<T> => {
  const id = themeGetterId++
  const getter =
    (value: unknown, defaultValue?: CSSScalar) => (props: Props<Theme>) => {
      let res = value
      if (!string(value) && !num(value) && value !== true) {
        return res as CSSScalar
      }
      const cacheKey = `${value}-${defaultValue}`
      const cache = getCache<CSSScalar>(props.theme, `__themeGetter${id}`)
      if (cache.has(cacheKey)) return cache.get(cacheKey)

      const getValue = (value: string | number | true) => {
        const localDefaultValue = is(defaultValue) ? defaultValue : value
        let res: string | number | true | undefined | null = value
        const variants = is(key)
          ? (getThemeValue(props, key) as ThemeNamespace)
          : null
        if (is(variants)) {
          const path =
            value === true
              ? 'default'
              : string(value) || num(value)
              ? value
              : null
          if (is(path)) {
            const fromTheme = getThemeValue(props, path, variants)
            res = Array.isArray(fromTheme)
              ? fromTheme.join(',')
              : (fromTheme as string | number | true)
          }
        }
        let rawValue: unknown = value
        if (!is(res)) {
          rawValue = localDefaultValue
          res = localDefaultValue
        }
        const transform =
          (name && props.theme && props.theme.transformers
            ? (props.theme.transformers as Transformers)[name]
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
        res = values.map((value: string) => getValue(value)).join(' ')
      } else {
        res = getValue(value)
      }

      cache.set(cacheKey, res as CSSScalar)
      return res as CSSScalar
    }
  getter.meta = { name, transform: defaultTransform }
  return getter
}

export const createStyleGenerator = <TProps = {}>(
  getStyle: CSSFromProps<Props<Theme> & TProps>,
  props: string[],
  generators?: StyleGenerator[],
): StyleGenerator<TProps> => {
  const generator = getStyle as unknown as StyleGenerator
  generator.meta = {
    props,
    getStyle: generator,
    generators,
  }
  generator.apply =
    (values: { [key: string]: unknown }) =>
    ({ theme }: Props<Theme>) =>
      generator({ theme, ...values })
  return generator
}

export const reduceVariants = <T extends Props>(
  props: T,
  values: { [key: string]: unknown; [key: number]: unknown },
  getStyle: (value: any) => CSSObject | null | undefined,
): CSSObject => {
  const cache = getCache<PropsVariants<T>>(props.theme, '__variants')
  const variants = getCachedVariants(props, cache)
  let styles = {} as CSSObject
  for (const value in values) {
    const style = getStyle(values[value])
    if (style === null) continue
    const state = variants[value]
    if (state === undefined) continue
    if (state === null) {
      styles = merge(styles, style)
    } else {
      styles[state] = styles[state] ? assign(styles[state], style) : style
    }
  }
  return styles
}

const getStyleFactory = (
  prop: string,
  mixin: Mixin,
  themeGet: ThemeGetter,
): CSSFromProps => {
  return (props: Props<Theme>) => {
    const fromValue = (value: unknown): CSSObject | null | undefined => {
      if (!is(value)) return null
      if (obj(value)) return reduceVariants(props, value, fromValue)
      return cascade(mixin(themeGet(value)(props)), props)
    }

    const value = props[prop]
    if (!is(value)) return null
    const cache = getCache<CSSObject | null | undefined>(props.theme, prop)
    if (cache.has(value)) return cache.get(value)
    const style = fromValue(props[prop])
    cache.set(value, style)
    return style
  }
}

const indexGeneratorsByProp = (
  styles: StyleGenerator[],
): {
  [key: string]: StyleGenerator
} => {
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

const sortStyles = (
  styles: CSSObject,
  variants: { [key: string]: string },
): CSSObject => {
  for (const key in variants) {
    const variant = variants[key]
    const style = styles[variant]
    if (!style) continue
    delete styles[variant]
    styles[variant] = style
  }
  return styles
}

export const compose = <TProps = {}>(
  ...generators: StyleGenerator[]
): StyleGenerator<TProps> => {
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

  const getStyle = (props: Props<Theme>, sort = true) => {
    const styles = {} as CSSObject

    for (const key in props) {
      const generator = generatorsByProp[key]
      if (generator) {
        const style = generator.meta.getStyle(props, false)
        merge(styles, style)
      }
    }

    if (!sort) return styles

    const medias = getCachedVariants(props, getCache(props.theme, '__states'))
    return sortStyles(styles, medias)
  }

  const props = flatGenerators.reduce(
    (allProps, generator) => [...allProps, ...generator.meta.props],
    [] as string[],
  )

  return createStyleGenerator(getStyle, props, generators)
}

const getMixinFromCSSProperties =
  (properties?: string | string[]): Mixin =>
  (value) => {
    if (string(properties)) return { [properties]: value } as CSSObject
    const style = {} as CSSObject
    for (const key in properties) {
      style[properties[key as unknown as number]] = value as CSSObject
    }
    return style
  }

const getMixinFromCSSOption = (css: CSSOption): Mixin => {
  if (func(css)) return css
  return getMixinFromCSSProperties(css)
}

export const style = <TProps = {}>({
  prop,
  css,
  themeGet,
  key,
  transform,
}: StyleOptions): StyleGenerator<TProps> => {
  const getter = themeGet || themeGetter({ key, transform })

  if (Array.isArray(prop)) {
    const mixin = css ? getMixinFromCSSOption(css) : css
    const generators = prop.map((prop) =>
      style({ prop, css: mixin, themeGet: getter }),
    )
    return compose(...generators)
  }

  const props = [prop] as string[]
  const mixin = getMixinFromCSSOption(css || props)

  const generators = [] as StyleGenerator[]
  const getStyle = getStyleFactory(prop as string, mixin, getter)
  const generator = createStyleGenerator(getStyle, props)
  generators.push(generator)
  return compose(...generators)
}

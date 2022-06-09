import { StyleGenerator } from '@xstyled/system'
import { createCssFunction, XCSSFunction } from './createCssFunction'
import { emStyled } from './emStyled'
import type { XStyled } from './types';

const flattenArgs = (arg: any, props: any): any => {
  if (typeof arg === 'function') return flattenArgs(arg(props), props)
  if (Array.isArray(arg)) return arg.map((arg) => flattenArgs(arg, props))
  return arg
}

const getCreateStyle = (
  baseCreateStyle: any,
  css: XCSSFunction,
  generator?: StyleGenerator,
) => {
  if (!generator) {
    return (strings: any, ...args: any) =>
      baseCreateStyle((props: any) =>
        css(strings, ...flattenArgs(args, props))(props),
      )
  }
  return (strings: any, ...args: any) => {
    if (Array.isArray(strings)) {
      // The tagged template literal should receive an equal number of
      // additional separators.
      strings = [...strings, '\n']
    }
    args = [...args, generator]
    return baseCreateStyle((props: any) =>
      css(strings, ...flattenArgs(args, props))(props),
    )
  }
}


const createShouldForwardProp = (
  generator: StyleGenerator,
): ((prop: string) => boolean) => {
  const propSet = new Set<string>(generator.meta.props)
  return (prop: string) =>
    prop !== 'as' && !prop.startsWith('$') && !propSet.has(prop)
}

export const createBaseStyled = <TGen extends StyleGenerator>(
  css: XCSSFunction,
  generator?: TGen,
): XStyled<TGen> => {
  const defaultOptions = generator
    ? {
        shouldForwardProp: createShouldForwardProp(generator),
      }
    : {}
  return ((component: any, options: any) =>
    getCreateStyle(
      emStyled(component, { ...defaultOptions, ...options }),
      css,
      generator,
    )) as XStyled<TGen>
}

export const createStyled = <TGen extends StyleGenerator>(
  generator: TGen,
): XStyled<TGen> => {
  const css = createCssFunction(generator)
  const styled = createBaseStyled(css)
  const xstyled = createBaseStyled(css, generator)
  styled.box = xstyled('div')
  Object.keys(emStyled).forEach((key) => {
    // @ts-ignore
    styled[key] = styled(key)
    // @ts-ignore
    styled[`${key}Box`] = xstyled(key)
  })
  return styled
}

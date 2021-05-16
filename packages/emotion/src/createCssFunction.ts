import { css as emCss, SerializedStyles, Theme } from '@emotion/react'
import { CSSInterpolation } from '@emotion/serialize'
import { StyleGenerator } from '@xstyled/system'
import { createTransform } from '@xstyled/core'

const styleToString = (style: any, props: any): any => {
  if (Array.isArray(style))
    return style.reduce((str, style) => str + styleToString(style, props), '')
  if (typeof style === 'function') return styleToString(style(props), props)
  return style
}

interface Props {
  theme?: Theme
}

interface CSSInterpolationFn {
  (props: Props): CSSInterpolation
}

export interface SerializedStylesFn {
  (props: Props): SerializedStyles
}

export interface XCSSFunction {
  (fn: CSSInterpolationFn): SerializedStylesFn
  (...args: CSSInterpolation[]): SerializedStylesFn
  (
    strings: TemplateStringsArray,
    ...rawArgs: CSSInterpolation[]
  ): SerializedStylesFn
  (
    strings: TemplateStringsArray | CSSInterpolation | CSSInterpolationFn,
    ...rawArgs: CSSInterpolation[]
  ): SerializedStylesFn
}

export const createCssFunction = <TGen extends StyleGenerator>(
  generator: TGen,
): XCSSFunction => {
  const transform = createTransform(generator)
  return ((
    strings: TemplateStringsArray | CSSInterpolation | CSSInterpolationFn,
    ...rawArgs: CSSInterpolation[]
  ): SerializedStylesFn => {
    return (props: Props): SerializedStyles => {
      const emCssArgs =
        typeof strings === 'function'
          ? emCss(strings(props))
          : emCss(
              strings as TemplateStringsArray,
              ...rawArgs.map((arg) => {
                // @ts-expect-error
                if (typeof arg === 'function') return arg(props)
                return arg
              }),
            )
      return {
        ...emCssArgs,
        styles: styleToString(transform(emCssArgs.styles), props),
      }
    }
  }) as XCSSFunction
}

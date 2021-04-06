import { css as emCss, SerializedStyles, Theme } from '@emotion/react'
import { CSSInterpolation } from '@emotion/serialize'
import { transform } from '@xstyled/core'

function styleToString(style: any, props: any): any {
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

export function css(fn: CSSInterpolationFn): SerializedStylesFn
export function css(...args: CSSInterpolation[]): SerializedStylesFn
export function css(
  strings: TemplateStringsArray,
  ...rawArgs: CSSInterpolation[]
): SerializedStylesFn
export function css(
  strings: TemplateStringsArray | CSSInterpolation | CSSInterpolationFn,
  ...rawArgs: CSSInterpolation[]
): SerializedStylesFn {
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
}

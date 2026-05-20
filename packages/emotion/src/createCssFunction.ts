import { css as emCss, SerializedStyles, Theme } from '@emotion/react'
import { CSSInterpolation } from '@emotion/serialize'
import { StyleGenerator } from '@xstyled/system'
import { createTransform } from '@xstyled/core'

const styleToString = (style: any, props: any): any => {
  if (Array.isArray(style)) {
    const parts: string[] = []
    for (let i = 0; i < style.length; i++) {
      parts.push(styleToString(style[i], props))
    }
    return parts.join('')
  }
  if (typeof style === 'function') return styleToString(style(props), props)
  return style
}

interface Props {
  theme?: Theme
}

interface CSSInterpolationFn {
  (props: Props): CSSInterpolation
}

// The interpolation slots in a tagged template (`css\`color: ${x};\``)
// accept either an emotion `CSSInterpolation` or a theme-aware function
// `(props) => CSSInterpolation`. The function form isn't covered by
// emotion's own `CSSInterpolation` type, hence the explicit union.
type XInterpolation = CSSInterpolation | CSSInterpolationFn

export interface SerializedStylesFn {
  (props: Props): SerializedStyles
}

export interface XCSSFunction {
  (fn: CSSInterpolationFn): SerializedStylesFn
  (...args: XInterpolation[]): SerializedStylesFn
  (
    strings: TemplateStringsArray,
    ...rawArgs: XInterpolation[]
  ): SerializedStylesFn
  (
    strings: TemplateStringsArray | CSSInterpolation | CSSInterpolationFn,
    ...rawArgs: XInterpolation[]
  ): SerializedStylesFn
}

export const createCssFunction = <TGen extends StyleGenerator>(
  generator: TGen,
): XCSSFunction => {
  const transform = createTransform(generator)
  return ((
    strings: TemplateStringsArray | CSSInterpolation | CSSInterpolationFn,
    ...rawArgs: XInterpolation[]
  ): SerializedStylesFn => {
    return (props: Props): SerializedStyles => {
      const emCssArgs =
        typeof strings === 'function'
          ? emCss(strings(props))
          : emCss(
              strings as TemplateStringsArray,
              ...rawArgs.map((arg) =>
                typeof arg === 'function' ? arg(props) : arg,
              ),
            )
      return {
        ...emCssArgs,
        styles: styleToString(transform(emCssArgs.styles), props),
      }
    }
  }) as XCSSFunction
}

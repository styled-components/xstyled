import { css as emCss } from '@emotion/react'
import { CSSInterpolation } from '@emotion/serialize'
import { transform } from '@xstyled/core'

function styleToString(style: any, props: any): any {
  if (Array.isArray(style))
    return style.reduce((str, style) => str + styleToString(style, props), '')
  if (typeof style === 'function') return styleToString(style(props), props)
  return style
}

// @ts-ignore
export const css: typeof emCss = (
  strings: TemplateStringsArray,
  ...rawArgs: Array<CSSInterpolation>
) => {
  const emCssArgs = emCss(strings, ...rawArgs)
  const transformedStyles = transform(emCssArgs.styles)
  return (props: any) => ({
    ...emCssArgs,
    styles: styleToString(transformedStyles, props),
  })
}

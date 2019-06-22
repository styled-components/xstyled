import { css as emCss } from '@emotion/core'
import { transform } from '@xstyled/core'

function styleToString(style, props) {
  if (Array.isArray(style))
    return style.reduce((str, style) => str + styleToString(style, props), '')
  if (typeof style === 'function') return styleToString(style(props), props)
  return style
}

export function css(strings, ...rawArgs) {
  const emCssArgs = emCss(strings, ...rawArgs)
  const transformedStyles = transform(emCssArgs.styles)
  return props => ({
    ...emCssArgs,
    styles: styleToString(transformedStyles, props),
  })
}

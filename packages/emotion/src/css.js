import { css as emCss } from '@emotion/core'
import { transform } from '@xstyled/core'

export function css(...rawArgs) {
  const emCssArgs = emCss(...rawArgs)
  const transformedStyles = transform(emCssArgs.styles)
  return p => ({
    ...emCssArgs,
    styles: transformedStyles.reduce((str, style) => {
      const value = typeof style === 'function' ? style(p) : style
      return str + value
    }, ''),
  })
}

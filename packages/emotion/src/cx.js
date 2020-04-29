import { cascade, flatten } from '@xstyled/util'
import { css } from './css'

export function cx(styles) {
  if (typeof styles === 'string') return styles

  return (theme) => {
    const p = { theme }

    function parseStyle(style) {
      if (typeof style === 'object') {
        style = css(style)
      }
      return cascade(style, p)
    }

    if (Array.isArray(styles)) {
      return flatten(styles).map(parseStyle)
    }

    return parseStyle(styles)
  }
}

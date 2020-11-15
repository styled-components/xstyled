import { cascade, flatten } from '@xstyled/util'
import { css } from './css'

export function cx(styles: any) {
  if (typeof styles === 'string') return styles

  return (theme: any) => {
    const p = { theme }

    function parseStyle(style: any) {
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

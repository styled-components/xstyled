import { cascade, flatten } from '@xstyled/util'
import { Theme } from '@xstyled/system'
import { css, SerializedStylesFn } from './css'

export function cx(
  styles: SerializedStylesFn | SerializedStylesFn[],
): (theme: Theme) => any {
  if (typeof styles === 'string') return styles

  return (theme: Theme) => {
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

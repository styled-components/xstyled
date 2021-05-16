import { cascade, flatten, string } from '@xstyled/util'
import { Theme, StyleGenerator } from '@xstyled/system'
import { createCssFunction, SerializedStylesFn } from './createCssFunction'

export interface Cx {
  (styles: SerializedStylesFn | SerializedStylesFn[]):
    | string
    | ((theme: Theme) => any)
}

export const createCx = <TGen extends StyleGenerator>(generator: TGen): Cx => {
  const css = createCssFunction(generator)
  return (styles: SerializedStylesFn | SerializedStylesFn[]) => {
    if (string(styles)) return styles
    return (theme: Theme) => {
      const p = { theme }

      const parseStyle = (style: any) => {
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
}

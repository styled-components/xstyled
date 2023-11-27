import { createGlobalStyle as scCreateGlobalStyle } from 'styled-components'
import { StyleGenerator } from '@xstyled/system'
import { createCssFunction } from './createCssFunction'

export type XCreateGlobalStyle = typeof scCreateGlobalStyle

export const createCreateGlobalStyle = <TGen extends StyleGenerator>(
  generator: TGen,
): XCreateGlobalStyle => {
  const css = createCssFunction(generator)
  return ((
    ...args: Parameters<XCreateGlobalStyle>
  ): ReturnType<XCreateGlobalStyle> =>
    scCreateGlobalStyle(
      // @ts-ignore
      [css(...args)],
    )) as XCreateGlobalStyle
}

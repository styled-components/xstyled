import { createGlobalStyle as scCreateGlobalStyle } from 'styled-components'
import { StyleGenerator } from '@xstyled/system'
import { createCssFunction } from './createCssFunction'

export type XCreateGlobalStyle = typeof scCreateGlobalStyle

export const createCreateGlobalStyle = <TGen extends StyleGenerator>(
  generator: TGen,
): XCreateGlobalStyle => {
  const css = createCssFunction<TGen>(generator)
  return <Props extends object>(
    ...args: Parameters<typeof scCreateGlobalStyle<Props>>
  ) =>
    // @ts-expect-error
    scCreateGlobalStyle<Props>([css<Props>(...args)])
}

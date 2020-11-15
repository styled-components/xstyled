import { createGlobalStyle as scCreateGlobalStyle } from 'styled-components'
import { css } from './css'

export const createGlobalStyle = <P extends object = {}>(
  ...args: ArgsType<typeof scCreateGlobalStyle>
): ReturnType<typeof scCreateGlobalStyle> => {
  // @ts-ignore
  return scCreateGlobalStyle<P>([css(...args)])
}

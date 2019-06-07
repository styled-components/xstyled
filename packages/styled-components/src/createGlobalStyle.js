import { createGlobalStyle as scCreateGlobalStyle } from 'styled-components'
import { css } from './css'

export const createGlobalStyle = (...args) => {
  return scCreateGlobalStyle(css(...args))
}

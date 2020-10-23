import { createGlobalStyle as scCreateGlobalStyle } from 'styled-components/native'
import { css } from './css'

export const createGlobalStyle = (...args) => {
  return scCreateGlobalStyle([css(...args)])
}

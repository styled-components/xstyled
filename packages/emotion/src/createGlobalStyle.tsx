// @ts-nocheck
import * as React from 'react'
import { withTheme } from 'emotion-theming'
import { Global } from '@emotion/core'
import { css } from './css'

export const createGlobalStyle = (...args) => {
  const styles = css(...args)

  function GlobalStyle(props) {
    return <Global styles={styles(props)} />
  }

  return withTheme(GlobalStyle)
}

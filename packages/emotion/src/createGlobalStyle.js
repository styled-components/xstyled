import React from 'react'
import { Global, withTheme } from '@emotion/react'
import { css } from './css'

export const createGlobalStyle = (...args) => {
  const styles = css(...args)

  function GlobalStyle(props) {
    return <Global styles={styles(props)} />
  }

  return withTheme(GlobalStyle)
}
